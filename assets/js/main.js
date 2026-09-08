/* CCU rediseño — interacciones mínimas, sin dependencias. */
(function () {
  "use strict";
  var doc = document;

  /* ---------- Menú móvil ---------- */
  var burger = doc.querySelector(".nav-burger");
  var nav = doc.querySelector(".primary-nav");
  if (burger && nav) {
    burger.addEventListener("click", function () {
      var open = nav.getAttribute("data-open") === "true";
      nav.setAttribute("data-open", String(!open));
      burger.setAttribute("aria-expanded", String(!open));
      doc.body.setAttribute("data-nav-open", String(!open));
    });
  }

  /* ---------- Dropdowns accesibles ---------- */
  var dropdowns = Array.prototype.slice.call(doc.querySelectorAll(".has-dropdown"));
  function closeAll(except) {
    dropdowns.forEach(function (d) {
      if (d === except) return;
      d.setAttribute("data-open", "false");
      var t = d.querySelector(".nav-toggle");
      if (t) t.setAttribute("aria-expanded", "false");
    });
  }
  var canHover = window.matchMedia("(hover: hover) and (min-width: 1001px)");
  function setOpen(d, toggle, open) {
    d.setAttribute("data-open", String(open));
    toggle.setAttribute("aria-expanded", String(open));
  }
  dropdowns.forEach(function (d) {
    var toggle = d.querySelector(".nav-toggle");
    if (!toggle) return;
    var leaveTimer;

    // Click: siempre disponible (táctil, teclado, y como alternancia en escritorio)
    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = d.getAttribute("data-open") === "true";
      closeAll(d);
      setOpen(d, toggle, !open);
    });

    // Hover: abre/cierra sin clic en escritorio con puntero
    d.addEventListener("mouseenter", function () {
      if (!canHover.matches) return;
      clearTimeout(leaveTimer);
      closeAll(d);
      setOpen(d, toggle, true);
    });
    d.addEventListener("mouseleave", function () {
      if (!canHover.matches) return;
      clearTimeout(leaveTimer);
      leaveTimer = setTimeout(function () { setOpen(d, toggle, false); }, 180);
    });
  });
  doc.addEventListener("click", function () { closeAll(null); });
  doc.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeAll(null);
      if (nav && nav.getAttribute("data-open") === "true" && burger) burger.click();
    }
  });

  /* ---------- Filtros por categoría (listados) ---------- */
  Array.prototype.slice.call(doc.querySelectorAll("[data-filter-group]")).forEach(function (group) {
    var bar = group.querySelector(".filterbar");
    var items = Array.prototype.slice.call(group.querySelectorAll("[data-cat]"));
    if (!bar) return;
    bar.addEventListener("click", function (e) {
      var btn = e.target.closest("button[data-filter]");
      if (!btn) return;
      bar.querySelectorAll("button").forEach(function (b) { b.setAttribute("aria-pressed", "false"); });
      btn.setAttribute("aria-pressed", "true");
      var val = btn.getAttribute("data-filter");
      var shown = 0;
      items.forEach(function (it) {
        var match = val === "all" || (" " + it.getAttribute("data-cat") + " ").indexOf(" " + val + " ") > -1;
        it.hidden = !match;
        if (match) shown++;
      });
      var empty = group.querySelector("[data-empty]");
      if (empty) empty.hidden = shown !== 0;
    });
  });

  /* ---------- Acordeón ---------- */
  Array.prototype.slice.call(doc.querySelectorAll(".accordion__trigger")).forEach(function (btn) {
    btn.addEventListener("click", function () {
      var expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!expanded));
      var panel = doc.getElementById(btn.getAttribute("aria-controls"));
      if (panel) panel.hidden = expanded;
    });
  });

  /* ---------- Volver arriba ---------- */
  var toTop = doc.querySelector(".to-top");
  if (toTop) {
    window.addEventListener("scroll", function () {
      toTop.classList.toggle("is-visible", window.scrollY > 600);
    }, { passive: true });
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- Navegación en página (scroll spy) ---------- */
  var onpage = doc.querySelector(".onpage-nav");
  if (onpage && "IntersectionObserver" in window) {
    var links = Array.prototype.slice.call(onpage.querySelectorAll("a"));
    var map = {};
    links.forEach(function (l) {
      var id = l.getAttribute("href").slice(1);
      var sec = doc.getElementById(id);
      if (sec) map[id] = l;
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          links.forEach(function (l) { l.classList.remove("is-active"); });
          if (map[en.target.id]) map[en.target.id].classList.add("is-active");
        }
      });
    }, { rootMargin: "-20% 0px -70% 0px" });
    Object.keys(map).forEach(function (id) { io.observe(doc.getElementById(id)); });
  }

  /* ---------- Año actual en el pie ---------- */
  var y = doc.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();
})();
