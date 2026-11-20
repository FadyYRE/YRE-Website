# Y/RE Development — website

Statische website (Engels + Nederlands) voor yre-development.nl. Geen build-stap nodig: de map kan zo naar GitHub en Vercel.

## Online zetten

1. **GitHub**: maak een nieuwe repository (bijv. `yre-website`), kies *Add file → Upload files* en sleep de **inhoud** van deze map erin (dus `index.html`, `assets/`, `nl/`, … — niet de map zelf). Klik *Commit changes*.
2. **Vercel**: log in met GitHub → *Add New → Project* → kies `yre-website` → laat *Framework Preset* op **Other** staan → *Deploy*.
3. **Domein**: in Vercel *Settings → Domains* → voeg `yre-development.nl` (en `www.yre-development.nl`) toe en neem de DNS-records over bij je domeinprovider.
4. **Contactformulier**: maak een formulier op [formspree.io](https://formspree.io) met info@yre-development.nl als ontvanger en zet het adres (bijv. `https://formspree.io/f/abcdwxyz`) in `assets/config.js`. Zolang dat leeg is, opent "Verstuur aanvraag" het mailprogramma van de bezoeker met de aanvraag al ingevuld.

## Pagina's

Nederlands is de hoofdtaal (op het hoofdadres), Engels staat onder `/en`.

| Nederlands | Engels |
|---|---|
| `/` | `/en` |
| `/projecten` | `/en/projects` |
| `/projecten/ikaria` | `/en/projects/ikaria` |
| `/projecten/deelgebied-7` | `/en/projects/sub-area-7` |
| `/projecten/deelgebied-8` | `/en/projects/sub-area-8` |
| `/projecten/koolkiel` | `/en/projects/koolkiel` |
| `/diensten` | `/en/services` |
| `/over-ons` | `/en/about` |
| `/contact` | `/en/contact` |
| `/privacy` | `/en/privacy` |

Oude adressen (zoals `/nl/...`, `/projects`, `/about`) worden via `vercel.json` automatisch doorgestuurd.

## Iets aanpassen

Elke pagina is één HTML-bestand. De vier diensten (teksten en animaties) staan in `assets/services.js`. De teksten staan in de `<template id="dc-template">` en de projectgegevens (kerncijfers, team, afbeeldingen) in het script onderaan dezelfde pagina. Pas bij een wijziging steeds zowel de Engelse als de Nederlandse pagina aan. Na een commit op GitHub zet Vercel de nieuwe versie automatisch online.

## Techniek

- `assets/dc.js` — kleine renderer voor de pagina's (gebruikt [Preact](https://preactjs.com), MIT-licentie, in `assets/vendor/preact`).
- `assets/fonts` — Archivo en Instrument Sans, lokaal gehost (SIL Open Font License), dus geen verbinding met Google Fonts.
- `vercel.json` — nette URL's zonder `.html`.
- `sitemap.xml`, `robots.txt`, favicon en deelafbeelding zijn inbegrepen.
