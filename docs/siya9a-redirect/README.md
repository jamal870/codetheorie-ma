# siya9a.pro — Redirect zu codetheorie.ma

**Live-URL:** https://siya9a.pro
**Ziel:** https://codetheorie.ma

Dieser Ordner dient ausschließlich dazu, die Domain **siya9a.pro** (inkl. `www.siya9a.pro`) per **permanenter 301-Weiterleitung** auf **codetheorie.ma** umzuleiten.

Die eigentliche Website und alle Inhalte (z. B. `/pro` für Siya9a Pro) werden über das Lovable-Projekt / Netlify-Projekt **codetheorie.ma** ausgeliefert.

## Warum?

`siya9a.pro` war früher eine eigenständige Landing Page. Seit dem Relaunch der Finza-Produktfamilie laufen alle Inhalte zentral unter **codetheorie.ma**. Die alte Domain wird nicht mehr mit Inhalten betrieben, sondern leitet Besucher und Suchmaschinen-Autorität auf die neue Hauptdomain weiter.

## Weiterleitungs-Regeln

Alle URLs unter `siya9a.pro` werden 1:1 auf `codetheorie.ma` weitergeleitet:

| Aufruf | Ziel |
|--------|------|
| `https://siya9a.pro/` | `https://codetheorie.ma/` |
| `https://siya9a.pro/pro` | `https://codetheorie.ma/pro` |
| `https://www.siya9a.pro/*` | `https://codetheorie.ma/*` |
| `http://siya9a.pro/*` | `https://codetheorie.ma/*` |

Status: **301 permanent redirect** (`force = true`), sodass auch existierende Pfade nicht mehr auf dem alten Server landen.

## Konfiguration

- `siya9a/netlify.toml` — Netlify-Redirects mit `[[redirects]]` Blöcken
- `siya9a/_redirects` — identische Regeln im Netlify `_redirects`-Format (Fallback für andere Hosts/Setups)

## Deployment

### Option 1: GitHub → Netlify (empfohlen)

1. Repository pushen:
   ```bash
   cd siya9a
   git init
   git add .
   git commit -m "Redirect siya9a.pro → codetheorie.ma"
   git branch -M main
   git remote add origin https://github.com/DEIN_USERNAME/siya9a-redirect.git
   git push -u origin main
   ```
2. Auf [Netlify](https://app.netlify.com) einloggen
3. **Add new site → Import an existing project → GitHub**
4. Repository `siya9a-redirect` auswählen
5. **Build command:** leer lassen
6. **Publish directory:** `.` (Punkt, da dieser Ordner nur statische Redirect-Dateien enthält)
7. Domain `siya9a.pro` und `www.siya9a.pro` im Netlify-Projekt hinterlegen

### Option 2: Netlify CLI

```bash
cd siya9a
netlify deploy --dir=. --prod
```

### Option 3: Netlify Drag & Drop

1. [https://app.netlify.com/drop](https://app.netlify.com/drop) öffnen
2. Den `siya9a/`-Ordner per Drag & Drop hineinziehen
3. Domain `siya9a.pro` im Netlify-Projekt konfigurieren

## Test

Nach dem Deploy sollte ein Aufruf von `https://siya9a.pro` in einem 301 auf `https://codetheorie.ma` enden.

```bash
curl -I https://siya9a.pro
# location: https://codetheorie.ma/
```

## Ordnerstruktur

```
siya9a/
├── netlify.toml      # Netlify-Redirect-Regeln + Security-Header
├── _redirects        # Netlify _redirects-Datei (Fallback)
└── README.md         # Diese Datei
```

## Wichtig

- **Keine Landing-Page-Dateien mehr hinzufügen** (keine `index.html`, `tarifs.html`, etc.).
- **Keine Inhalte auf siya9a.pro hosten** — die Domain leitet nur weiter.
- Alle SEO-relevanten Inhalte, Sitemaps und Canonicals gehören in das Hauptprojekt unter `codetheorie.ma`.

## Kontakt

- **Hauptprojekt:** https://codetheorie.ma
- **WhatsApp:** https://wa.me/212700115210
