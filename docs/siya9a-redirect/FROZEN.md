# siya9a.pro — Stand eingefroren

**Datum:** 2026-07-05
**Live-URL:** https://siya9a.pro → **301** → https://codetheorie.ma
**Netlify-Projekt:** `siya9a-redirect` (separates Projekt, nur Redirects)

## Bestätigter Zustand

- `curl -I https://siya9a.pro` → `301` → `https://codetheorie.ma/`
- `curl -I https://www.siya9a.pro` → `301` → `https://codetheorie.ma/`
- DNS (Apex + `www`) zeigt auf `siya9a-redirect.netlify.app`
- SSL/TLS Zertifikat aktiv (Netlify managed)

## Was hier lebt

Dieser Ordner enthält **ausschließlich** statische Redirect-Konfiguration:

- `netlify.toml` — 301-Regeln (Apex, www, http, https) + Fallback
- `_redirects` — identische Regeln als Fallback-Format
- `README.md` — Doku
- `FROZEN.md` — diese Datei

Es gibt **keine** `index.html`, keine Assets, keinen Build.

## Deploy-Setup

- **Netlify-Projekt:** `siya9a-redirect`
- **Publish directory:** `.` (siya9a-Ordner selbst, keine Build-Step)
- **Build command:** leer
- **Domains im Netlify-Projekt:** `siya9a.pro`, `www.siya9a.pro`

## Andere Subdomains (Status offen, nicht anfassen ohne Freigabe)

Laut DNS-Panel zeigen weitere Subdomains noch auf alte Netlify-Apps:

| Subdomain | Ziel |
|-----------|------|
| `cdn.siya9a.pro` | `cdn.siya9a.netlify.app` |
| `code.siya9a.pro` | `siya9acode.netlify.app` |
| `i.siya9a.pro` | `siya9a.netlify.app` |
| `my.siya9a.pro` | `siya9a.netlify.app` |
| `app.siya9a.pro` | anderer Host |

**Nicht umziehen, nicht löschen** ohne ausdrückliche Freigabe des Nutzers.

## Hard Constraints (eingefroren)

- ❌ **Keine Landing-Page-Dateien** hier reinlegen (keine `index.html`, `tarifs.html`, keine Assets).
- ❌ **Keine Inhalte** unter `siya9a.pro` hosten — nur 301 auf `codetheorie.ma`.
- ❌ **`siya9a.pro` niemals auf Lovable** umziehen/verbinden (Nutzer-Constraint, siehe Memory).
- ❌ **DNS für `cdn` / `code` / `i` / `my` / `app`** nicht ändern ohne Freigabe.
- ❌ Redirect-Regeln in `netlify.toml` / `_redirects` **nicht verändern**.
- ❌ Netlify-Projekt `siya9a-redirect` **nicht umbenennen/löschen**.

## Änderungen nur mit Freigabe

Jede Änderung an:
- `siya9a/netlify.toml`
- `siya9a/_redirects`
- den DNS-Records von `siya9a.pro`
- dem Netlify-Projekt `siya9a-redirect`

**erfordert ausdrückliche Zustimmung des Nutzers**. Standardantwort bei Fragen dazu: erst nachfragen, nicht ausführen.
