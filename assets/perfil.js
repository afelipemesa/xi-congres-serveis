/* Lògica comuna de la web del congrés.
   Les dades de cada persona són dins del seu fitxer p/<codi>/index.html (bloc «persona»).
   La configuració comuna (programa, llibre d'actes, mostrar CV) és a assets/config.js. */
(function () {
  const S = window.SITE || {};
  const UI = {
    ca: { and: "i", date: S.date || "", congress: "XI Congrés de Geografia dels Serveis de l’AGE", nav: "Idioma",
          roles: { organitzador: "Comitè organitzador", cientific: "Comitè científic", ponent: "Ponent", assistent: "Assistent" },
          talk1: "La meva comunicació", talkN: "Les meves comunicacions", lead: "Autoria principal", coauthor: "Coautoria",
          conf: "La meva conferència", chair: "Modera", contact: "Contacte", email: "Escriu-me", linkedin: "LinkedIn", cv: "Perfil acadèmic",
          atCongress: "Al congrés", programme: "Programa (Circular 4)", proceedings: "Llibre d’actes", soon: "properament", web: "Web del congrés",
          welcome: "Benvinguda al congrés", welcomeText: "Escaneja el codi QR d’una acreditació per veure el perfil de la persona." },
    es: { and: "y", date: S.date || "", congress: "XI Congreso de Geografía de los Servicios de la AGE", nav: "Idioma",
          roles: { organitzador: "Comité organizador", cientific: "Comité científico", ponent: "Ponente", assistent: "Asistente" },
          talk1: "Mi comunicación", talkN: "Mis comunicaciones", lead: "Autoría principal", coauthor: "Coautoría",
          conf: "Mi conferencia", chair: "Modera", contact: "Contacto", email: "Escríbeme", linkedin: "LinkedIn", cv: "Perfil académico",
          atCongress: "En el congreso", programme: "Programa (Circular 4)", proceedings: "Libro de actas", soon: "próximamente", web: "Web del congreso",
          welcome: "Bienvenida al congreso", welcomeText: "Escanea el código QR de una acreditación para ver el perfil de la persona." },
    en: { and: "and", date: S.dateEn || S.date || "", congress: "11th AGE Congress on the Geography of Services", nav: "Language",
          roles: { organitzador: "Organising committee", cientific: "Scientific committee", ponent: "Speaker", assistent: "Attendee" },
          talk1: "My paper", talkN: "My papers", lead: "Lead author", coauthor: "Co-author",
          conf: "My lecture", chair: "Chaired by", contact: "Contact", email: "Email me", linkedin: "LinkedIn", cv: "Academic profile",
          atCongress: "At the congress", programme: "Programme (4th circular)", proceedings: "Proceedings", soon: "coming soon", web: "Congress website",
          welcome: "Welcome to the congress", welcomeText: "Scan the QR code on a badge to see that person’s profile." }
  };

  const svg = (d, color) => '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="' + (color || "#2f6f7a") + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + d + "</svg>";
  const ICON = {
    cal: svg('<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>'),
    pin: svg('<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>'),
    layers: svg('<path d="M12 2 2 7l10 5 10-5-10-5z"/><path d="m2 17 10 5 10-5M2 12l10 5 10-5"/>'),
    user: svg('<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'),
    next: svg('<path d="m9 18 6-6-6-6"/>'),
    nextW: svg('<path d="m9 18 6-6-6-6"/>', "#ffffff"),
    mailW: svg('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>', "#ffffff"),
    ext: svg('<path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>')
  };
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const pick = (v, L) => (v && typeof v === "object") ? (v[L] || v.ca || "") : (v || "");
  const okUrl = u => /^https?:\/\//i.test(u || "");
  const joinList = (xs, and) => xs.length < 2 ? xs.join("") : xs.slice(0, -1).join(", ") + " " + and + " " + xs[xs.length - 1];

  function congressCard(L) {
    const t = UI[L];
    const prog = pick(S.programme, L);
    let h = '<section class="card" aria-labelledby="h-cg"><h2 class="label" id="h-cg">' + esc(t.atCongress) + '</h2><nav class="links">';
    if (okUrl(prog)) h += '<a href="' + esc(prog) + '" target="_blank" rel="noopener">' + esc(t.programme) + ICON.next + "</a>";
    h += okUrl(S.proceedings)
      ? '<a href="' + esc(S.proceedings) + '" target="_blank" rel="noopener">' + esc(t.proceedings) + ICON.next + "</a>"
      : '<span class="soon">' + esc(t.proceedings) + "<small>" + esc(t.soon) + "</small></span>";
    if (okUrl(S.web)) h += '<a href="' + esc(S.web) + '" target="_blank" rel="noopener">' + esc(t.web) + ICON.ext + "</a>";
    return h + "</nav></section>";
  }

  function comm(c, t, L) {
    const d = c.detalls || {};
    let rows = "";
    if (d.quan) rows += "<li>" + ICON.cal + "<span>" + esc(pick(d.quan, L)) + "</span></li>";
    if (d.lloc) rows += "<li>" + ICON.pin + "<span>" + esc(d.lloc) + "</span></li>";
    if (d.sessio) rows += "<li>" + ICON.layers + "<span>" + esc(pick(d.sessio, L)) + "</span></li>";
    if (d.modera) rows += "<li>" + ICON.user + "<span>" + esc(t.chair) + " " + esc(d.modera) + "</span></li>";
    const autors = d.autors && d.autors.length ? '<p class="authors">' + esc(joinList(d.autors, t.and)) + (d.afiliacio ? " (" + esc(d.afiliacio) + ")" : "") + "</p>" : "";
    return '<article class="comm"><h3 class="title">' + esc(c.titol) + "</h3>" + autors +
      '<span class="tag">' + esc(c.autoria === "principal" ? t.lead : t.coauthor) + "</span>" +
      (rows ? '<ul class="rows">' + rows + "</ul>" : "") +
      (d.paraules && d.paraules.length ? '<ul class="kw">' + d.paraules.map(w => "<li>" + esc(w) + "</li>").join("") + "</ul>" : "") +
      "</article>";
  }

  function profile(p, L) {
    const t = UI[L];
    let h = '<section class="hero"><ul class="roles">' + (p.rols || []).map(r => "<li>" + esc(t.roles[r] || r) + "</li>").join("") + "</ul>" +
      "<h1>" + esc(p.nom) + "</h1>" + (p.carrec ? "<p>" + esc(pick(p.carrec, L)) + "</p>" : "") +
      (p.institucio ? "<p>" + esc(p.institucio) + "</p>" : "") + "</section>";
    if (p.conferencia) {
      const c = p.conferencia;
      h += '<section class="card" aria-labelledby="h-conf"><h2 class="label" id="h-conf">' + esc(t.conf) + "</h2>" +
        '<p class="kind">' + esc(pick(c.tipus, L)) + '</p><h3 class="title">' + esc(c.titol) + '</h3><ul class="rows">' +
        (c.quan ? "<li>" + ICON.cal + "<span>" + esc(pick(c.quan, L)) + "</span></li>" : "") +
        (c.lloc ? "<li>" + ICON.pin + "<span>" + esc(c.lloc) + "</span></li>" : "") + "</ul></section>";
    }
    const cs = p.comunicacions || [];
    if (cs.length) {
      h += '<section class="card" aria-labelledby="h-talk"><h2 class="label" id="h-talk">' + esc(cs.length > 1 ? t.talkN : t.talk1) + "</h2>" +
        cs.map(c => comm(c, t, L)).join("") + "</section>";
    }
    const showCv = S.showCv !== false;
    let k = "";
    if (p.email) k += '<a class="btn" href="mailto:' + esc(p.email) + '">' + esc(t.email) + ICON.mailW + '</a><p class="mail">' + esc(p.email) + "</p>";
    if (showCv && okUrl(p.cv)) k += '<a class="btn alt" href="' + esc(p.cv) + '" target="_blank" rel="noopener">' + esc(t.cv) + ICON.next + "</a>";
    if (showCv && okUrl(p.linkedin)) k += '<a class="btn alt" href="' + esc(p.linkedin) + '" target="_blank" rel="noopener">' + esc(t.linkedin) + ICON.next + "</a>";
    if (k) h += '<section class="card" aria-labelledby="h-me"><h2 class="label" id="h-me">' + esc(t.contact) + "</h2>" + k + "</section>";
    return h + congressCard(L);
  }

  function landing(L) {
    const t = UI[L];
    return '<section class="hero"><h1>' + esc(t.welcome) + "</h1><p>" + esc(t.welcomeText) + "</p></section>" + congressCard(L);
  }

  const dataEl = document.getElementById("persona");
  let P = null;
  try { P = dataEl ? JSON.parse(dataEl.textContent) : null; } catch (e) { P = null; }
  const main = document.getElementById("main");
  const langNav = document.getElementById("lang");
  let lang = "ca";
  try { const saved = localStorage.getItem("xigs-lang"); if (UI[saved]) lang = saved; } catch (e) {}
  const asked = new URLSearchParams(location.search).get("lang");
  if (UI[asked]) lang = asked;

  function render() {
    const t = UI[lang];
    document.documentElement.lang = lang;
    document.title = (P ? P.nom + " · " : "") + t.congress;
    document.getElementById("date").textContent = t.date;
    document.getElementById("congress").textContent = t.congress;
    langNav.setAttribute("aria-label", t.nav);
    langNav.querySelectorAll("button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    main.innerHTML = P ? profile(P, lang) : landing(lang);
  }

  langNav.addEventListener("click", e => {
    const b = e.target.closest("button[data-lang]");
    if (!b) return;
    lang = b.dataset.lang;
    try { localStorage.setItem("xigs-lang", lang); } catch (e) {}
    render();
  });
  render();
})();
