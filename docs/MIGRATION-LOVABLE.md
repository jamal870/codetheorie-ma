# Umzug von Lovable in dieses Repository — Stand 16. Oktober 2026

Quelle: `jamal870/narsa-drive-ready-9ae31802` (Lovable-Projekt, TanStack Start, archiviert am 6. September 2026), Commit `9ee16c5` vom 4. September 2026 („Icons in CTA ersetzt"). Der Verlauf (482 Commits) wird nicht übernommen. Dieses Repository beginnt mit dem Stand dieses Commits ohne Lovable-Bestandteile.

## Übernommen (unverändert)

Alle Seiten, Komponenten, Bilder, Styles, `public/` (robots.txt, llms.txt, Bilder), `DESIGN.md`, `roadmap.md`, `netlify.toml` (Build, Header), `src/server.ts` (SSR-Fehlerseite, Sicherheits-Header).

## Entfernt oder ersetzt

| Bestandteil | Warum |
| --- | --- |
| `@lovable.dev/vite-tanstack-config` (Build-kritisch) | Ersetzt durch eine explizite `vite.config.ts` mit denselben Plugins in derselben Reihenfolge (Tailwind, Pfad-Aliase, TanStack Start, Nitro-Preset `netlify` nur beim Build, React, lightningcss). `lightningcss` ist jetzt direkte dev-Dependency |
| `bun.lock`, `bunfig.toml` | Lockfile neu aus der öffentlichen npm-Registry erzeugt (`bun install --frozen-lockfile` geprüft); vier `@lovable.dev/*`-Ausnahmen aus `bunfig.toml` entfernt |
| `src/lib/lovable-error-reporting.ts` + Aufruf in `__root.tsx` | Rief `window.__lovableEvents` auf, das nur im Lovable-Editor existiert. `console.error` bleibt |
| `src/integrations/supabase/*`, `@supabase/supabase-js`, `attachSupabaseAuth` in `src/start.ts` | Von keiner Route verwendet (kein Import, kein Formular, kein `fetch`) |
| `supabase/` (Migrationen, config) | Tabelle `student_leads` (Name, Telefon, Fahrschule, Stadt, Score) wird vom Code nirgends beschrieben |
| `.env` (eingecheckt: Supabase-URL und öffentlicher Schlüssel) | Ohne Verwendung |
| `.lovable/`, `AGENTS.md` | Editor-Metadaten |
| `codetheorie-netlify.zip` | Alter Export (30. Juni) |
| `scripts/prerender-static.js` | Erzeugte den veralteten Ordner `deploy-static/`, der laut `DEPLOYMENT.md` nicht wiederhergestellt werden soll |
| `siya9a/` | Konfiguration eines separaten Netlify-Projekts (`siya9a.pro` → `codetheorie.ma`); nach `docs/siya9a-redirect/` verschoben, gehört nicht zur Seite |
| CSP-Eintrag `connect-src https://*.supabase.co wss://*.supabase.co` (in `netlify.toml` und `src/server.ts`) | Ohne Supabase nicht mehr nötig; `connect-src 'self'` |

## Nachweis

Beide Zustände (Septemberquelle mit Lovable-Paket, dieser Stand) wurden mit dem Netlify-Befehl gebaut (`NETLIFY=true`) und die gebaute Netlify-Funktion direkt aufgerufen: 16 Routen (alle Sitemap-URLs, `/sitemap.xml`, 404 für `/pro`, `/code`, `/theorie`, Schrägstrich-Varianten mit 307).

- Status, Content-Type, HTML und Sitemap sind in allen Routen byte-identisch.
- Einziger Unterschied in den Antwort-Headern: `Content-Security-Policy` ohne die Supabase-Hosts.
- Ausgabe `dist/`: gleiche 25 Dateien, gleiche `_headers`.
- Nicht lokal prüfbar: Netlify-Deploy und Live-Seite (kein Netzzugang aus der Sandbox).

## Wichtig zum Live-Stand

Das bisherige Netlify-Projekt „codetheorie.ma" war zuletzt mit `jamal870/codetheorie-ma-landing` verbunden, einem statischen Snapshot vom 3. Juli 2026 (Pre-Render-Export, kein Quelltext). Dort gibt es `/pro`, `/code` und `/theorie` als eigene Seiten; die Septemberquelle (und damit dieses Repository) hat diese Routen nicht. Auf `/pro` antwortet dieses Repository mit der 404-Seite der App. Wer `/pro` bewirbt, muss das beim Umschalten bedenken. Vorschlag: eine Weiterleitung `/pro` → `https://siya9apro.ma` in `netlify.toml` ergänzen, sobald entschieden ist.

## Offene Punkte (nur im Konto möglich)

1. **Netlify:** neues Projekt aus diesem Repository anlegen (Build `bun install && bun run build`, Publish `dist`), Vorschau prüfen, dann Domain `codetheorie.ma` umstellen (oder im bestehenden Projekt unter „Manage repository" das Repository wechseln). Rückweg: früheren Deploy mit „Publish deploy" veröffentlichen.
2. **Lovable:** GitHub-Verbindung des Projekts trennen, bevor weiter an der Quelle gearbeitet wird. Das Projekt erst nach einigen Tagen Live-Betrieb löschen.
3. **Supabase / Lovable Cloud:** Das Projekt zu `.env` prüfen (Tabelle `student_leads`: Zeilen, Zeilenebenen-Sicherheit) und danach Schlüssel rotieren oder Projekt löschen. Der öffentliche Schlüssel steht in der Git-Historie des alten Repositorys.
4. **Netlify-Umgebungsvariablen** mit `SUPABASE_`, `VITE_SUPABASE_` oder `LOVABLE_` löschen.
5. **Inhalte, die ich nicht belegen konnte:** Kennzahlen und Aussagen auf den Seiten (z. B. „1 480 Fragen", Zahl der Auto-Schulen, Zahlungsarten). Die WhatsApp-Nummer ist geklärt: `+212 661 349 492` (`212661349492`) gilt für alle Finza-Seiten und Apps; die abweichende Nummer `212621849661` wurde in den anderen Repositories ersetzt.
