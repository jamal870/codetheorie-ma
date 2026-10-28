import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

const SECURITY_HEADERS: Record<string, string> = {
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy":
    "accelerometer=(), autoplay=(), camera=(), display-capture=(), encrypted-media=(), fullscreen=(self), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), usb=(), interest-cohort=()",
  "Cross-Origin-Opener-Policy": "same-origin",
  "Cross-Origin-Resource-Policy": "same-origin",
};

/** Request header carrying the per-request nonce to `getRouter()` (see src/router.tsx). */
const NONCE_HEADER = "x-csp-nonce";

/**
 * Content-Security-Policy for the SSR HTML.
 *
 * - Production: every inline <script> TanStack Start emits carries the per-request nonce, so
 *   script-src can list 'self' and the nonce only — no 'unsafe-inline'.
 * - Development: Vite injects its own inline scripts (HMR client, React refresh preamble) that
 *   do not carry our nonce, so the dev server keeps 'unsafe-inline'.
 * - Fonts are self-hosted (public/fonts), images come from this origin only, no third party.
 * - style-src keeps 'unsafe-inline' for React style attributes; there is no inline <style>.
 *
 * Keep netlify.toml (static assets) in line with this list, except for the nonce.
 */
function contentSecurityPolicy(nonce: string | undefined): string {
  const scriptSrc = nonce ? `'self' 'nonce-${nonce}'` : "'self' 'unsafe-inline'";
  return [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "frame-ancestors 'self'",
    "form-action 'self'",
    `script-src ${scriptSrc}`,
    "style-src 'self' 'unsafe-inline'",
    "font-src 'self' data:",
    "img-src 'self' data: blob:",
    "connect-src 'self'",
    "manifest-src 'self'",
    "worker-src 'self' blob:",
    "upgrade-insecure-requests",
  ].join("; ");
}

function createNonce(): string {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary);
}

function withSecurityHeaders(response: Response, nonce: string | undefined): Response {
  const headers = new Headers(response.headers);
  for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
    headers.set(key, value);
  }
  headers.set("Content-Security-Policy", contentSecurityPolicy(nonce));
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

/**
 * Same request, with our nonce header set (a client-supplied value is always overwritten).
 * Built from its parts rather than `new Request(request, init)`: the dev server hands us a
 * Request from another implementation, which Node's constructor cannot copy.
 */
function withNonceHeader(request: Request, nonce: string | undefined): Request {
  const headers = new Headers(request.headers);
  if (nonce) headers.set(NONCE_HEADER, nonce);
  else headers.delete(NONCE_HEADER);
  const hasBody = request.method !== "GET" && request.method !== "HEAD" && request.body != null;
  const init: RequestInit & { duplex?: "half" } = {
    method: request.method,
    headers,
    signal: request.signal,
  };
  if (hasBody) {
    init.body = request.body;
    init.duplex = "half";
  }
  return new Request(request.url, init);
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    const nonce = import.meta.env.PROD ? createNonce() : undefined;
    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(withNonceHeader(request, nonce), env, ctx);
      return withSecurityHeaders(await normalizeCatastrophicSsrResponse(response), nonce);
    } catch (error) {
      console.error(error);
      return withSecurityHeaders(
        new Response(renderErrorPage(), {
          status: 500,
          headers: { "content-type": "text/html; charset=utf-8" },
        }),
        nonce,
      );
    }
  },
};
