/* Contenido de cada página del rediseño de CCU.
   Texto adaptado del sitio actual (ccu.org.uy). */

/* ---------- mini componentes ------------------------------------------- */
const onpage = (items) => `<nav class="onpage-nav" aria-label="En esta página">
  <p>En esta página</p>
  <ul>${items.map(([id, label]) => `<li><a href="#${id}">${label}</a></li>`).join("")}</ul>
</nav>`;

const newsCard = (img, cat, catClass, date, dISO, title, excerpt) => `
<article class="card" data-cat="${cat}">
  <div class="card__media"><img src="${img}" alt="" width="1200" height="720" loading="lazy"></div>
  <div class="card__body">
    <p class="card__meta"><span class="chip ${catClass}">${cat}</span> <time datetime="${dISO}">${date}</time></p>
    <h3 class="card__title"><a href="noticia.html">${title}</a></h3>
    <p class="muted">${excerpt}</p>
  </div>
</article>`;

const feature = (num, title, body) => `
<div class="feature"><p class="feature__num">${num}</p><h3>${title}</h3><p class="muted">${body}</p></div>`;

const progCard = (title, body, tag) => `
<div class="card card--pad">
  ${tag ? `<span class="chip">${tag}</span>` : ""}
  <h3 style="margin:.5rem 0 .4rem">${title}</h3>
  <p class="muted">${body}</p>
</div>`;

const faqItem = (i, q, a) => `
<div class="accordion__item">
  <h3 style="margin:0"><button type="button" class="accordion__trigger" id="faq-t-${i}" aria-expanded="false" aria-controls="faq-p-${i}">${q}</button></h3>
  <div class="accordion__panel" id="faq-p-${i}" role="region" aria-labelledby="faq-t-${i}" hidden>${a}</div>
</div>`;

/* ==========================================================================
   INICIO
   ========================================================================== */
const INDEX = {
  slug: "index",
  title: "CCU — Centro Cooperativista Uruguayo",
  description:
    "Desde 1961 el Centro Cooperativista Uruguayo acompaña a cooperativas de vivienda, rurales y de la economía social con promoción, capacitación y asistencia técnica en todo Uruguay.",
  hero: false,
  body: `
  <section class="hero">
    <div class="wrap hero__grid">
      <div>
        <p class="eyebrow">Centro Cooperativista Uruguayo · desde 1961</p>
        <h1>Creando vínculos, uniendo esfuerzos</h1>
        <p class="lead">Somos una organización no gubernamental que acompaña experiencias cooperativas y asociativas en todo el país: vivienda, medio rural y economía social y solidaria.</p>
        <div class="hero__actions">
          <a class="btn btn--primary" href="habitat.html">Quiero formar una cooperativa de vivienda</a>
          <a class="btn btn--ghost" href="sobre-ccu.html">Conocé al CCU</a>
        </div>
      </div>
      <div class="hero__media">
        <img src="assets/img/hero-home.jpg" alt="Vecinos y vecinas plantando árboles en un predio de una cooperativa de vivienda." width="790" height="526" fetchpriority="high">
      </div>
    </div>
  </section>

  <section class="section" aria-labelledby="accesos-h">
    <div class="wrap">
      <h2 id="accesos-h" class="center">¿Qué estás buscando?</h2>
      <p class="center muted" style="margin-bottom:2.5rem">Tres caminos para empezar a trabajar con nosotros.</p>
      <div class="grid grid--3">
        <a class="card card--link" href="habitat.html">
          <div class="card__media"><img src="assets/img/habitat-hero.jpg" alt="Obra de una cooperativa de vivienda por ayuda mutua en construcción." width="1200" height="800" loading="lazy"></div>
          <div class="card__body">
            <span class="chip chip--habitat">Hábitat</span>
            <h3 class="card__title">Cooperativas de vivienda</h3>
            <p class="muted">Asistencia técnica integral —arquitectura, social, jurídica y contable— en todas las etapas de la cooperativa.</p>
            <span class="link-arrow" aria-hidden="true">Ver el área</span>
          </div>
        </a>
        <a class="card card--link" href="rural.html">
          <div class="card__media"><img src="assets/img/rural-hero.jpg" alt="Productores en una jornada de apicultura del Área Rural." width="1200" height="800" loading="lazy"></div>
          <div class="card__body">
            <span class="chip chip--rural">Rural</span>
            <h3 class="card__title">Cooperativismo agrario</h3>
            <p class="muted">Promoción, formación y apoyo a organizaciones asociativas agrarias con valores cooperativos.</p>
            <span class="link-arrow" aria-hidden="true">Ver el área</span>
          </div>
        </a>
        <a class="card card--link" href="programas-centrales.html">
          <div class="card__media"><img src="assets/img/centrales-hero.jpg" alt="Reunión de trabajo de una cooperativa de la economía social." width="1200" height="800" loading="lazy"></div>
          <div class="card__body">
            <span class="chip">Programas Centrales</span>
            <h3 class="card__title">Economía social y solidaria</h3>
            <p class="muted">Alianzas y herramientas que fortalecen a cooperativas de trabajo, sociales y de cuidados.</p>
            <span class="link-arrow" aria-hidden="true">Ver el área</span>
          </div>
        </a>
      </div>
    </div>
  </section>

  <section class="section section--green" aria-labelledby="numeros-h">
    <div class="wrap">
      <h2 id="numeros-h" class="center" style="margin-bottom:2rem">64 años de trabajo colectivo</h2>
      <div class="stats">
        <div class="stat"><div class="stat__num">1961</div><div class="stat__label">Año de fundación</div></div>
        <div class="stat"><div class="stat__num">+8.000</div><div class="stat__label">Cooperativas de vivienda asesoradas</div></div>
        <div class="stat"><div class="stat__num">6.819</div><div class="stat__label">Viviendas construidas con asistencia del CCU</div></div>
        <div class="stat"><div class="stat__num">1.829</div><div class="stat__label">Familias realojadas desde asentamientos</div></div>
      </div>
    </div>
  </section>

  <section class="section" aria-labelledby="enfoque-h">
    <div class="wrap">
      <p class="eyebrow">Cómo trabajamos</p>
      <h2 id="enfoque-h">Promovemos cooperación</h2>
      <div class="grid grid--4" style="margin-top:2rem">
        ${feature("01", "Promoción", "Mover ideas, dinamizar y canalizar inquietudes en propuestas concretas.")}
        ${feature("02", "Capacitación", "Transmitir conocimiento para lograr autonomía de gestión y poder de negociación.")}
        ${feature("03", "Asistencia técnica", "Equipos interdisciplinarios con métodos validados en la teoría y en la práctica.")}
        ${feature("04", "Enfoque asociativo", "Los grupos cooperativos como camino hacia un desarrollo sustentable y equitativo.")}
      </div>
      <p style="margin-top:1.5rem"><a class="link-arrow" href="como-trabajamos.html">Conocé nuestra metodología</a></p>
    </div>
  </section>

  <section class="section section--tint" aria-labelledby="noticias-h">
    <div class="wrap">
      <div style="display:flex;justify-content:space-between;align-items:end;flex-wrap:wrap;gap:1rem;margin-bottom:2rem">
        <div><p class="eyebrow">Actualidad</p><h2 id="noticias-h">Últimas noticias</h2></div>
        <a class="btn btn--ghost" href="noticias.html">Ver todas</a>
      </div>
      <div class="grid grid--3">
        ${newsCard("assets/img/news/n2.jpg", "Área Hábitat", "chip--habitat", "6 ago 2026", "2026-08-06", "Llamado a Lic. en Trabajo Social", "Para incorporarse al equipo del Área Hábitat del Centro Cooperativista Uruguayo. Grado 5.")}
        ${newsCard("assets/img/news/n3.jpg", "Área Hábitat", "chip--habitat", "4 ago 2026", "2026-08-04", "Llamado a concurso de Abogado/a", "Concurso de oposición y méritos para un cargo de Abogado/a — Grado 5, 40 horas mensuales.")}
        ${newsCard("assets/img/news/n1.jpg", "Área Hábitat", "chip--habitat", "10 jul 2026", "2026-07-10", "Cómo las cooperativas están cambiando el acceso al hogar", "Participamos de un episodio de «CoopsAméricas en Movimiento» sobre vivienda cooperativa en la región.")}
      </div>
    </div>
  </section>

  <section class="section" aria-labelledby="cta-h">
    <div class="wrap">
      <h2 id="cta-h" class="visually-hidden">Más recursos</h2>
      <div class="grid grid--2">
        <div class="card card--pad">
          <span class="chip">Formación</span>
          <h3 style="margin:.6rem 0">Movimiento cooperativo</h3>
          <p class="muted">Qué es el cooperativismo, su historia y los siete principios que lo sostienen.</p>
          <p style="margin-top:1rem"><a class="link-arrow" href="movimiento-cooperativo.html">Leer más</a></p>
        </div>
        <div class="card card--pad">
          <span class="chip">Ayuda</span>
          <h3 style="margin:.6rem 0">Preguntas frecuentes</h3>
          <p class="muted">Cuántas personas se necesitan, requisitos, marco legal y pasos para iniciar el trámite.</p>
          <p style="margin-top:1rem"><a class="link-arrow" href="preguntas-frecuentes.html">Ver preguntas</a></p>
        </div>
      </div>
    </div>
  </section>

  <section class="section section--green" aria-labelledby="boletin-h">
    <div class="wrap wrap--narrow center">
      <h2 id="boletin-h">Suscribite al boletín</h2>
      <p class="muted" style="margin-bottom:1.5rem">Recibí nuestras noticias periódicamente en tu correo.</p>
      <form style="display:flex;gap:.6rem;flex-wrap:wrap;justify-content:center" onsubmit="return false">
        <label class="visually-hidden" for="mail">Tu correo electrónico</label>
        <input id="mail" type="email" required placeholder="tu@correo.com" style="font:inherit;padding:.8rem 1rem;border:1px solid var(--line);border-radius:999px;min-width:260px">
        <button class="btn btn--primary" type="submit">Suscribirme</button>
      </form>
    </div>
  </section>`,
};

/* ==========================================================================
   SOBRE CCU
   ========================================================================== */
const SOBRE = {
  slug: "sobre-ccu",
  title: "Sobre CCU — Historia, autoridades y equipo",
  description:
    "El Centro Cooperativista Uruguayo, fundado en 1961: presentación, misión, historia, autoridades, equipo y membresías nacionales e internacionales.",
  image: "assets/img/institucional-hero.jpg",
  heroData: {
    title: "Sobre CCU",
    desc: "Una organización no gubernamental que, desde 1961, promueve el desarrollo de las experiencias cooperativas en todo el territorio nacional.",
    crumbs: [["#", "Institucional"], ["sobre-ccu.html", "Sobre CCU"]],
  },
  body: `
  <section class="section">
    <div class="wrap layout-with-aside">
      ${onpage([
        ["presentacion", "Presentación"],
        ["mision", "Nuestra misión"],
        ["historia", "Nuestra historia"],
        ["autoridades", "Autoridades"],
        ["equipo", "Equipo"],
        ["membresias", "Membresías"],
      ])}
      <div class="prose">
        <section id="presentacion" aria-labelledby="presentacion-h">
          <h2 id="presentacion-h">Presentación</h2>
          <p>El Centro Cooperativista Uruguayo es una organización no gubernamental que promueve el desarrollo de las experiencias cooperativas a nivel de todo el territorio nacional. Su motivación es el logro de la integración social de todas las personas y la mejora en la calidad de vida, contribuyendo así con el desarrollo humano y comunitario cooperativo.</p>
          <p>CCU entiende que la mejora social está en generar espacios para la formación de grupos asociativos autogestionarios y/o cooperativos. Sus áreas de trabajo principales, además de proyectos centrales, son intervenciones en el Hábitat y en lo Rural.</p>
          <figure style="margin:1.5rem 0">
            <img src="assets/img/institucional-hero.jpg" alt="Integrantes y cooperativistas del CCU en una jornada de trabajo colectivo." width="1200" height="800" loading="lazy" style="border-radius:var(--radius)">
          </figure>
        </section>

        <hr class="divider">

        <section id="mision" aria-labelledby="mision-h">
          <h2 id="mision-h">Nuestra misión</h2>
          <p>Coadyuvar en la promoción del desarrollo sustentable, entendido como el proceso tendiente a una mejora de la calidad de vida de cada uno y de todos los seres, a través del apoyo de iniciativas cooperativas o asociativas que resulten viables, solidarias, replicables y articuladoras.</p>
          <p>Esto no sólo implica la respuesta organizativa, sino la preocupación permanente por la búsqueda de alternativas, pudiéndose incluso llegar a la formulación de propuestas de políticas públicas.</p>
        </section>

        <hr class="divider">

        <section id="historia" aria-labelledby="historia-h">
          <h2 id="historia-h">Nuestra historia</h2>
          <p>Fundado en 1961, CCU ha contribuido con el desarrollo y fortalecimiento de iniciativas cooperativas, centrando su accionar en la vivienda colectiva popular, el ahorro y crédito, y la producción artesanal, industrial y agraria. Se destaca su capacidad de articular a todo el sistema cooperativo y de generar lazos con otras organizaciones del movimiento social.</p>
          <ol class="timeline" style="margin-top:1.5rem">
            <li><span class="year">1961</span><h3>Fundación del CCU</h3><p class="muted">El 11 de noviembre se funda el Centro Cooperativista Uruguayo.</p></li>
            <li><span class="year">1966</span><h3>Primeras cooperativas de vivienda</h3><p class="muted">Se crea el sector vivienda del CCU con tres experiencias piloto: Isla Mala, Éxodo de Artigas y Cosvam.</p></li>
            <li><span class="year">1967</span><h3>Central Lanera Uruguaya</h3><p class="muted">Nace una de las mayores cooperativas de segundo grado del país con apoyo del CCU.</p></li>
            <li><span class="year">1968</span><h3>Ley de Vivienda 13.728</h3><p class="muted">Se aprueba el marco legal que da forma al cooperativismo de vivienda en Uruguay.</p></li>
            <li><span class="year">1970</span><h3>Regional Litoral Norte</h3><p class="muted">Se abre la sede descentralizada de Paysandú para atender al interior del país.</p></li>
            <li><span class="year">1970</span><h3>Fundación de FUCVAM</h3><p class="muted">El CCU asesora y alienta la integración de las cooperativas en una organización de segundo grado.</p></li>
            <li><span class="year">1990</span><h3>Programa Apícola y PROMOPES</h3><p class="muted">Se consolidan líneas de trabajo con productores rurales y cooperativas de producción.</p></li>
            <li><span class="year">2010</span><h3>Regularización de asentamientos</h3><p class="muted">Se sistematiza el programa de realojo en viviendas dignas construidas por ayuda mutua.</p></li>
            <li><span class="year">2021</span><h3>60 años del CCU</h3><p class="muted">Seis décadas creando vínculos y uniendo esfuerzos junto al movimiento cooperativo.</p></li>
          </ol>
        </section>

        <hr class="divider">

        <section id="autoridades" aria-labelledby="autoridades-h">
          <h2 id="autoridades-h">Autoridades</h2>
          <p class="muted">Comité de gestión</p>
          <div class="orgchart" style="margin-top:1rem">
            <div class="orgchart__node orgchart__top"><strong>Comité de gestión</strong>Presidencia · Vicepresidencia · Secretaría Ejecutiva</div>
            <div class="orgchart__row">
              <div class="orgchart__node"><strong>Coordinación Hábitat</strong>Instituto de Asistencia Técnica</div>
              <div class="orgchart__node"><strong>Coordinación Rural / Programas Centrales</strong>Cooperativismo agrario y economía social</div>
              <div class="orgchart__node"><strong>Área Central</strong>Administración, finanzas y gestión humana</div>
              <div class="orgchart__node"><strong>Regional Litoral</strong>Sede Paysandú</div>
            </div>
          </div>
          <ul class="grid grid--2" style="list-style:none;padding:0;margin-top:1.5rem">
            <li class="card card--pad"><strong>Arq. Horacio Pérez Zamora</strong><br><span class="muted">Presidente</span></li>
            <li class="card card--pad"><strong>T.S. Noela Pandulli</strong><br><span class="muted">Vicepresidenta</span></li>
            <li class="card card--pad"><strong>Laura Nocetti</strong><br><span class="muted">Secretaria Ejecutiva</span></li>
            <li class="card card--pad"><strong>Arq. Verónica Carve</strong><br><span class="muted">Coordinadora Hábitat</span></li>
            <li class="card card--pad"><strong>Ing. Agr. Andrea Politi</strong><br><span class="muted">Coordinadora Programas Centrales / Rural</span></li>
          </ul>
        </section>

        <hr class="divider">

        <section id="equipo" aria-labelledby="equipo-h">
          <h2 id="equipo-h">Equipo</h2>
          <p>Un equipo interdisciplinario de más de setenta personas —arquitectura, trabajo social, área contable, jurídica y notarial, agronomía y administración— distribuido entre la Casa Central de Montevideo y la Regional Litoral de Paysandú.</p>
          <figure style="margin:1.5rem 0">
            <img src="assets/img/equipo.jpg" alt="Foto grupal del equipo del Centro Cooperativista Uruguayo." width="1200" height="800" loading="lazy" style="border-radius:var(--radius)">
          </figure>
          <div class="roster">
            <h4>Área Hábitat</h4>
            <ul><li>Coordinación · Secretaría · Gestoría</li><li>Sección Arquitectura</li><li>Sección Social</li><li>Sección Contable</li><li>Sección Jurídica</li><li>Equipo Realojo El Progreso</li></ul>
            <h4>Programas Centrales / Rural</h4>
            <ul><li>Coordinación</li><li>Ingeniería agronómica</li><li>Extensión rural</li></ul>
            <h4>Área Central</h4>
            <ul><li>Administración y finanzas</li><li>Secretaría y recepción</li><li>Gestión humana</li><li>Comunicación</li><li>Mantenimiento e informática</li></ul>
            <h4>Regional Litoral</h4>
            <ul><li>Encargatura regional</li><li>Arquitectura · Social · Contable · Jurídica</li><li>Recepción y secretaría</li></ul>
          </div>
        </section>

        <hr class="divider">

        <section id="membresias" aria-labelledby="membresias-h">
          <h2 id="membresias-h">Membresías</h2>
          <p>El CCU integra —en varios casos como miembro cofundador— redes nacionales e internacionales de promoción del cooperativismo y la economía social.</p>
          <div class="grid grid--2" style="margin-top:1rem">
            ${progCard("ANONG", "Asociación Nacional de Organizaciones No Gubernamentales del Uruguay.", "Nacional")}
            ${progCard("CUDECOOP", "Confederación Uruguaya de Entidades Cooperativas. Miembro cofundador; actualmente ejercemos la presidencia.", "Nacional")}
            ${progCard("ALOP", "Asociación Latinoamericana de Organizaciones de Promoción. Miembro cofundador y contraparte nacional.", "Internacional")}
            ${progCard("HIC", "Habitat International Coalition. Miembro cofundador.", "Internacional")}
            ${progCard("ACI", "Alianza Cooperativa Internacional.", "Internacional")}
          </div>
        </section>
      </div>
    </div>
  </section>`,
};

/* ==========================================================================
   CÓMO TRABAJAMOS
   ========================================================================== */
const COMO = {
  slug: "como-trabajamos",
  title: "Cómo trabajamos — Enfoque y metodología del CCU",
  description:
    "El enfoque del Centro Cooperativista Uruguayo: promoción, capacitación, asistencia técnica y enfoque asociativo. Dónde y con quiénes trabajamos.",
  heroData: {
    title: "Cómo trabajamos",
    desc: "Estimulamos la creación de grupos autogestionarios: a través del esfuerzo conjunto y organizado, las personas mejoran su calidad de vida.",
    crumbs: [["#", "Institucional"], ["como-trabajamos.html", "Cómo trabajamos"]],
  },
  body: `
  <section class="section">
    <div class="wrap wrap--narrow prose">
      <h2>Actividad concreta</h2>
      <p>En CCU se estimula la creación de grupos autogestionarios porque se cree en que, a través del esfuerzo conjunto y organizado, las personas son capaces de mejorar su calidad de vida. Se estimula la conciencia social, basada en el conocimiento de la realidad de las personas y en su capacidad para transformarla. Parte del trabajo es la generación de espacios de fomento del cooperativismo, la autogestión, la ayuda mutua y la solidaridad.</p>
    </div>
  </section>

  <section class="section section--tint" aria-labelledby="enfoque-h">
    <div class="wrap">
      <h2 id="enfoque-h">Nuestro enfoque</h2>
      <div class="grid grid--2" style="margin-top:2rem">
        <div class="feature"><h3>La promoción</h3><p class="muted">Impulso para fomentar proyectos, dinamizar, dar forma y canalizar inquietudes. A través de la promoción se recepcionan ideas que después se vuelcan en nuevas propuestas.</p></div>
        <div class="feature"><h3>La capacitación</h3><p class="muted">Transmisión de conocimientos e información a los actores que lo necesiten. Incentiva la autonomía en la gestión y fortalece la capacidad de negociación y de generar propuestas.</p></div>
        <div class="feature"><h3>La asistencia técnica</h3><p class="muted">Herramienta interdisciplinaria que domina técnicas y métodos específicos, en la teoría y en la práctica, para dar un enfoque integral a la realidad de cada grupo.</p></div>
        <div class="feature"><h3>Enfoque asociativo</h3><p class="muted">Los grupos cooperativos o asociativos como los capaces de lograr el desarrollo sustentable, colaborando con una distribución del ingreso más equitativa y una mejor participación ciudadana.</p></div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="grid grid--2" style="align-items:center">
        <div class="prose">
          <h2>Dónde trabajamos</h2>
          <p>CCU trabaja en todo el país y también a nivel regional. Ha impulsado acciones cooperativas en Cuba, Paraguay, Brasil y Chile. Se destaca su experiencia con pequeños productores rurales y con sectores urbanos —trabajadores asalariados, artesanos, sindicatos y otras organizaciones sociales— en vivienda, ahorro y crédito y consumo.</p>
          <p>Cuenta con dos sedes: una en Montevideo y otra en Paysandú.</p>
          <p><a class="link-arrow" href="contacto.html">Ver ubicaciones y contacto</a></p>
        </div>
        <figure style="margin:0">
          <img src="assets/img/rural-taller.jpg" alt="Taller de formación cooperativa con personas trabajando alrededor de una mesa." width="1200" height="800" loading="lazy" style="border-radius:var(--radius)">
        </figure>
      </div>
    </div>
  </section>

  <section class="section section--green">
    <div class="wrap center">
      <h2>Conocé nuestras áreas de trabajo</h2>
      <p class="muted" style="margin-bottom:1.5rem">Cada área aplica este enfoque a un campo específico.</p>
      <div class="hero__actions" style="justify-content:center">
        <a class="btn btn--primary" href="habitat.html">Hábitat</a>
        <a class="btn btn--ghost" href="rural.html">Rural</a>
        <a class="btn btn--ghost" href="programas-centrales.html">Programas Centrales</a>
        <a class="btn btn--ghost" href="regional-litoral.html">Regional Litoral</a>
      </div>
    </div>
  </section>`,
};

/* ==========================================================================
   MOVIMIENTO COOPERATIVO
   ========================================================================== */
const MOV = {
  slug: "movimiento-cooperativo",
  title: "Movimiento cooperativo — Valores, historia y principios",
  description:
    "Qué es el movimiento cooperativo: sus valores éticos, su historia desde Rochdale (1844) y los siete principios de la Alianza Cooperativa Internacional.",
  heroData: {
    title: "Movimiento cooperativo",
    desc: "La cooperación de sus integrantes en lo económico y lo social como medio para satisfacer necesidades comunes.",
    crumbs: [["#", "Institucional"], ["movimiento-cooperativo.html", "Movimiento cooperativo"]],
  },
  body: `
  <section class="section">
    <div class="wrap layout-with-aside">
      ${onpage([
        ["definicion", "Definición"],
        ["valores", "Valores"],
        ["historia", "Historia"],
        ["principios", "Principios"],
      ])}
      <div class="prose">
        <section id="definicion" aria-labelledby="def-h">
          <h2 id="def-h">Qué es</h2>
          <p>El movimiento cooperativo es el movimiento social que define la cooperación de sus integrantes, en lo económico y lo social, como medio para que productores y consumidores —integrados en asociaciones voluntarias llamadas cooperativas— obtengan un beneficio mayor para la satisfacción de sus necesidades. Está representado a escala mundial por la Alianza Cooperativa Internacional.</p>
        </section>
        <hr class="divider">
        <section id="valores" aria-labelledby="val-h">
          <h2 id="val-h">Valores cooperativos</h2>
          <p>Los principios organizativos se fundamentan en valores éticos universales:</p>
          <div class="grid grid--2" style="margin-top:1rem">
            ${progCard("Ayuda mutua", "El accionar de un grupo para la solución de problemas comunes.")}
            ${progCard("Esfuerzo propio", "La motivación y la voluntad de los miembros para alcanzar las metas previstas.")}
            ${progCard("Responsabilidad", "Compromiso con el cumplimiento de las actividades y con los demás asociados.")}
            ${progCard("Democracia", "Toma de decisiones colectivas mediante la participación y el protagonismo.")}
            ${progCard("Igualdad", "Todos los asociados tienen iguales deberes y derechos.")}
            ${progCard("Equidad", "Justa distribución de los excedentes entre los miembros.")}
            ${progCard("Solidaridad", "Apoyar y cooperar en la solución de problemas de asociados, familia y comunidad.")}
          </div>
        </section>
        <hr class="divider">
        <section id="historia" aria-labelledby="hist-h">
          <h2 id="hist-h">Historia del cooperativismo</h2>
          <p>Con varios precedentes a lo largo de la historia y con las experiencias de los socialistas utópicos, el punto de partida efectivo del movimiento cooperativo se ubica el 24 de octubre de 1844 en Inglaterra, cuando 28 trabajadores de la industria textil de Rochdale, sin empleo tras una huelga, constituyeron la Sociedad Equitativa de los Pioneros de Rochdale.</p>
        </section>
        <hr class="divider">
        <section id="principios" aria-labelledby="prin-h">
          <h2 id="prin-h">Los siete principios</h2>
          <ol>
            <li><strong>Adhesión voluntaria y abierta.</strong></li>
            <li><strong>Gestión democrática por parte de los socios</strong> — un socio, un voto.</li>
            <li><strong>Participación económica de los socios.</strong></li>
            <li><strong>Autonomía e independencia.</strong></li>
            <li><strong>Educación, formación e información.</strong></li>
            <li><strong>Cooperación entre cooperativas.</strong></li>
            <li><strong>Interés por la comunidad.</strong></li>
          </ol>
        </section>
      </div>
    </div>
  </section>`,
};

/* ==========================================================================
   HÁBITAT
   ========================================================================== */
const cooperativas = [
  ["Plan Tero", "tramite"], ["Covicasa", "obra"], ["Covipark", "obra"], ["Estación Atlántida", "tramite"],
  ["Covicitrus", "finalizada"], ["Covisar", "finalizada"], ["Coviazú", "finalizada"], ["Covitac", "obra"],
  ["Covimam 2011", "obra"], ["31 de Agosto", "tramite"], ["Covilife", "obra"], ["Coviusol", "finalizada"],
  ["Covisurpay", "obra"], ["Esperanza", "tramite"], ["Covifín", "obra"], ["Ufama Cordón", "obra"],
  ["Fupho", "finalizada"], ["Covifuam", "finalizada"], ["Covitex", "finalizada"], ["Covilan", "obra"],
  ["Covifamu", "obra"], ["Covipoltoros", "tramite"], ["Covisepi", "finalizada"], ["Covidino", "obra"],
  ["CoviInti", "tramite"], ["CoviReyes", "obra"], ["Ufama Cuareim", "obra"], ["Celeste Montevideo", "obra"],
  ["Covimerflo", "obra"], ["Coviapp", "tramite"], ["Coviessu", "obra"], ["Coviconsu", "obra"],
];
const estadoLabel = { obra: "En obra", tramite: "En trámite", finalizada: "Finalizada" };
const HABITAT = {
  slug: "habitat",
  title: "Área Hábitat — Cooperativas de vivienda | CCU",
  description:
    "El Área Hábitat del CCU acompaña cooperativas de vivienda desde la integración del grupo hasta el fin de la obra, con un instituto de asistencia técnica interdisciplinario.",
  image: "assets/img/habitat-hero.jpg",
  heroData: {
    title: "Área Hábitat",
    desc: "Fomentamos y acompañamos la construcción de viviendas cooperativas, desde la integración de los grupos humanos hasta el final de la obra.",
    crumbs: [["#", "Áreas de trabajo"], ["habitat.html", "Hábitat"]],
  },
  body: `
  <section class="section">
    <div class="wrap layout-with-aside">
      ${onpage([
        ["que-hacemos", "Qué hacemos"],
        ["programas", "Programas"],
        ["asesoramiento", "Asesoramiento"],
        ["obras", "Obras y cooperativas"],
      ])}
      <div>
        <section id="que-hacemos" class="prose" aria-labelledby="qh-h">
          <h2 id="qh-h">Qué hacemos</h2>
          <p>El Área Hábitat de CCU se dedica a fomentar y acompañar las experiencias de construcción de viviendas cooperativas, desde la integración de los grupos humanos hasta el final de la construcción. Lo hace a través de su Instituto de Asistencia Técnica, un equipo interdisciplinario integrado por arquitectos, ingenieros, trabajadores sociales, abogados y contadores, entre otros.</p>
          <p>Además, trabaja con un programa de regularización de asentamientos cuyo objetivo es que las familias radicadas en espacios irregulares se establezcan en viviendas dignas, con asesoramiento en proyectos urbanos, arquitectónicos, constructivos, sociales, legales y de capacitación.</p>
          <div class="stats" style="margin-top:1.5rem">
            <div class="stat"><div class="stat__num">+8.000</div><div class="stat__label">Cooperativas asesoradas en todo el país</div></div>
            <div class="stat"><div class="stat__num">6.819</div><div class="stat__label">Viviendas construidas con asistencia del CCU</div></div>
            <div class="stat"><div class="stat__num">1.829</div><div class="stat__label">Familias realojadas desde asentamientos</div></div>
          </div>
        </section>

        <hr class="divider">

        <section id="programas" aria-labelledby="prog-h">
          <h2 id="prog-h">Programas actuales</h2>
          <div class="grid grid--2" style="margin-top:1.5rem">
            ${progCard("Cooperativas de vivienda por ayuda mutua", "El grupo aporta 21 horas de trabajo semanales equivalentes al 15 % del préstamo.")}
            ${progCard("Fondos Sociales de Vivienda", "Solución habitacional para trabajadores de una misma empresa o sindicato.")}
            ${progCard("Regularización de asentamientos", "Realojo en viviendas dignas construidas por ayuda mutua, con abordaje integral.")}
            ${progCard("Rehabilitación urbana", "Recuperación de fincas y tejido urbano existente para uso habitacional cooperativo.")}
            ${progCard("Vivienda mínima", "Respuestas para hogares con necesidades habitacionales urgentes.")}
            ${progCard("Consultoría, asistencia técnica y capacitación", "Servicios a cooperativas, organismos públicos y otras organizaciones.")}
          </div>
        </section>

        <hr class="divider">

        <section id="asesoramiento" aria-labelledby="ase-h">
          <h2 id="ase-h">Qué incluye el asesoramiento</h2>
          <div class="accordion" style="margin-top:1rem">
            ${faqItem("h1", "Planes de vivienda y financiamiento", "Orientación sobre modalidades, cupos y acceso al préstamo de la ANV / MVOT.")}
            ${faqItem("h2", "Asesoramiento social", "Fines y funciones de la cooperativa, relevamiento socio-económico, apoyo a los órganos, organización y funcionamiento.")}
            ${faqItem("h3", "Asesoramiento jurídico", "Personería jurídica, estatutos, reglamentos, contratos y convenios.")}
            ${faqItem("h4", "Terreno, anteproyecto y obra", "Adquisición del terreno, presentación ante organismos públicos, certificado de cierre de obra y dirección técnica.")}
            ${faqItem("h5", "Administración de obra", "Metrajes y presupuestos, pedidos de precios, control de avance y seguimiento presupuestal.")}
            ${faqItem("h6", "Administrativo, contable y financiero", "Contabilidad y balances, recibos sociales, gastos comunes, estados de cuenta y capacitación a tesoreros y comisiones fiscales.")}
            ${faqItem("h7", "Servicios notariales", "Certificaciones, testimonios y asesoramiento para contratos y escrituras.")}
            ${faqItem("h8", "Asesorías especiales", "Agrimensura e ingenierías sanitaria, eléctrica y civil.")}
          </div>
        </section>

        <hr class="divider">

        <section id="obras" data-filter-group aria-labelledby="obr-h">
          <h2 id="obr-h">Obras y cooperativas</h2>
          <p class="muted">Desde 1961 hemos trabajado junto a cooperativistas de muchas localidades del país.</p>

          <h3 style="margin-top:1.5rem">Obras destacadas</h3>
          <div class="grid grid--3" style="margin:1rem 0 2rem">
            <article class="card">
              <div class="card__media"><img src="assets/img/obras/plan-tero.jpg" alt="Complejo de viviendas cooperativas visto desde el aire." width="1200" height="800" loading="lazy"></div>
              <div class="card__body"><span class="chip chip--habitat">FSV</span><h4 class="card__title">FSV Cutcsa Agraciada</h4><p class="muted">Fondo Social de Vivienda de obreros y empleados de Cutcsa.</p></div>
            </article>
            <article class="card">
              <div class="card__media"><img src="assets/img/obras/coviofrit.jpg" alt="Complejo de viviendas cooperativas Coviofrit terminado." width="1200" height="800" loading="lazy"></div>
              <div class="card__body"><span class="chip chip--habitat">Ayuda mutua</span><h4 class="card__title">Coviofrit</h4><p class="muted">Cooperativa de vivienda por ayuda mutua en Tacuarembó.</p></div>
            </article>
            <article class="card">
              <div class="card__media"><img src="assets/img/obras/fupho.jpg" alt="Viviendas de la cooperativa Fupho en San José." width="1200" height="800" loading="lazy"></div>
              <div class="card__body"><span class="chip chip--habitat">Ayuda mutua</span><h4 class="card__title">Fupho — San José</h4><p class="muted">Cooperativa de vivienda por ayuda mutua. Inaugurada en 2022.</p></div>
            </article>
          </div>

          <h3>Cooperativas en proceso</h3>
          <div class="filterbar" role="group" aria-label="Filtrar cooperativas por estado">
            <button type="button" data-filter="all" aria-pressed="true">Todas</button>
            <button type="button" data-filter="obra" aria-pressed="false">En obra</button>
            <button type="button" data-filter="tramite" aria-pressed="false">En trámite</button>
            <button type="button" data-filter="finalizada" aria-pressed="false">Finalizadas</button>
          </div>
          <ul class="grid grid--4" style="list-style:none;padding:0">
            ${cooperativas
              .map(
                ([nombre, estado]) => `<li class="card card--pad" data-cat="${estado}">
              <strong>${nombre}</strong><br><span class="chip chip--habitat">${estadoLabel[estado]}</span>
            </li>`
              )
              .join("")}
          </ul>
          <p data-empty hidden class="note">No hay cooperativas en ese estado.</p>
        </section>
      </div>
    </div>
  </section>`,
};

/* ==========================================================================
   RURAL
   ========================================================================== */
const RURAL = {
  slug: "rural",
  title: "Área Rural — Cooperativismo agrario | CCU",
  description:
    "El Área Rural del CCU promueve, forma y apoya organizaciones asociativas agrarias con valores cooperativos, y trabaja la institucionalidad pública para el desarrollo rural.",
  image: "assets/img/rural-hero.jpg",
  heroData: {
    title: "Área Rural",
    desc: "Promoción, formación y apoyo a organizaciones asociativas agrarias con valores cooperativos, priorizando la innovación en la gestión y los sectores de menores recursos.",
    crumbs: [["#", "Áreas de trabajo"], ["rural.html", "Rural"]],
  },
  body: `
  <section class="section">
    <div class="wrap layout-with-aside">
      ${onpage([
        ["que-hacemos", "Qué hacemos"],
        ["programas", "Programas"],
        ["con-quienes", "Con quiénes trabajamos"],
      ])}
      <div>
        <section id="que-hacemos" class="prose" aria-labelledby="rqh-h">
          <h2 id="rqh-h">Qué hacemos</h2>
          <p>Guiado por su misión de mejora de la calidad de vida, el Área Rural de CCU se dedica a la promoción, formación y apoyo de organizaciones asociativas agrarias con valores cooperativos, priorizando las que suponen innovaciones en las formas de gestión y las vinculadas a sectores de escasos recursos del medio rural.</p>
          <p>Desde 2004 desarrolla además una línea de trabajo vinculada a la institucionalidad pública agropecuaria, contribuyendo al diseño y la ejecución de políticas e instrumentos para el desarrollo rural. Ha trabajado la temática cooperativa en Argentina, Brasil, Chile, Cuba y Paraguay bajo la modalidad de cooperación Sur-Sur.</p>
          <figure style="margin:1.5rem 0">
            <img src="assets/img/rural-hero.jpg" alt="Grupo de personas en una jornada de apicultura del Área Rural." width="1200" height="800" loading="lazy" style="border-radius:var(--radius)">
          </figure>
        </section>

        <hr class="divider">

        <section id="programas" aria-labelledby="rprog-h">
          <h2 id="rprog-h">Programas de trabajo</h2>
          <div class="grid grid--1" style="margin-top:1.5rem;gap:1rem">
            ${progCard("Formación y capacitación", "Cursos y talleres para técnicos y productores en estrategias asociativas, gestión y producción; incluye cursos adjudicados por INEFOP.")}
            ${progCard("Institucionalidad para el desarrollo rural", "Estudios y propuestas para fortalecer las estructuras públicas que favorecen al desarrollo rural.")}
            ${progCard("Apoyo a organizaciones colectivas agrarias", "Asistencia técnica y elaboración de proyectos con cooperativas, sociedades de fomento rural y grupos de productores familiares.")}
          </div>
        </section>

        <hr class="divider">

        <section id="con-quienes" aria-labelledby="rcq-h">
          <h2 id="rcq-h">Con quiénes trabajamos</h2>
          <ul class="pill-list" style="margin-top:1rem">
            <li>Cooperativas agrarias</li>
            <li>Sociedades de Fomento Rural</li>
            <li>Gremiales de productores</li>
            <li>Organizaciones de segundo grado</li>
            <li>Grupos y redes de productores familiares</li>
            <li>Colectivos de trabajadores rurales</li>
            <li>Organizaciones cooperativas de la región</li>
          </ul>
          <figure style="margin:1.5rem 0">
            <img src="assets/img/rural-taller.jpg" alt="Taller de formación con productores rurales." width="1200" height="800" loading="lazy" style="border-radius:var(--radius)">
          </figure>
        </section>
      </div>
    </div>
  </section>`,
};

/* ==========================================================================
   PROGRAMAS CENTRALES
   ========================================================================== */
const CENTRALES = {
  slug: "programas-centrales",
  title: "Programas Centrales — Economía social y solidaria | CCU",
  description:
    "Los Programas Centrales del CCU son alianzas estratégicas con instituciones de la economía social y solidaria que generan herramientas para todo el movimiento cooperativo.",
  image: "assets/img/centrales-hero.jpg",
  heroData: {
    title: "Programas Centrales",
    desc: "Espacios estratégicos que surgen como alianzas con otras instituciones vinculadas a la economía social y solidaria.",
    crumbs: [["#", "Áreas de trabajo"], ["programas-centrales.html", "Programas Centrales"]],
  },
  body: `
  <section class="section">
    <div class="wrap wrap--narrow prose">
      <h2>Acerca del área</h2>
      <p>Los Programas Centrales son espacios estratégicos que surgen como alianzas estimuladas por el Centro Cooperativista Uruguayo con otras instituciones vinculadas a la economía social y solidaria. A través de estas líneas de trabajo se generan herramientas que fortalecen a los integrantes del movimiento cooperativo y de la economía social en general.</p>
    </div>
  </section>
  <section class="section section--tint" aria-labelledby="lineas-h">
    <div class="wrap">
      <h2 id="lineas-h">Líneas de trabajo</h2>
      <div class="grid grid--2" style="margin-top:2rem">
        ${progCard("Asistencia Social, Contable, Jurídica y Notarial", "Servicios profesionales a cooperativas de todo tipo y a otras organizaciones de la economía social.")}
        ${progCard("Cooperativas de producción y trabajo", "Acompañamiento en la constitución, la gestión y la consolidación de emprendimientos autogestionados.")}
        ${progCard("Estudio de Diagnóstico Organizacional", "Herramienta para analizar el funcionamiento de una cooperativa y planificar mejoras.")}
        ${progCard("Consorcio Cuidemos", "Servicios cooperativos de cuidados para personas adultas mayores, en articulación intercooperativa.")}
        ${progCard("Programa Mercosur Social y Solidario", "Plataforma regional de intercambio de experiencias de economía social y solidaria.")}
        ${progCard("Cooperativas Sociales", "Apoyo a colectivos en procesos de inclusión socio-laboral.")}
        ${progCard("Diseño Cooperativo", "Comunicación y diseño al servicio de proyectos cooperativos y de la economía social.")}
      </div>
      <figure style="margin:2.5rem 0 0">
        <img src="assets/img/comunidad.jpg" alt="Reunión de trabajo de una cooperativa de la economía social." width="1200" height="800" loading="lazy" style="border-radius:var(--radius)">
      </figure>
    </div>
  </section>`,
};

/* ==========================================================================
   REGIONAL LITORAL
   ========================================================================== */
const LITORAL = {
  slug: "regional-litoral",
  title: "Regional Litoral — Sede Paysandú | CCU",
  description:
    "Desde 1970, la Regional Litoral de Paysandú lleva el trabajo del CCU al norte del país: cooperativas de vivienda, sociales, de producción y la Mesa Intercooperativa de Paysandú.",
  image: "assets/img/sede-paysandu.jpg",
  heroData: {
    title: "Regional Litoral",
    desc: "A través de la sede de Paysandú, abierta en 1970, el CCU alcanza el norte del país y cumple su cometido de ser una organización de alcance nacional.",
    crumbs: [["#", "Áreas de trabajo"], ["regional-litoral.html", "Regional Litoral"]],
  },
  body: `
  <section class="section">
    <div class="wrap">
      <div class="grid grid--2" style="align-items:center">
        <div class="prose">
          <h2>Acerca de la Regional Litoral Norte</h2>
          <p>En este espacio de extensión se atienden, de la misma manera que en la Casa Central, las demandas locales, manteniendo siempre la proyección en la coyuntura local, regional y nacional. El CCU entiende que su contribución al desarrollo social pasa por facilitar el acceso a los servicios técnicos de gestión cooperativa y asesoramiento a todo grupo humano que lo requiera.</p>
          <p>En su afán de contribuir al desarrollo de las experiencias cooperativas a nivel nacional, en 1970 impulsó la apertura de esta sede descentralizada de Montevideo.</p>
        </div>
        <figure style="margin:0">
          <img src="assets/img/sede-paysandu.jpg" alt="Fachada de la sede de la Regional Litoral del CCU en Paysandú." width="1200" height="800" loading="lazy" style="border-radius:var(--radius)">
        </figure>
      </div>
    </div>
  </section>

  <section class="section section--tint">
    <div class="wrap">
      <h2>Consultoría, asistencia técnica y capacitación</h2>
      <div class="grid grid--3" style="margin-top:2rem">
        ${progCard("Cooperativas de vivienda", "Asistencia técnica integral para grupos del litoral norte.")}
        ${progCard("Cooperativas sociales", "Acompañamiento a procesos de inclusión socio-laboral.")}
        ${progCard("Programa Mercosur Social y Solidario", "Participación regional desde el norte del país.")}
        ${progCard("Cooperativas de producción", "Apoyo a emprendimientos autogestionados.")}
        ${progCard("Diagnóstico organizacional", "Análisis del funcionamiento y planes de mejora.")}
        ${progCard("Mesa Intercooperativa de Paysandú", "Espacio de articulación del cooperativismo local.")}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap wrap--narrow center">
      <h2>Sede Paysandú</h2>
      <p class="muted">Rincón 1234 · Tel: (+598) 4722 8713 · <a href="mailto:cculit@ccu.org.uy">cculit@ccu.org.uy</a></p>
      <p style="margin-top:1rem"><a class="btn btn--ghost" href="contacto.html">Ver mapa y formulario de contacto</a></p>
    </div>
  </section>`,
};

/* ==========================================================================
   PUBLICACIONES
   ========================================================================== */
const revistas = [
  ["130", "Cooperativismo: transformando desde lo cotidiano", "d130", "2026"],
  ["129", "Cooperativismo + Asociativismo + Sostenibilidad", "d129", "2023"],
  ["128", "60 años de trabajo colectivo", "d128", "2022"],
  ["127", "Políticas Públicas y Cooperativismo", "d127", "2022"],
];
const recursos = [
  ["El impacto del cambio climático en las mujeres de la producción agropecuaria familiar", "rural", "2025"],
  ["Envejecimiento en las cooperativas de vivienda", "habitat", "2023"],
  ["Contribución del cooperativismo al desarrollo de la agricultura familiar en Uruguay", "rural", "2022"],
  ["Manual de cooperativismo agrícola (edición Brasil)", "rural", "2022"],
  ["Cartilla de cursos del Área Rural", "rural", "2022"],
  ["Manual de cooperativismo agrícola", "rural", "2022"],
];
const PUBLIS = {
  slug: "publicaciones",
  title: "Publicaciones — Revista Dinámica y recursos | CCU",
  description:
    "Revista Dinámica Cooperativa y recursos digitales del CCU: análisis, reflexión y propuestas sobre los desafíos del cooperativismo en Uruguay. Descarga libre.",
  heroData: {
    title: "Publicaciones",
    desc: "Análisis, reflexión y propuestas sobre los desafíos del cooperativismo. Todas las ediciones y documentos se descargan libremente.",
    crumbs: [["publicaciones.html", "Publicaciones"]],
  },
  body: `
  <section class="section">
    <div class="wrap" data-filter-group>
      <div class="filterbar" role="group" aria-label="Tipo de publicación">
        <button type="button" data-filter="all" aria-pressed="true">Todo</button>
        <button type="button" data-filter="revista" aria-pressed="false">Revista Dinámica</button>
        <button type="button" data-filter="recurso" aria-pressed="false">Recursos digitales</button>
      </div>

      <div data-cat="revista">
        <h2>Revista Dinámica Cooperativa</h2>
        <p class="muted" style="max-width:60ch">Publicación del Centro Cooperativista Uruguayo: un medio de comunicación independiente que difunde los procesos colectivos promovidos en nuestra labor diaria.</p>
        <div class="grid grid--4" style="margin-top:2rem">
          ${revistas
            .map(
              ([n, t, img, y]) => `<article class="pub-card">
            <img class="pub-card__cover" src="assets/img/revista/${img}.jpg" alt="Tapa de la revista Dinámica Cooperativa número ${n}." width="826" height="1200" loading="lazy">
            <h3>N.º ${n}</h3>
            <p class="muted" style="font-size:.9rem">${t} · ${y}</p>
            <p><a class="link-arrow" href="#" aria-label="Descargar la revista número ${n} en PDF">Descargar PDF</a></p>
          </article>`
            )
            .join("")}
        </div>
        <p style="margin-top:1.5rem"><a class="link-arrow" href="https://issuu.com/centrocooperativistauruguayo">Ver todas las ediciones en Issuu</a></p>
      </div>

      <hr class="divider" data-cat="revista recurso">

      <div data-cat="recurso">
        <h2>Recursos digitales</h2>
        <p class="muted">Manuales, cartillas e investigaciones de las tres áreas de trabajo.</p>
        <ul class="grid grid--2" style="list-style:none;padding:0;margin-top:1.5rem">
          ${recursos
            .map(
              ([t, area, y]) => `<li class="card card--pad">
            <span class="chip ${area === "rural" ? "chip--rural" : "chip--habitat"}">${area === "rural" ? "Rural" : "Hábitat"}</span>
            <h3 style="font-size:1.05rem;margin:.5rem 0">${t}</h3>
            <p class="card__meta"><time>${y}</time> · <a href="#">Descargar PDF</a></p>
          </li>`
            )
            .join("")}
        </ul>
      </div>
    </div>
  </section>`,
};

/* ==========================================================================
   NOTICIAS
   ========================================================================== */
const NOTICIAS = {
  slug: "noticias",
  title: "Noticias — Centro Cooperativista Uruguayo",
  description:
    "Novedades del CCU: cooperativas de vivienda, área rural, economía social, llamados laborales y actividad de la Regional Litoral.",
  heroData: {
    title: "Noticias",
    desc: "La actividad del CCU y del movimiento cooperativo, por área de trabajo.",
    crumbs: [["noticias.html", "Noticias"]],
  },
  body: `
  <section class="section">
    <div class="wrap" data-filter-group>
      <div class="filterbar" role="group" aria-label="Filtrar noticias por área">
        <button type="button" data-filter="all" aria-pressed="true">Todas</button>
        <button type="button" data-filter="General" aria-pressed="false">General</button>
        <button type="button" data-filter="Área Hábitat" aria-pressed="false">Área Hábitat</button>
        <button type="button" data-filter="Área Rural" aria-pressed="false">Área Rural</button>
        <button type="button" data-filter="Regional Litoral" aria-pressed="false">Regional Litoral</button>
      </div>
      <div class="grid grid--3">
        ${newsCard("assets/img/news/n2.jpg", "Área Hábitat", "chip--habitat", "6 ago 2026", "2026-08-06", "Llamado a Lic. en Trabajo Social", "Para incorporarse al equipo del Área Hábitat del CCU. Grado 5.")}
        ${newsCard("assets/img/news/n3.jpg", "Área Hábitat", "chip--habitat", "4 ago 2026", "2026-08-04", "Llamado a concurso de Abogado/a", "Concurso de oposición y méritos para un cargo de Abogado/a — Grado 5.")}
        ${newsCard("assets/img/news/n1.jpg", "Área Hábitat", "chip--habitat", "10 jul 2026", "2026-07-10", "Cómo las cooperativas están cambiando el acceso al hogar", "Participamos de «CoopsAméricas en Movimiento» sobre vivienda cooperativa en la región.")}
        ${newsCard("assets/img/news/n5.jpg", "General", "chip--general", "4 jul 2026", "2026-07-04", "Día Internacional de las Cooperativas", "Bajo el lema «Cooperativas por un mundo en paz».")}
        ${newsCard("assets/img/news/n4.jpg", "Área Hábitat", "chip--habitat", "20 jun 2026", "2026-06-20", "Avanza el realojo del asentamiento El Progreso", "Continúa el trabajo con la comisión barrial y las familias del realojo.")}
        ${newsCard("assets/img/news/n7.jpg", "Área Rural", "chip--rural", "27 may 2026", "2026-05-27", "Encuentro con cooperativas agrarias de la región", "Reforzamos vínculos con organizaciones de Chile en el marco de la cooperación Sur-Sur.")}
        ${newsCard("assets/img/news/n6.jpg", "Regional Litoral", "chip--litoral", "12 mar 2026", "2026-03-12", "Nueva actividad de la Mesa Intercooperativa de Paysandú", "El cooperativismo del litoral norte se articula en torno a temáticas comunes.")}
        ${newsCard("assets/img/news/n1.jpg", "General", "chip--general", "27 mar 2026", "2026-03-27", "Formación digital para organizaciones de la economía social", "Un espacio de capacitación para cooperativas y organizaciones sociales.")}
        ${newsCard("assets/img/news/n5.jpg", "Área Rural", "chip--rural", "9 jun 2026", "2026-06-09", "Curso de iniciación en apicultura en Villa Nueva", "Nueva edición de los cursos del Área Rural con productores de la zona.")}
      </div>
      <p data-empty hidden class="note">No hay noticias en esa categoría.</p>
      <p class="center" style="margin-top:2.5rem"><button type="button" class="btn btn--ghost">Cargar más noticias</button></p>
    </div>
  </section>`,
};

/* ==========================================================================
   NOTICIA (plantilla de detalle)
   ========================================================================== */
const NOTICIA = {
  slug: "noticia",
  title: "Cómo las cooperativas están cambiando el acceso al hogar | CCU",
  description:
    "Participamos de un episodio de «CoopsAméricas en Movimiento» sobre cómo la vivienda cooperativa contribuye al acceso a vivienda digna en América Latina y el Caribe.",
  image: "assets/img/news/n1.jpg",
  heroData: {
    title: "Cómo las cooperativas están cambiando el acceso al hogar",
    desc: "10 de julio de 2026 · Área Hábitat",
    crumbs: [["noticias.html", "Noticias"], ["noticia.html", "Nota"]],
  },
  body: `
  <section class="section">
    <div class="wrap wrap--narrow">
      <figure style="margin:0 0 2rem">
        <img src="assets/img/news/n1.jpg" alt="Panel del episodio de CoopsAméricas en Movimiento sobre vivienda cooperativa." width="1200" height="662" style="border-radius:var(--radius)">
      </figure>
      <div class="prose">
        <p class="lead">Participamos de un episodio de «CoopsAméricas en Movimiento» sobre cómo la vivienda cooperativa contribuye al acceso a vivienda digna y al desarrollo humano integral en América Latina y el Caribe.</p>
        <p>El presidente de CCU, Arq. Horacio Pérez Zamora, junto a Iván Otero, presidente de la Junta de Directores de la Liga de Puerto Rico —ambos miembros del Comité Regional de Vivienda de Cooperativas de las Américas— reflexionaron, desde las experiencias de Uruguay y Puerto Rico, sobre el papel de las cooperativas de vivienda en la construcción de comunidad, la participación democrática, el sentido de pertenencia y mejores condiciones de vida.</p>
        <p>La conversación abordó los desafíos del acceso a la vivienda, la importancia de contar con políticas públicas y financiamiento adecuado, y el valor del cooperativismo como modelo para fortalecer el tejido social y promover entornos más solidarios y sostenibles.</p>
      </div>
      <p style="margin-top:2rem"><a class="link-arrow" href="noticias.html">Volver a Noticias</a></p>
    </div>
  </section>

  <section class="section section--tint">
    <div class="wrap">
      <h2>Noticias relacionadas</h2>
      <div class="grid grid--3" style="margin-top:2rem">
        ${newsCard("assets/img/news/n4.jpg", "Área Hábitat", "chip--habitat", "20 jun 2026", "2026-06-20", "Avanza el realojo del asentamiento El Progreso", "Continúa el trabajo con la comisión barrial y las familias del realojo.")}
        ${newsCard("assets/img/news/n5.jpg", "General", "chip--general", "4 jul 2026", "2026-07-04", "Día Internacional de las Cooperativas", "Bajo el lema «Cooperativas por un mundo en paz».")}
        ${newsCard("assets/img/news/n7.jpg", "Área Rural", "chip--rural", "27 may 2026", "2026-05-27", "Encuentro con cooperativas agrarias de la región", "Reforzamos vínculos con organizaciones de Chile.")}
      </div>
    </div>
  </section>`,
};

/* ==========================================================================
   PREGUNTAS FRECUENTES
   ========================================================================== */
const FAQ = {
  slug: "preguntas-frecuentes",
  title: "Preguntas frecuentes — Cooperativas de vivienda | CCU",
  description:
    "Cuántas personas se necesitan, requisitos, marco legal y pasos para formar una cooperativa de vivienda en Uruguay, y en qué colabora el CCU.",
  heroData: {
    title: "Preguntas frecuentes",
    desc: "Lo esencial para empezar a pensar tu cooperativa. Si te queda una duda, escribinos.",
    crumbs: [["#", "Institucional"], ["preguntas-frecuentes.html", "Preguntas frecuentes"]],
  },
  body: `
  <section class="section">
    <div class="wrap wrap--narrow">
      <h2>Cooperativas de vivienda</h2>
      <div class="accordion" style="margin-top:1rem">
        ${faqItem("1", "¿Por qué formar una cooperativa de vivienda?", "<p>Es una forma de obtener una vivienda propia en colaboración con otras personas, generalmente mejor que la que cada uno podría conseguir individualmente en el mercado: con espacios comunes funcionales, entornos compartidos y aprendizajes de gestión y construcción colectiva.</p>")}
        ${faqItem("2", "¿En qué marco legal se encuentra en Uruguay?", "<p>En el capítulo 10 de la Ley de Vivienda 13.728 y en la Ley 18.407 (Ley General de Cooperativas).</p>")}
        ${faqItem("3", "¿Cuántas personas se necesitan?", "<p>Un mínimo de 10 socios y un máximo de 50. Es un socio por unidad habitacional.</p>")}
        ${faqItem("4", "¿Qué requisitos deben cumplir?", "<p>Residir en Uruguay, tener 18 años o más, un ingreso familiar líquido no superior a 60 UR y no ser beneficiario de otro sistema que brinde una solución habitacional definitiva.</p>")}
        ${faqItem("5", "¿Ayuda mutua o ahorro previo?", "<p>En ayuda mutua el aporte es de 21 horas de trabajo, equivalentes al 15 % del préstamo. En ahorro previo ese 15 % se aporta en dinero por cada socio.</p>")}
        ${faqItem("6", "¿Cómo se inicia el trámite?", "<p>Obteniendo la personería jurídica en la Dirección General de Registros del MEC, con el estatuto correspondiente. Luego siguen: registro en el MVOT, factibilidad de terreno, anteproyecto aprobado, sorteo, proyecto, escritura y obra. El CCU acompaña cada una de estas etapas.</p>")}
        ${faqItem("7", "¿En qué colabora el CCU?", "<p>En el asesoramiento técnico en todas las etapas —consolidación del grupo, proyecto, obra y posobra— en los aspectos arquitectónico, social, jurídico y contable.</p>")}
      </div>

      <h2 style="margin-top:2.5rem">Otras modalidades cooperativas</h2>
      <div class="accordion" style="margin-top:1rem">
        ${faqItem("8", "¿El CCU trabaja con cooperativas que no son de vivienda?", "<p>Sí. A través del Área Rural y de los Programas Centrales acompañamos cooperativas agrarias, de producción y trabajo, sociales y de cuidados.</p>")}
        ${faqItem("9", "¿Ofrecen formación y capacitación?", "<p>Sí, para técnicos y para integrantes de cooperativas, en gestión, marco legal, aspectos contables y producción. Consultá la <a href='publicaciones.html'>sección de publicaciones</a> y las <a href='noticias.html'>noticias</a> para próximas ediciones.</p>")}
      </div>
    </div>
  </section>`,
};

/* ==========================================================================
   ENLACES
   ========================================================================== */
const grupos = [
  ["Organizaciones nacionales", [
    ["FCPU — Federación de Cooperativas de Producción del Uruguay", "http://www.fcpu.coop"],
    ["CUDECOOP", "http://www.cudecoop.coop"],
    ["FUCVAM", "http://www.fucvam.org.uy/"],
    ["FECOVI", "https://fecovi.coop/web/"],
    ["Fondo de Vivienda de CUTCSA", "http://www.cutcsa.com.uy/"],
    ["Comisión Nacional de Fomento Rural", "http://www.cnfr.org.uy/"],
    ["Cooperativas Agrarias Federadas (CAF)", "http://www.caf.org.uy/"],
    ["ANONG", "http://www.anong.org.uy/"],
  ]],
  ["Organismos gubernamentales", [
    ["INACOOP — Instituto Nacional del Cooperativismo", "http://www.inacoop.org.uy"],
    ["ANV — Agencia Nacional de Vivienda", "http://www.anv.gub.uy/"],
    ["Ministerio de Vivienda y Ordenamiento Territorial", "https://www.gub.uy/ministerio-vivienda-ordenamiento-territorial/"],
    ["Ministerio de Ganadería, Agricultura y Pesca", "https://www.gub.uy/ministerio-ganaderia-agricultura-pesca/"],
    ["MIDES", "http://www.mides.gub.uy/"],
    ["INIA — Investigación Agropecuaria", "http://www.inia.org.uy"],
    ["INASE — Instituto Nacional de Semillas", "http://www.inase.org.uy/"],
    ["INALE — Instituto Nacional de la Leche", "http://www.inale.org"],
  ]],
  ["Organizaciones internacionales", [
    ["Alianza Cooperativa Internacional", "http://ica.coop"],
    ["ACI Américas", "http://www.aciamericas.coop"],
    ["ALOP", "http://www.alop.org.mx/"],
    ["We Effect (Centro Cooperativo Sueco)", "http://www.weeffect.org"],
  ]],
  ["Universidad y otros", [
    ["Unidad de Estudios Cooperativos — Udelar", "http://www.extension.edu.uy/institucional/estudios_cooperativos"],
    ["Facultad de Agronomía — Udelar", "http://portal.fagro.edu.uy/"],
    ["Facultad de Veterinaria — Udelar", "http://www.fvet.edu.uy"],
    ["Central Lanera Uruguaya", "http://www.central-lanera.com.uy"],
  ]],
];
const ENLACES = {
  slug: "enlaces",
  title: "Enlaces — Organizaciones del cooperativismo | CCU",
  description:
    "Enlaces a federaciones cooperativas, organismos públicos y redes internacionales vinculadas al trabajo del Centro Cooperativista Uruguayo.",
  heroData: {
    title: "Enlaces",
    desc: "Organizaciones nacionales e internacionales con las que el CCU trabaja y articula.",
    crumbs: [["enlaces.html", "Enlaces"]],
  },
  body: `
  <section class="section">
    <div class="wrap">
      <div class="grid grid--2">
        ${grupos
          .map(
            ([titulo, links]) => `<div class="card card--pad">
          <h2 style="font-size:1.2rem">${titulo}</h2>
          <ul style="list-style:none;padding:0;margin-top:.75rem">
            ${links.map(([n, u]) => `<li style="margin:.4rem 0"><a href="${u}" rel="noopener">${n}</a></li>`).join("")}
          </ul>
        </div>`
          )
          .join("")}
      </div>
    </div>
  </section>`,
};

/* ==========================================================================
   CONTACTO
   ========================================================================== */
const CONTACTO = {
  slug: "contacto",
  title: "Contacto — Centro Cooperativista Uruguayo",
  description:
    "Sedes del CCU en Montevideo y Paysandú: direcciones, teléfonos, correos, mapas y formulario de contacto.",
  image: "assets/img/sede-montevideo.jpg",
  heroData: {
    title: "Contacto",
    desc: "Escribinos o acercate a cualquiera de nuestras dos sedes.",
    crumbs: [["contacto.html", "Contacto"]],
  },
  body: `
  <section class="section">
    <div class="wrap">
      <div class="grid grid--2">
        <div class="card">
          <div class="card__media" style="aspect-ratio:16/9"><img src="assets/img/sede-montevideo.jpg" alt="Fachada de la Casa Central del CCU en Montevideo." width="1200" height="800" loading="lazy"></div>
          <div class="card__body">
            <h2 style="font-size:1.3rem">Casa Central — Montevideo</h2>
            <p class="muted">Eduardo Víctor Haedo 2252, Montevideo</p>
            <ul style="list-style:none;padding:0">
              <li>Tel: <a href="tel:+59824012541">(+598) 2401 2541</a></li>
              <li>Correo: <a href="mailto:ccu@ccu.org.uy">ccu@ccu.org.uy</a></li>
            </ul>
            <p><a class="link-arrow" href="https://www.openstreetmap.org/?mlat=-34.8942&mlon=-56.1655#map=17/-34.8942/-56.1655" rel="noopener">Ver en el mapa</a></p>
          </div>
        </div>
        <div class="card">
          <div class="card__media" style="aspect-ratio:16/9"><img src="assets/img/sede-paysandu.jpg" alt="Fachada de la sede de la Regional Litoral del CCU en Paysandú." width="1200" height="800" loading="lazy"></div>
          <div class="card__body">
            <h2 style="font-size:1.3rem">Regional Litoral — Paysandú</h2>
            <p class="muted">Rincón 1234, Paysandú</p>
            <ul style="list-style:none;padding:0">
              <li>Tel: <a href="tel:+59847228713">(+598) 4722 8713</a></li>
              <li>Correo: <a href="mailto:cculit@ccu.org.uy">cculit@ccu.org.uy</a></li>
            </ul>
            <p><a class="link-arrow" href="https://www.openstreetmap.org/?mlat=-32.3214&mlon=-58.0756#map=16/-32.3214/-58.0756" rel="noopener">Ver en el mapa</a></p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section section--tint">
    <div class="wrap wrap--narrow">
      <h2>Formulario de contacto</h2>
      <p class="muted" style="margin-bottom:1.5rem">Todos los campos son obligatorios. Te responderemos a la brevedad.</p>
      <form onsubmit="return false" novalidate>
        <div class="form-field">
          <label for="sede">Sede</label>
          <select id="sede" name="sede" required>
            <option value="">Elegí una sede…</option>
            <option>Casa Central — Montevideo</option>
            <option>Regional Litoral — Paysandú</option>
          </select>
        </div>
        <div class="form-field">
          <label for="nombre">Nombre</label>
          <input id="nombre" name="nombre" type="text" autocomplete="name" required>
        </div>
        <div class="form-field">
          <label for="correo">Correo electrónico</label>
          <input id="correo" name="correo" type="email" autocomplete="email" required>
        </div>
        <div class="form-field">
          <label for="asunto">Asunto</label>
          <input id="asunto" name="asunto" type="text" required>
        </div>
        <div class="form-field">
          <label for="mensaje">Mensaje</label>
          <textarea id="mensaje" name="mensaje" required></textarea>
        </div>
        <button class="btn btn--primary" type="submit">Enviar mensaje</button>
      </form>
    </div>
  </section>

  <section class="section">
    <div class="wrap center">
      <h2>Enlaces de interés</h2>
      <p class="muted" style="margin-bottom:1rem">Federaciones, organismos públicos y redes del cooperativismo.</p>
      <a class="btn btn--ghost" href="enlaces.html">Ver todos los enlaces</a>
    </div>
  </section>`,
};

/* ==========================================================================
   404
   ========================================================================== */
const NOT_FOUND = {
  slug: "404",
  title: "Página no encontrada — CCU",
  description: "La página que buscás no existe o fue movida.",
  hero: false,
  body: `
  <section class="section">
    <div class="wrap wrap--narrow center" style="padding-block:4rem">
      <p class="eyebrow">Error 404</p>
      <h1>No encontramos esa página</h1>
      <p class="lead" style="margin-top:1rem">Puede que el enlace esté roto o que la página se haya movido. Probá desde el inicio o buscá lo que necesitás.</p>
      <div class="hero__actions" style="justify-content:center;margin-top:2rem">
        <a class="btn btn--primary" href="index.html">Ir al inicio</a>
        <a class="btn btn--ghost" href="noticias.html">Ver noticias</a>
        <a class="btn btn--ghost" href="contacto.html">Contacto</a>
      </div>
    </div>
  </section>`,
};

export const PAGES = [
  INDEX, SOBRE, COMO, MOV, HABITAT, RURAL, CENTRALES, LITORAL,
  PUBLIS, NOTICIAS, NOTICIA, FAQ, ENLACES, CONTACTO, NOT_FOUND,
];
