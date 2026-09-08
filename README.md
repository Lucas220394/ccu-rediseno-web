# CCU · Rediseño web (prototipo)

Prototipo estático del sitio del **Centro Cooperativista Uruguayo**, pensado para que
cualquier persona pueda navegarlo de forma **fácil e intuitiva**. Reutiliza el
contenido y las imágenes del sitio actual (`ccu.org.uy`).

---

## Cómo verlo

Abrí `index.html` en el navegador. Para que carguen bien todas las rutas y assets,
serví la carpeta con cualquier servidor estático, por ejemplo:

```bash
# Python
python -m http.server 8080
# o Node
npx serve .
```

y entrá a `http://localhost:8080`.

---

## Qué se rediseñó

### 1. Arquitectura de información (lo central del pedido)

El sitio actual tiene un mega-menú con rutas crípticas y repetidas
(`acerca_del_area`, `acerca_del_area_que_hacemos`, `acerca_del_area_que_hacemos_habitat`,
tres enlaces distintos llamados "Acerca del Área", páginas casi vacías, etc.).

El rediseño lo reduce a **6 entradas** claras, con menús desplegables sólo donde aportan:

| Menú | Contenido |
|---|---|
| **Inicio** | Hero, 3 accesos por audiencia, cifras, enfoque, últimas noticias |
| **Institucional** ▾ | Sobre CCU · Cómo trabajamos · Movimiento cooperativo · Preguntas frecuentes |
| **Áreas de trabajo** ▾ | Hábitat · Rural · Programas Centrales · Regional Litoral |
| **Publicaciones** | Revista Dinámica + Recursos digitales (con filtro) |
| **Noticias** | Listado con filtro por área + plantilla de nota |
| **Contacto** | Sedes, formulario, enlaces |

Cambios de navegación clave:

- **Cada área en una sola página** con sub-navegación lateral "En esta página"
  (scroll-spy). Antes eran 2–3 páginas sueltas ("Acerca", "Programas", "Trabajos")
  enlazadas con un confuso "anterior / siguiente".
- **"Sobre CCU"** unifica presentación, historia, autoridades, equipo y membresías
  en una página con anclas, en vez de un scroll único sin puntos de referencia.
- **Migas de pan** (breadcrumb) en todas las páginas interiores.
- **Menú móvil** de pantalla completa con desplegables, en lugar del actual.
- Buscador y "volver arriba" siempre accesibles.

### 2. Mapa de URLs (actual → nuevo)

Para la implementación conviene redirigir (301):

| Actual | Nuevo |
|---|---|
| `/` | `/` |
| `/sobreccu` | `/sobre-ccu.html` |
| `/como_trabajamos` | `/como-trabajamos.html` |
| `/movimiento` | `/movimiento-cooperativo.html` |
| `/preguntas` | `/preguntas-frecuentes.html` |
| `/acerca_del_area_que_hacemos_habitat`, `/programas_actuales`, `/trabajos` | `/habitat.html` (con anclas `#programas`, `#obras`) |
| `/acerca_del_area_que_hacemos`, `/programas_de_trabajo` | `/rural.html` |
| `/acerca_del_area`, `/programas_centrales` | `/programas-centrales.html` |
| `/regional_litoral` | `/regional-litoral.html` |
| `/revista`, `/publicaciones` | `/publicaciones.html` |
| `/list_news`, `/news/:slug` | `/noticias.html`, `/noticia.html` |
| `/enlaces` | `/enlaces.html` |
| `/contacto` | `/contacto.html` |

### 3. Correcciones respecto del sitio actual

**SEO**
- `<title>` y `meta description` únicos por página.
- Open Graph y Twitter Card completos y con imagen (hoy están vacíos → el enlace
  compartido en WhatsApp/Facebook sale sin título ni imagen).
- `<link rel="canonical">` por página.
- Datos estructurados `schema.org/NGO` en la portada.
- `sitemap.xml` con URLs `https` + `robots.txt` que lo referencia.
- `lang="es-UY"`.

**Accesibilidad**
- `viewport` sin `maximum-scale`/`user-scalable=no`: el zoom vuelve a funcionar.
- Un solo `<h1>` por página y jerarquía `h2` → `h3` coherente (hoy hay 7+ `<h1>`).
- `alt` en todas las imágenes; el organigrama es HTML, no una imagen de texto.
- Enlace "Saltar al contenido", roles/landmarks, foco visible, `aria-*` en menús,
  acordeones y filtros, `prefers-reduced-motion`.
- Contraste AA en la paleta.

**Rendimiento / técnica**
- Sin jQuery, Bootstrap, SDK de Facebook ni Google Maps síncrono. **~4 KB de JS
  propio**, sin dependencias.
- Logo: **SVG de <1 KB** en lugar del GIF animado de 240 KB.
- Imágenes con `width`/`height`, `loading="lazy"` y recorte al tamaño de uso.
- CSS con tokens (custom properties), un solo archivo.
- Mapas: enlace a OpenStreetMap (sin API key). El mapa embebido del sitio actual
  no carga.

**Contenido**
- Se eliminan los `>` sueltos (`> Covicasa`, `> Descargar PDF`…), los typos
  ("Frequentes", "Hábitab", "un un") y las etiquetas de peso rotas ("PDF ()").
- Se completan las páginas que hoy están casi vacías (`/programas_de_trabajo`).

---

## Sistema de diseño

```
assets/
  css/styles.css     ← tokens + componentes (un solo archivo)
  js/main.js          ← menú, desplegables, filtros, acordeón, scroll-spy
  img/                ← imágenes reutilizadas de ccu.org.uy + logo SVG
```

- **Color:** verde cooperativo (`--green-600 #0f9d47`) + neutros cálidos.
- **Tipografía:** Titillium Web (la del sitio actual) vía Google Fonts, con fallback
  de sistema.
- **Componentes:** header con desplegables, page-hero, breadcrumb, cards, chips por
  categoría, filtros tipo "pill", acordeón, línea de tiempo, organigrama, stats,
  nav "En esta página", formulario, footer.
- **Responsive:** una sola columna en móvil, menú lateral, sin scroll horizontal.
- **Tema:** claro. Los tokens están listos para agregar modo oscuro si se quisiera.

---

## Imágenes

Todas provienen del sitio actual (`ccu.org.uy/uploads/...`). Donde el sitio servía
miniaturas (210–286 px) se descargó la variante `_f` (~1200 px) para mejor calidad.
El hero de portada se recortó para quitarle el marco/marca de agua incrustados.
El logo se rehízo como SVG a partir del GIF original (`logo_ani`).

---

## Cómo se generan las páginas

Las 15 páginas comparten cabecera/pie. Para no repetir ese HTML a mano se usa un
pequeño generador (sólo herramienta de autoría; **la salida es estática y no lo
necesita**):

```bash
node tools/build.mjs      # regenera los .html desde tools/pages.mjs
```

- `tools/build.mjs` — layout, cabecera, pie, `<head>`/SEO.
- `tools/pages.mjs` — el contenido de cada página.

---

## Limitaciones del prototipo / próximos pasos

- El **formulario de contacto**, el **buscador** y el **boletín** son maquetas sin
  backend.
- Las **noticias** y algunas fichas de obra usan datos de muestra; en producción
  saldrían del CMS.
- Los **PDF** de publicaciones enlazan a `#` (faltan las rutas reales).
- Falta integración con un gestor de contenidos y definir plantillas de
  "detalle de obra" y "detalle de noticia" con datos reales.
- Revisar redirecciones `http → https` y `www → dominio` del hosting.
- Servir con `Cache-Control` sensato y cabeceras de seguridad (HSTS, `nosniff`, …).
