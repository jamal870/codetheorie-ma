import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { createIsomorphicFn } from "@tanstack/react-start";
import { getRequestHeader } from "@tanstack/react-start/server";
import { routeTree } from "./routeTree.gen";

/**
 * CSP nonce of the current request. `src/server.ts` generates one per request, puts it in the
 * `Content-Security-Policy` header and forwards it to the SSR handler via this request header.
 * The router stamps it on every inline <script> it renders, so the policy can drop
 * 'unsafe-inline'. On the client the router reads it back from <meta property="csp-nonce">.
 */
const getCspNonce = createIsomorphicFn()
  .server(() => getRequestHeader("x-csp-nonce") || undefined)
  .client(() => undefined);

export const getRouter = () => {
  const queryClient = new QueryClient();
  const nonce = getCspNonce();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    ...(nonce ? { ssr: { nonce } } : {}),
  });

  return router;
};
