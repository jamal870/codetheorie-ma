# Finza Design System

Ein gemeinsames Design-System für alle Finza-Produkte (Finza Tech, Siya9a,
Siya9a Pro, Finza Mizan). Ziel: jede Seite fühlt sich wie Teil derselben
Familie an, jedes Produkt behält trotzdem eine eigene Akzentfarbe.

> **Goldene Regel:** Niemals Farben hart-coden (`bg-blue-500`, `#3b82f6`,
> `text-white`). Immer die semantischen Finza-Tokens verwenden
> (`bg-finza-brand`, `text-finza-ink`, …). Nur so funktioniert der
> Produkt-Wechsel über `data-product`.

---

## 1. Basis-Tokens (Cloud White, geteilt von allen Produkten)

Definiert in [`src/styles.css`](src/styles.css) unter `:root`.

| Token                  | Wert (≈)   | Tailwind-Klasse        | Verwendung                       |
| ---------------------- | ---------- | ---------------------- | -------------------------------- |
| `--finza-paper`        | `#fafbfc`  | `bg-finza-paper`       | Seiten-Hintergrund               |
| `--finza-surface`      | `#e8ecf1`  | `bg-finza-surface`     | Karten, Sektionen, Inputs        |
| `--finza-line`         | `#e2e8f0`  | `border-finza-line`    | Trennlinien, Hairlines           |
| `--finza-ink`          | `#0f172a`  | `text-finza-ink`       | Primärer Text, Überschriften     |
| `--finza-ink-soft`     | `#64748b`  | `text-finza-ink-soft`  | Sekundärer Text, Captions        |
| `--finza-brand`        | pro Produkt| `bg/text-finza-brand`  | CTAs, Highlights, Logo-Akzent    |
| `--finza-brand-soft`   | pro Produkt| `bg-finza-brand-soft`  | Soft-Badges, Hover-States        |
| `--finza-brand-ink`    | meist `#fff`| `text-finza-brand-ink` | Text **auf** Brand-Flächen       |

### Form & Tiefe

| Token            | Wert                    | Wofür                      |
| ---------------- | ----------------------- | -------------------------- |
| `--finza-radius` | `1rem`                  | Karten, Buttons, Inputs    |
| `--finza-shadow` | weich, 2-lagig          | Default-Karten             |
| `--finza-shadow-brand` | brand-getöntes Glow | Hero-CTAs, Featured Cards |

### Typografie

| Token            | Familie    | Wofür             |
| ---------------- | ---------- | ----------------- |
| `--font-display` | **Instrument Sans** | H1–H6, Logo  |
| `--font-body`    | **Instrument Sans** | Fließtext, UI |

Fonts werden in [`src/routes/__root.tsx`](src/routes/__root.tsx) per
`<link>` aus Google Fonts geladen — **niemals** als `@import` in `styles.css`.

---

## 2. Akzentfarben pro Produkt

Die Akzentfarbe wird **ausschließlich** über das Attribut `data-product` am
Root-Element gesetzt. Die Komponenten selbst kennen die Farbe nicht.

```tsx
// Beispiel: eine Mizan-Seite
<main data-product="mizan" className="bg-finza-paper">
  <button className="bg-finza-brand text-finza-brand-ink">
    Commencer
  </button>
</main>
```

| `data-product`  | Produkt        | Akzent (Hue)        | Charakter                |
| --------------- | -------------- | ------------------- | ------------------------ |
| `finza`         | Finza Tech     | Blue `#3b82f6`      | Mutterhaus, vertrauensvoll |
| `siya9a`        | Siya9a         | Sky  `#38bdf8`      | Hell, ansprechbar (Schüler) |
| `siya9a-pro`    | Siya9a Pro     | Teal `#0d9488`      | Professionell, ruhig       |
| `mizan`         | Finza Mizan    | Indigo `#6366f1`    | Seriös, bilanziell         |

> **Palette-Regel:** Nur kühle, ruhige Töne (Blau-/Cyan-/Teal-/Indigo-Familie).
> **Kein Rot, kein Gelb/Gold** — diese Farben sind aus dem Finza-Vokabular
> ausgeschlossen, damit die Familie als seriöse Fintech-Marke lesbar bleibt.

Neues Produkt hinzufügen:

1. Eintrag in [`src/components/finza/products.ts`](src/components/finza/products.ts) ergänzen.
2. Neuen `[data-product="…"]`-Block in `src/styles.css` anlegen, der nur
   `--finza-brand` und `--finza-brand-soft` (ggf. `--finza-brand-ink`)
   überschreibt.
3. Auf der Produktseite `data-product="…"` am Root-Element setzen.

---

## 3. Layout-Bausteine

Alle Seiten verwenden dieselben Layout-Komponenten aus
[`src/components/finza/`](src/components/finza/):

- `FinzaHeader` — Logo, Produkt-Switcher, primärer CTA
- `FinzaFooter` — Produkte, Company-Links, Copyright
- `FinzaCard` — einheitliche Karte (Radius, Border, Shadow)
- `FinzaSection` — Standard-Spacing & Container-Breite

**Layout-Struktur: Hero Grid.** Jede Produktseite folgt dem gleichen Rhythmus:
Hero → 3–4 Feature-Cards im Grid → Detail-Sektionen → Footer.

---

## 4. Do / Don't

✅ **Do**
- Tokens nutzen: `bg-finza-brand`, `text-finza-ink`, `border-finza-line`.
- Akzent nur über `data-product` wechseln.
- `FinzaHeader` / `FinzaFooter` auf **jeder** Produktseite verwenden.
- Instrument Sans für Überschriften und Body — keine weiteren Fonts.
- Glanz nur über `finza-sheen` / `finza-glow` und `--finza-shadow-lift` — nie über neue Farben.

❌ **Don't**
- Keine Hex-Werte oder Tailwind-Farben (`bg-blue-600`, `#fff`) in Komponenten.
- Kein Rot, kein Gelb/Gold — nicht als Akzent, nicht als Statusfarbe-Default.
- Keine eigenen Header/Footer pro Produkt bauen.
- Kein `@import` von Font-URLs in `styles.css` (Build bricht).
