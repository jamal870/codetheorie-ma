# codetheorie.ma

Quelltext der Website https://codetheorie.ma (Code Théorie by Finza Tech): TanStack Start (React 19, Vite 8, Tailwind 4), serverseitig gerendert als Netlify-Funktion über Nitro.

## Entwicklung

```bash
bun install
bun run dev      # http://localhost:8080
bun run build    # erzeugt dist/ und .netlify/functions-internal
```

Netlify baut mit `bun install && bun run build` (siehe `netlify.toml`). Routen: `/`, `/eleves`, `/guides` (+3 Ratgeber), `/mentions-legales`, `/cgv`, `/confidentialite`. Die Sitemap ist eine statische Datei (`public/sitemap.xml`) und wird bei neuen Seiten von Hand ergänzt. Design-Regeln: `DESIGN.md`. Herkunft und Ablösung von Lovable: `docs/MIGRATION-LOVABLE.md`.
