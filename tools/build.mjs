/* ============================================================================
   CCU — Rediseño web · generador de páginas estáticas
   ----------------------------------------------------------------------------
   Herramienta de autoría: compone las páginas HTML finales a partir de un
   layout común + el contenido de cada página. La SALIDA (los .html en la raíz)
   es 100 % estática y no necesita este script para funcionar.

   Uso:  node tools/build.mjs
   ========================================================================== */

import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://ccu.org.uy";

/* ---------- helpers ------------------------------------------------------- */
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function head({ slug, title, description, image = "assets/img/hero-home.jpg" }) {
  const url = slug === "index" ? `${SITE}/` : `${SITE}/${slug}.html`;
  return `<!DOCTYPE html>
<html lang="es-UY">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:image" content="${SITE}/${image}">
<meta property="og:url" content="${url}">
<meta property="og:site_name" content="Centro Cooperativista Uruguayo">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="assets/img/logo-ccu.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/css/styles.css?v=7">
</head>
<body>
<a class="skip-link" href="#main">Saltar al contenido</a>`;
}

const CHEV = `<svg class="chev" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

function header(active) {
  const cur = (k) => (active === k ? ' aria-current="page"' : "");
  const openInst = ["sobre-ccu", "como-trabajamos", "movimiento-cooperativo", "preguntas-frecuentes"].includes(active);
  const openAreas = ["habitat", "rural", "programas-centrales", "regional-litoral"].includes(active);
  return `
<header class="site-header">
  <div class="wrap site-header__bar">
    <a class="site-header__logo" href="index.html" aria-label="CCU — Inicio">
      <img src="assets/img/logo_ani.gif" alt="Centro Cooperativista Uruguayo" width="640" height="360">
    </a>
    <nav class="primary-nav" id="primary-nav" aria-label="Principal">
      <ul>
        <li><a href="index.html"${cur("index")}>Inicio</a></li>
        <li class="has-dropdown" data-open="false">
          <button type="button" class="nav-toggle"${openInst ? ' aria-current="page"' : ""} aria-expanded="false" aria-haspopup="true">Institucional ${CHEV}</button>
          <ul class="dropdown">
            <li><a href="sobre-ccu.html">Sobre CCU <span>Historia, autoridades y equipo</span></a></li>
            <li><a href="como-trabajamos.html">Cómo trabajamos <span>Enfoque y metodología</span></a></li>
            <li><a href="movimiento-cooperativo.html">Movimiento cooperativo <span>Valores y principios</span></a></li>
            <li><a href="preguntas-frecuentes.html">Preguntas frecuentes <span>Cómo formar una cooperativa</span></a></li>
          </ul>
        </li>
        <li class="has-dropdown" data-open="false">
          <button type="button" class="nav-toggle"${openAreas ? ' aria-current="page"' : ""} aria-expanded="false" aria-haspopup="true">Áreas de trabajo ${CHEV}</button>
          <ul class="dropdown">
            <li><a href="habitat.html">Hábitat <span>Cooperativas de vivienda</span></a></li>
            <li><a href="rural.html">Rural <span>Cooperativismo agrario</span></a></li>
            <li><a href="programas-centrales.html">Programas Centrales <span>Economía social y solidaria</span></a></li>
            <li><a href="regional-litoral.html">Regional Litoral <span>Sede Paysandú</span></a></li>
          </ul>
        </li>
        <li><a href="publicaciones.html"${cur("publicaciones")}>Publicaciones</a></li>
        <li><a href="noticias.html"${cur("noticias")}>Noticias</a></li>
        <li><a href="contacto.html"${cur("contacto")}>Contacto</a></li>
      </ul>
    </nav>
    <div class="header-actions">
      <form class="search-mini" role="search" action="noticias.html" method="get">
        <label class="visually-hidden" for="q">Buscar en el sitio</label>
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/><path d="M21 21l-4.3-4.3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        <input type="search" id="q" name="q" placeholder="Buscar…">
      </form>
    </div>
    <button type="button" class="nav-burger" aria-label="Abrir menú" aria-expanded="false" aria-controls="primary-nav">
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>
    </button>
  </div>
</header>`;
}

function pageHero({ title, desc, crumbs }) {
  const items = [["index.html", "Inicio"], ...crumbs];
  const bc = items
    .map((c, i) =>
      i === items.length - 1
        ? `<li><span aria-current="page">${esc(c[1])}</span></li>`
        : `<li><a href="${c[0]}">${esc(c[1])}</a></li>`
    )
    .join("");
  return `
<section class="page-hero">
  <div class="wrap">
    <nav class="breadcrumb" aria-label="Ruta de navegación"><ol>${bc}</ol></nav>
    <h1>${esc(title)}</h1>
    ${desc ? `<p>${desc}</p>` : ""}
  </div>
</section>`;
}

const FOOTER = `
<footer class="site-footer">
  <div class="wrap">
    <div class="site-footer__grid">
      <div class="site-footer__brand">
        <img src="assets/img/logo_ani.gif" alt="Centro Cooperativista Uruguayo" width="640" height="360">
        <p>Creando vínculos, uniendo esfuerzos.</p>
        <div class="social-row">
          <a href="https://www.facebook.com/centrocooperativistauruguayo/" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13 22v-8h3l1-4h-4V7c0-1 .3-2 2-2h2V1.2C18.5 1.1 17.3 1 16 1c-3 0-5 1.8-5 5.2V10H8v4h3v8z"/></svg></a>
          <a href="https://www.youtube.com/channel/UCze_Iau3KSIlbY9xbv3XOyQ" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23 12s0-3.3-.4-4.9a2.7 2.7 0 0 0-1.9-1.9C18.9 5 12 5 12 5s-6.9 0-8.7.4a2.7 2.7 0 0 0-1.9 1.9C1 8.7 1 12 1 12s0 3.3.4 4.9a2.7 2.7 0 0 0 1.9 1.9C5.1 19 12 19 12 19s6.9 0 8.7-.4a2.7 2.7 0 0 0 1.9-1.9C23 15.3 23 12 23 12zM10 15.5v-7l6 3.5z"/></svg></a>
          <a href="https://issuu.com/centrocooperativistauruguayo" aria-label="Issuu"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7zm0 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/></svg></a>
        </div>
      </div>
      <div>
        <h2>Casa Central</h2>
        <ul>
          <li>Montevideo</li><li>Eduardo Víctor Haedo 2252</li>
          <li>Tel: <a href="tel:+59824012541">(+598) 2401 2541</a></li>
          <li><a href="mailto:ccu@ccu.org.uy">ccu@ccu.org.uy</a></li>
        </ul>
      </div>
      <div>
        <h2>Regional Litoral</h2>
        <ul>
          <li>Paysandú</li><li>Rincón 1234</li>
          <li>Tel: <a href="tel:+59847228713">(+598) 4722 8713</a></li>
          <li><a href="mailto:cculit@ccu.org.uy">cculit@ccu.org.uy</a></li>
        </ul>
      </div>
      <div>
        <h2>Secciones</h2>
        <ul>
          <li><a href="sobre-ccu.html">Sobre CCU</a></li>
          <li><a href="habitat.html">Área Hábitat</a></li>
          <li><a href="rural.html">Área Rural</a></li>
          <li><a href="programas-centrales.html">Programas Centrales</a></li>
          <li><a href="regional-litoral.html">Regional Litoral</a></li>
          <li><a href="publicaciones.html">Publicaciones</a></li>
          <li><a href="noticias.html">Noticias</a></li>
          <li><a href="enlaces.html">Enlaces</a></li>
        </ul>
      </div>
    </div>
    <div class="site-footer__legal">
      <span>© <span data-year>2026</span> Centro Cooperativista Uruguayo</span>
      <span>Prototipo de rediseño</span>
    </div>
  </div>
</footer>
<button type="button" class="to-top" aria-label="Volver arriba">
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
</button>
<script src="assets/js/main.js?v=5"></script>
</body>
</html>`;

/* on-page nav (sticky "En esta página") */
function onpage(items) {
  return `<nav class="onpage-nav" aria-label="En esta página">
  <p>En esta página</p>
  <ul>${items.map(([id, label]) => `<li><a href="#${id}">${esc(label)}</a></li>`).join("")}</ul>
</nav>`;
}

function render(page) {
  const hero = page.hero === false ? "" : pageHero(page.heroData);
  return (
    head(page) +
    header(page.slug) +
    `\n<main id="main">\n` +
    hero +
    "\n" +
    page.body +
    `\n</main>\n` +
    FOOTER +
    "\n"
  );
}

/* ============================================================================
   CONTENIDO DE LAS PÁGINAS
   ========================================================================== */
import { PAGES } from "./pages.mjs";

let n = 0;
for (const p of PAGES) {
  const file = join(ROOT, `${p.slug}.html`);
  writeFileSync(file, render(p), "utf8");
  n++;
  console.log("✓", `${p.slug}.html`);
}
console.log(`\n${n} páginas generadas.`);
