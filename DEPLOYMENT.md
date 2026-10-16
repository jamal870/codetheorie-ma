# Deployment

**Live-URL:** https://codetheorie.ma
**Repo:** `jamal870/codetheorie-ma`, Branch `main`
**Hosting:** Netlify (Auto-Deploy bei Push auf `main`)

## Build

- `netlify.toml`: `command = "bun install && bun run build"`, `publish = "dist"`, `NODE_VERSION = 20`.
- `vite.config.ts`: explizite Konfiguration; beim Build erzeugt Nitro mit dem Preset `netlify` die SSR-Funktion unter `.netlify/functions-internal/` und die statischen Dateien unter `dist/`.
- Sicherheits-Header: in `netlify.toml` (statische Dateien) und `src/server.ts` (SSR-Antworten). Beide müssen gleich bleiben.

## Hinweise

- Kein manueller statischer Snapshot (früher `deploy-static/`): er blockiert Live-Updates und gehört nicht ins Repo.
- Die Weiterleitung `siya9a.pro` → `codetheorie.ma` ist ein separates Netlify-Projekt (`siya9a-redirect`). Dessen Konfiguration lag früher im Ordner `siya9a/` des alten Repos und ist in `docs/siya9a-redirect/` abgelegt.
- Bei Fehlern: In Netlify unter „Deploys" einen früheren Deploy auswählen und „Publish deploy" klicken.
