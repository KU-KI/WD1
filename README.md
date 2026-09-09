# Webový dizajn 1 (WD1)

Tento repozitár slúži ako vzdelávací materiál a zbierka praktických cvičení pre študentov predmetu **Webový dizajn 1** na **Katolíckej univerzite v Ružomberku (Katedra informatiky)**.

Repozitár obsahuje 27 ucelených praktických lekcií pokrývajúcich základy HTML5, sémantiku, typografiu, tabuľky, formuláre, responzívne rozloženia (CSS Flexbox a CSS Grid), transformácie, animácie a moderné webové komponenty.

---

## 🚀 Ako spustiť projekt lokálne

Môžete si vybrať jeden z dvoch odporúčaných spôsobov:

### Spôsob A: Cez Node.js a vstavaný live-server (Odporúčané)
1. Uistite sa, že máte nainštalovaný [Node.js](https://nodejs.org/).
2. Otvorte terminál v koreňovom priečinku projektu.
3. Nainštalujte závislosti:
   ```bash
   npm install
   ```
4. Spustite vývojový server:
   ```bash
   npm start
   ```
5. Prehliadač automaticky otvorí hlavný rázcestník na adrese `http://localhost:8080/` (alebo inom voľnom porte) so živým obnovovaním pri každej zmene kódu.

---

### Spôsob B: Cez Visual Studio Code a rozšírenie Live Server
1. Otvorte priečinok repozitára vo **Visual Studio Code**.
2. Nainštalujte si rozšírenie **Live Server** (od *Ritwick Dey*).
3. Kliknite pravým tlačidlom myši na súbor `index.html` a zvoľte **"Open with Live Server"** (alebo kliknite na tlačidlo *Go Live* v stavovom riadku vpravo dole).

---

## 📂 Štruktúra projektu

```text
WD1/
├── index.html            # Hlavný interaktívny rázcestník a dashboard cvičení
├── css/                  # Kaskádové štýly k jednotlivým lekciám
│   ├── dashboard.css     # Štýly pre hlavný rázcestník
│   ├── flexbox.css
│   ├── grid.css
│   └── ...
├── js/                   # Skripty pre interaktívne ukážky (flexbox, bonusy)
├── pages/                # Jednotlivé HTML lekcie a cvičenia (2 až 28)
│   ├── 2-index.html      # Základné HTML značky, zoznamy, tabuľky
│   ├── 3-header.html     # Sémantická hlavička a navigácia
│   ├── ...
│   └── 28-bonus1.html    # Centrovanie a flex zarovnanie
├── img/                  # Obrázky a vektorové SVG ikony k cvičeniam
├── doc/
│   └── css.txt           # Rýchly prehľad a študijný ťahák k syntaxi CSS
├── package.json          # Konfigurácia npm skriptov a závislostí
└── README.md             # Táto dokumentácia
```

---

## 📚 Prehľad lekcií a tém

| Číslo | Súbor | Téma cvičenia | Kľúčové koncepty |
|:-----:|:------|:--------------|:-----------------|
| **02** | `pages/2-index.html` | Základné HTML značky | Nadpisy, odseky, `ul`/`ol`/`dl`, odkazy, `iframe` |
| **03** | `pages/3-header.html` | Hlavička stránky | `<header>`, `<nav>`, zoznam odkazov |
| **04** | `pages/4-footer.html` | Pätička stránky | `<footer>`, sociálne ikony, prístupnosť (`alt`) |
| **05** | `pages/5-aside.html` | Bočný panel | `<aside>`, zalomenie textu, sémantika |
| **06** | `pages/6-section.html` | Sekcie a články | `<section>`, `<article>`, SVG pozadie |
| **07** | `pages/7-table1.html` | Tabuľka 1: Posun | `<table>`, `border-collapse`, horizontálne pretečenie |
| **08** | `pages/8-table2.html` | Tabuľka 2: Flexbox | Responzívna tabuľka cez `@media` queries a flexbox |
| **09** | `pages/9-form.html` | Webový formulár | `<form>`, HTML5 vstupy, validácia, unikátne ID |
| **10** | `pages/10-fonty.html` | Webová typografia | Pripojenie Google Fonts, hierarchia písma |
| **11** | `pages/11-imageText.html` | Text s obrázkom | `background-clip: text`, orezávanie výplne |
| **12** | `pages/12-audio-video-iframe.html` | Multimédiá a mapy | `<audio>`, `<video>`, OSM a Google Maps v iframe |
| **13** | `pages/13-flexbox.html` | Flexbox laboratórium | Živý interaktívny playground vlastností flexboxu |
| **14** | `pages/14-flexbox1.html` | Flexbox 1 | Pomer šírok a fixné medzery (gutters) |
| **15** | `pages/15-flexbox2.html` | Flexbox 2 | Dvojstĺpcový layout (sidebar + content) |
| **16** | `pages/16-flexbox3.html` | Flexbox 3 | Základné zarovnanie a centrovanie |
| **17** | `pages/17-flexbox_gallery1.html` | Flexbox galéria 1 | Viacriadková dlaždicová mriežka (`flex-wrap`) |
| **18** | `pages/18-flexbox_gallery2.html` | Flexbox galéria 2 | Galéria s dvanásťstĺpcovou flex mriežkou |
| **19** | `pages/19-grid.html` | CSS Grid - Oblasti | `grid-template-areas`, `gap`, komplexná kostra webu |
| **20** | `pages/20-grid2.html` | CSS Grid 2 | `grid-template-columns`, jednotky `fr`, fixné stĺpce |
| **21** | `pages/21-flexbox_grid.html` | Flexbox vs. Grid | Priame porovnanie implementácie rovnakej stránky |
| **22** | `pages/22-positionSFRA.html` | CSS Pozicionovanie | `static`, `relative`, `absolute` a `fixed` |
| **23** | `pages/23-transform.html` | CSS Transformácie 1 | `translate`, `rotate`, `scale`, `skew`, 3D matice |
| **24** | `pages/24-transform1.html` | CSS Transformácie 2 | Interaktívne karty s transformáciami na hover |
| **25** | `pages/25-transition.html` | Plynulé prechody | Vlastnosť `transition`, časovanie, trvanie, oneskorenie |
| **26** | `pages/26-youtube.html` | Responzívne video | Vkladanie videa z YouTube s vycentrovaním cez Grid |
| **27** | `pages/27-bonus.html` | HTML5 & CSS3 Bonusy | `<dialog>`, `<details>`, `<meter>`, `<progress>`, multicol |
| **28** | `pages/28-bonus1.html` | Centrovanie prvkov | Všetky spôsoby centrovania (flexbox + `margin: auto`) |

---

## 💡 Základné pravidlá tvorby moderného webu (Clean Code)

Pri riešení vlastných úloh a semestrálnych zadaní dbajte na nasledujúce zásady:
1. **Responzívny viewport**: Každý HTML dokument musí v hlavičke `<head>` obsahovať:
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```
2. **Unikátnosť identifikátorov**: Každé `id` v HTML dokumente musí byť jedinečné. Pre skupiny prvkov (napr. radio tlačidlá) používajte rovnaké `name`, ale unikátne `id` prepojené s `<label for="...">`.
3. **Prístupnosť (Accessibility / a11y)**: Všetky zmysluplné obrázky a ikony musia mať vyplnený atribút `alt`. Formulárové prvky musia mať popisky `<label>`.
4. **Validný štandardný kód**: Používajte štandardný `<!DOCTYPE html>` a nastavte jazyk dokumentu, napr. `<html lang="sk">`.
5. **Oddelenie štruktúry a štýlov**: HTML definuje sémantický obsah, CSS zabezpečuje vizuálnu prezentáciu v externých súboroch `.css`.

---

© Katolícka univerzita v Ružomberku • Katedra informatiky
