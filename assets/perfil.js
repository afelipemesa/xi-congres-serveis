/* Lògica comuna de la web del congrés.
   Les dades de cada persona són dins del seu fitxer p/<codi>/index.html (bloc «persona»).
   La configuració comuna (programa, llibre d'actes, mostrar CV) és a assets/config.js. */
/* Entrada animada (≈3 s): les flors de Barcelona formen el XI i apareix el logotip en català.
   No es pot saltar; desapareix sola en acabar i llavors es veu el perfil.
   Estils a perfil.css (apartat «Entrada animada»). Es desactiva amb "intro": false a config.js. */
(function () {
  var root = document.documentElement;
  var S = window.SITE || {};
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (S.intro === false || reduce || !document.body) { root.classList.add("xi-llest"); return; }
  var el = document.createElement("div");
  el.id = "xi-intro";
  el.setAttribute("aria-hidden", "true");
  el.innerHTML = "<div class=\"xi-lk\"><div class=\"xi-mk\"><div class=\"xi-fl\"><svg viewBox=\"540.55 259.23 548.7 561.54\"><circle class=\"xi-r\" cx=\"689.01\" cy=\"407.69\" r=\"148.46\"/><circle fill=\"#fff\" cx=\"689.01\" cy=\"407.69\" r=\"83.69\"/><circle class=\"xi-r\" cx=\"940.79\" cy=\"407.69\" r=\"148.46\"/><circle fill=\"#fff\" cx=\"940.79\" cy=\"407.69\" r=\"83.69\"/><circle class=\"xi-r\" cx=\"689.01\" cy=\"672.31\" r=\"148.46\"/><circle fill=\"#fff\" cx=\"689.01\" cy=\"672.31\" r=\"83.69\"/><circle class=\"xi-r\" cx=\"940.79\" cy=\"672.31\" r=\"148.46\"/><circle fill=\"#fff\" cx=\"940.79\" cy=\"672.31\" r=\"83.69\"/><circle class=\"xi-r\" cx=\"814.9\" cy=\"540\" r=\"159.33\"/><circle fill=\"#fff\" cx=\"814.9\" cy=\"540\" r=\"93.6\"/><path class=\"xi-l xi-lx\" d=\"M814.9 540L689.01 407.69\"/><path class=\"xi-l xi-lx\" d=\"M814.9 540L940.79 407.69\"/><path class=\"xi-l xi-lx\" d=\"M814.9 540L689.01 672.31\"/><path class=\"xi-l xi-lx\" d=\"M814.9 540L940.79 672.31\"/><circle class=\"xi-pt\" cx=\"814.9\" cy=\"540\" r=\"18\"/><circle class=\"xi-pt\" cx=\"689.01\" cy=\"407.69\" r=\"18\"/><circle class=\"xi-pt\" cx=\"940.79\" cy=\"407.69\" r=\"18\"/><circle class=\"xi-pt\" cx=\"689.01\" cy=\"672.31\" r=\"18\"/><circle class=\"xi-pt\" cx=\"940.79\" cy=\"672.31\" r=\"18\"/></svg></div><div class=\"xi-ii\"><svg viewBox=\"1109.18 259.23 270.24 561.54\"><g class=\"xi-lt\"><circle fill=\"#002D69\" cx=\"1089.36\" cy=\"539.99\" r=\"125.82\"/><circle fill=\"#fff\" cx=\"1089.36\" cy=\"539.99\" r=\"70.88\"/><circle fill=\"#002D69\" cx=\"1399.24\" cy=\"539.99\" r=\"125.82\"/><circle fill=\"#fff\" cx=\"1399.24\" cy=\"539.99\" r=\"70.88\"/></g><circle class=\"xi-r\" cx=\"1244.3\" cy=\"385.05\" r=\"125.82\"/><circle fill=\"#fff\" cx=\"1244.3\" cy=\"385.05\" r=\"70.88\"/><circle class=\"xi-r\" cx=\"1244.3\" cy=\"694.94\" r=\"125.82\"/><circle fill=\"#fff\" cx=\"1244.3\" cy=\"694.94\" r=\"70.88\"/><circle class=\"xi-r\" cx=\"1244.3\" cy=\"539.99\" r=\"135.12\"/><circle fill=\"#fff\" cx=\"1244.3\" cy=\"539.99\" r=\"79.38\"/><path class=\"xi-l xi-li\" d=\"M1244.3 539.99V385.05\"/><path class=\"xi-l xi-li\" d=\"M1244.3 539.99V694.94\"/><circle class=\"xi-pt\" cx=\"1244.3\" cy=\"539.99\" r=\"18\"/><circle class=\"xi-pt\" cx=\"1244.3\" cy=\"385.05\" r=\"18\"/><circle class=\"xi-pt\" cx=\"1244.3\" cy=\"694.94\" r=\"18\"/></svg></div></div><svg class=\"xi-tx\" viewBox=\"1460 259.23 842.11 561.54\"><g class=\"xi-t\"><path transform=\"translate(1483.49 489.36) scale(0.15694)\" d=\"m166-350q0-75 34-130 33-56 87-86 54-31 118-31 50 0 91 13 40 13 72 36 32 22 56 50v-140q-43-37-94-56-52-19-129-19-77 0-143 27-67 26-116 74-49 49-76 116-28 66-28 146 0 79 28 146 27 66 76 115 49 49 116 75 66 26 143 26 77 0 129-19 51-19 94-55v-141q-24 29-56 51-32 23-72 36-41 13-91 13-64 0-118-31-54-31-87-86-34-56-34-130zm553 120q0 70 33 124 32 55 89 86 56 30 126 30 71 0 127-30 56-31 89-86 32-54 32-124 0-71-32-125-33-54-89-85-56-30-127-30-70 0-126 30-57 31-89 85-33 54-33 125zm111 0q0-43 18-76 18-33 49-51 31-18 70-18 39 0 70 18 31 18 49 51 18 33 18 76 0 43-18 76-18 32-49 50-31 19-70 19-39 0-70-19-31-18-49-50-18-33-18-76zm778-50v280h111v-293q0-82-41-129-41-48-119-48-47 0-81 20-35 20-57 61v-71h-109v460h109v-280q0-31 13-54 12-24 35-36 23-13 54-13 43 0 64 26 21 26 21 77zm218 311q2 60 31 106 29 46 82 71 53 26 127 26 63 0 117-26 54-27 87-81 34-54 34-137v-450h-106v75q-23-35-55-57-44-28-102-28-59 0-111 28-51 28-82 80-31 53-31 129 0 76 31 129 31 53 82 81 52 28 111 28 58 0 102-29 32-21 55-57v71q0 52-20 85-19 33-50 49-31 16-64 16-39 0-68-14-29-15-45-40-16-24-17-55zm103-264q0-46 19-78 19-32 50-49 32-16 69-16 24 0 47 9 23 9 42 27 19 19 30 46 12 26 12 61 0 47-20 79-19 32-49 48-30 17-62 17-37 0-69-17-31-16-50-48-19-33-19-79zm610-227h-107v460h107v-259q0-33 7-57 8-25 25-39 17-14 44-14 20 0 33 6 14 6 28 18l53-91q-16-19-38-27-22-8-47-8-35 0-67 25-22 17-38 41zm677 255q1-9 1-17v-13q0-73-28-125-27-53-79-82-51-28-123-28-65 0-115 24-50 24-81 67-30 43-40 100-2 12-3 24-1 12-1 25 0 69 29 124 29 54 82 85 54 31 124 31 63 0 105-16 43-15 73-43 30-28 53-66l-94-37q-13 22-32 38-19 17-44 26-24 9-56 9-38 0-68-17-29-16-45-50-13-25-16-59zm-356-75q4-26 16-48 16-29 45-44 29-16 65-16 35 0 59 14 24 13 37 38 14 24 18 56zm292-408l-91-45-150 160 61 35zm184 536l-63 64q20 26 50 50 30 23 69 38 39 14 87 14 75 0 120-40 44-39 44-104 0-42-19-68-19-26-51-44-32-18-71-33-28-11-50-21-23-10-36-22-14-13-14-29 0-19 15-29 15-10 39-10 34 0 66 17 32 17 54 44l60-64q-19-23-46-41-27-18-60-29-34-11-72-11-42 0-78 14-37 13-58 41-22 28-22 70 0 41 20 68 19 27 50 43 30 17 61 29 31 11 54 21 23 11 36 26 13 14 13 34 0 23-16 36-17 13-46 13-23 0-46-9-23-9-45-26-22-17-45-42zm1038-628v397q-23-36-55-58-44-29-102-29-59 0-111 28-51 29-82 82-31 54-31 130 0 75 31 129 31 54 82 83 52 28 111 28 58 0 102-29 32-22 55-58v77h109v-780zm-269 550q0-46 19-79 19-33 50-50 32-17 69-17 32 0 62 17 30 17 49 49 20 33 20 80 0 47-20 80-19 32-49 49-30 17-62 17-37 0-69-17-31-17-50-50-19-33-19-79zm706 240q80 0 137-32 57-31 94-93l-94-37q-21 37-54 55-33 18-78 18-42 0-71-18-29-18-44-53-11-24-14-55h358q0-4 0-13 1-9 1-17 0-74-27-127-27-52-79-80-51-28-124-28-73 0-127 30-54 29-84 83-29 54-29 127 0 72 29 126 29 54 82 84 54 30 124 30zm-121-290q4-21 12-38 15-34 43-52 29-18 70-18 34 0 59 15 26 15 41 42 11 22 14 51z\"/></g><g class=\"xi-t\"><path transform=\"translate(1483.49 651.39) scale(0.15694)\" d=\"m411-266h215q-9 35-27 66-18 31-45 55-27 24-64 37-37 13-84 13-69 0-124-32-55-32-87-89-32-58-32-134 0-77 33-134 32-56 88-88 55-31 122-31 73 0 124 30 52 30 81 80l96-64q-31-49-75-83-44-35-100-54-57-19-126-19-79 0-146 27-67 26-117 74-50 49-77 116-28 66-28 146 0 80 27 147 27 67 77 116 49 49 116 75 67 27 146 27 84 0 149-31 65-30 109-83 44-53 66-121 22-69 20-146h-337zm643 276q80 0 137-32 57-31 94-93l-94-37q-21 37-54 55-33 18-78 18-42 0-71-18-29-18-44-53-11-24-14-55h358q0-4 1-13 0-9 0-17 0-74-27-127-27-52-78-80-52-28-125-28-73 0-127 30-54 29-83 83-30 54-30 127 0 72 29 126 29 54 83 84 53 30 123 30zm-121-290q4-21 12-38 15-34 44-52 28-18 69-18 34 0 60 15 25 15 40 42 11 22 14 51zm419 50q0 70 33 124 32 55 89 86 56 30 126 30 71 0 127-30 56-31 89-86 32-54 32-124 0-71-32-125-33-54-89-85-56-30-127-30-70 0-126 30-57 31-89 85-33 54-33 125zm111 0q0-43 18-76 18-33 49-51 31-18 70-18 39 0 70 18 31 18 49 51 18 33 18 76 0 43-18 76-18 32-49 50-31 19-70 19-39 0-70-19-31-18-49-50-18-33-18-76zm457 261q2 60 31 106 29 46 82 71 53 26 127 26 63 0 117-26 54-27 87-81 34-54 34-137v-450h-106v75q-23-35-55-57-44-28-102-28-59 0-111 28-51 28-82 80-31 53-31 129 0 76 31 129 31 53 82 81 52 28 111 28 58 0 102-29 32-21 55-57v71q0 52-20 85-19 33-50 49-31 16-64 16-39 0-68-14-29-15-45-40-16-24-17-55zm103-264q0-46 19-78 19-32 50-49 32-16 69-16 24 0 47 9 23 9 42 27 19 19 30 46 12 26 12 61 0 47-20 79-19 32-49 48-30 17-62 17-37 0-69-17-31-16-50-48-19-33-19-79zm610-227h-107v460h107v-259q0-33 7-57 8-25 25-39 17-14 44-14 20 0 33 6 14 6 28 18l53-91q-16-19-38-27-22-8-47-8-35 0-67 25-22 17-38 41zm292 120q11-7 31-18 20-10 48-18 29-7 61-7 21 0 39 4 18 4 31 13 14 9 21 23 7 14 7 36v56q-22-12-53-22-34-10-80-10-86 0-133 39-47 40-47 107 0 47 22 80 22 33 59 50 37 17 80 17 40 0 78-14 39-15 65-45 5-6 9-13v62h106v-328q0-46-25-78-24-32-68-48-44-17-100-17-65 0-114 18-49 18-81 37zm34 197q0-22 10-37 11-15 32-24 21-8 55-8 39 0 74 10 17 5 33 13v6q0 35-16 60-16 25-43 39-26 13-59 13-25 0-45-8-19-8-30-25-11-16-11-39zm392-317v95h50v365h107v-365h107v-95h-107v-149q0-29 6-47 6-18 17-26 10-8 25-8 12 0 25 5 13 5 23 21l50-84q-8-10-22-20-14-11-34-18-20-7-47-7-49 0-82 19-33 19-50 54-18 36-18 90v170zm337-183q0 27 21 47 20 19 47 19 29 0 49-19 20-20 20-47 0-28-20-47-20-19-49-19-27 0-47 19-21 19-21 47zm15 183v460h107v-460zm285 120q11-7 31-18 20-10 48-18 29-7 61-7 21 0 39 4 18 4 31 13 14 9 21 23 7 14 7 36v56q-22-12-53-22-34-10-80-10-86 0-133 39-47 40-47 107 0 47 22 80 22 33 59 50 37 17 80 17 40 0 78-14 39-15 65-45 5-6 9-13v62h106v-328q0-46-25-78-24-32-68-48-44-17-100-17-65 0-114 18-49 18-81 37zm34 197q0-22 10-37 11-15 32-24 21-8 55-8 39 0 74 10 17 5 33 13v6q0 35-16 60-16 25-43 39-26 13-59 13-25 0-45-8-19-8-30-25-11-16-11-39z\"/></g><g class=\"xi-t\"><path transform=\"translate(1483.49 813.41) scale(0.15694)\" d=\"m415-780v397q-23-36-55-58-44-29-102-29-59 0-110 28-52 29-83 82-31 54-31 130 0 75 31 129 31 54 83 83 51 28 110 28 58 0 102-29 32-22 55-58v77h109v-780zm-269 550q0-46 19-79 19-33 51-50 31-17 68-17 32 0 62 17 30 17 50 49 19 33 19 80 0 47-19 80-20 32-50 49-30 17-62 17-37 0-68-17-32-17-51-50-19-33-19-79zm706 240q80 0 137-32 57-31 94-93l-94-37q-21 37-54 55-33 18-78 18-42 0-71-18-29-18-44-53-11-24-14-55h358q0-4 1-13 0-9 0-17 0-74-27-127-27-52-78-80-52-28-125-28-73 0-127 30-54 29-83 83-30 54-30 127 0 72 29 126 29 54 83 84 53 30 123 30zm-121-290q4-21 12-38 15-34 44-52 28-18 69-18 34 0 60 15 25 15 40 42 11 22 14 51zm454-500v780h109v-780zm262 628l-63 64q20 26 50 50 30 23 69 38 39 14 87 14 75 0 119-40 45-39 45-104 0-42-19-68-19-26-51-44-32-18-71-33-28-11-51-21-22-10-36-22-13-13-13-29 0-19 15-29 15-10 39-10 34 0 66 17 32 17 54 44l60-64q-19-23-46-41-27-18-61-29-33-11-71-11-42 0-79 14-36 13-58 41-21 28-21 70 0 41 19 68 20 27 50 43 31 17 62 29 31 11 54 21 23 11 36 26 13 14 13 34 0 23-17 36-16 13-45 13-23 0-46-9-23-9-45-26-22-17-45-42zm746-74l-88 62q23 48 62 89 40 41 92 65 53 25 114 25 45 0 86-15 42-14 75-40 33-27 52-66 20-39 20-88 0-46-16-80-16-35-42-60-25-25-57-42-31-17-63-28-56-20-91-39-35-19-52-41-16-21-16-48 0-30 23-52 23-23 72-23 35 0 61 13 27 14 47 36 20 23 34 49l95-54q-17-37-49-71-32-34-78-56-46-23-108-23-63 0-113 24-49 24-78 67-29 42-29 98 0 49 19 84 19 34 48 58 29 23 61 38 32 16 58 25 44 16 78 33 34 16 52 40 19 23 19 61 0 42-30 68-30 26-78 26-39 0-72-17-32-17-59-47-26-30-49-71zm718 236q80 0 137-32 57-31 94-93l-94-37q-21 37-54 55-33 18-78 18-42 0-71-18-29-18-44-53-11-24-14-55h358q0-4 1-13 0-9 0-17 0-74-27-127-27-52-78-80-52-28-125-28-73 0-127 30-54 29-83 83-30 54-30 127 0 72 29 126 29 54 83 84 53 30 123 30zm-121-290q4-21 12-38 15-34 44-52 28-18 69-18 34 0 60 15 25 15 40 42 11 22 14 51zm561-180h-107v460h107v-259q0-33 8-57 7-25 24-39 17-14 44-14 20 0 34 6 13 6 27 18l53-91q-16-19-38-27-22-8-47-8-35 0-67 25-22 17-38 41zm219 0l239 502 238-502h-118l-120 297-120-297zm724 470q80 0 137-32 57-31 94-93l-94-37q-21 37-54 55-33 18-78 18-42 0-71-18-29-18-44-53-11-24-14-55h358q0-4 0-13 1-9 1-17 0-74-27-127-27-52-79-80-51-28-124-28-73 0-127 30-54 29-84 83-29 54-29 127 0 72 29 126 29 54 82 84 54 30 124 30zm-121-290q4-21 12-38 15-34 43-52 29-18 70-18 34 0 59 15 26 15 41 42 11 22 14 51zm450-363q0 27 20 47 21 19 48 19 29 0 49-19 20-20 20-47 0-28-20-47-20-19-49-19-27 0-48 19-20 19-20 47zm15 183v460h107v-460zm271 308l-63 64q20 26 50 50 30 23 69 38 39 14 87 14 75 0 120-40 44-39 44-104 0-42-19-68-19-26-51-44-32-18-71-33-28-11-50-21-23-10-36-22-14-13-14-29 0-19 15-29 15-10 39-10 34 0 66 17 32 17 54 44l60-64q-19-23-46-41-27-18-60-29-34-11-72-11-42 0-78 14-37 13-58 41-22 28-22 70 0 41 20 68 19 27 50 43 30 17 61 29 31 11 54 21 23 11 36 26 13 14 13 34 0 23-16 36-17 13-46 13-23 0-46-9-23-9-45-26-22-17-45-42z\"/></g></svg></div>";
  document.body.appendChild(el);
  if (getComputedStyle(el).position !== "fixed") { el.parentNode.removeChild(el); root.classList.add("xi-llest"); return; } /* perfil.css antic a la memòria cau */
  root.classList.add("xi-llest", "xi-actiu");
  var acabat = false;
  function acaba() {
    if (acabat) return;
    acabat = true;
    if (el.parentNode) el.parentNode.removeChild(el);
    root.classList.remove("xi-actiu");
  }
  el.addEventListener("animationend", function (e) { if (e.target === el) acaba(); });
  setTimeout(acaba, 5000);
})();
(function () {
  const S = window.SITE || {};
  const UI = {
    ca: { and: "i", date: S.date || "", congress: "XI Congrés de Geografia dels Serveis de l’AGE", nav: "Idioma",
          roles: { organitzador: "Comitè organitzador", cientific: "Comitè científic", ponent: "Ponent", assistent: "Assistent" },
          talk1: "La meva comunicació", talkN: "Les meves comunicacions", lead: "Autoria principal", coauthor: "Coautoria",
          conf: "La meva conferència", chair: "Modera", contact: "Coneix-me", email: "Escriu-me", linkedin: "Connecta amb mi", cv: "Perfil acadèmic",
          atCongress: "Al congrés", programme: "Programa (Circular 4)", proceedings: "Llibre d’actes", soon: "properament", web: "Web del congrés",
          welcome: "Benvinguda al congrés", welcomeText: "Escaneja el codi QR d’una acreditació per veure el perfil de la persona." },
    es: { and: "y", date: S.date || "", congress: "XI Congreso de Geografía de los Servicios de la AGE", nav: "Idioma",
          roles: { organitzador: "Comité organizador", cientific: "Comité científico", ponent: "Ponente", assistent: "Asistente" },
          talk1: "Mi comunicación", talkN: "Mis comunicaciones", lead: "Autoría principal", coauthor: "Coautoría",
          conf: "Mi conferencia", chair: "Modera", contact: "Conóceme", email: "Escríbeme", linkedin: "Conecta conmigo", cv: "Perfil académico",
          atCongress: "En el congreso", programme: "Programa (Circular 4)", proceedings: "Libro de actas", soon: "próximamente", web: "Web del congreso",
          welcome: "Bienvenida al congreso", welcomeText: "Escanea el código QR de una acreditación para ver el perfil de la persona." },
    en: { and: "and", date: S.dateEn || S.date || "", congress: "11th AGE Congress on the Geography of Services", nav: "Language",
          roles: { organitzador: "Organising committee", cientific: "Scientific committee", ponent: "Speaker", assistent: "Attendee" },
          talk1: "My paper", talkN: "My papers", lead: "Lead author", coauthor: "Co-author",
          conf: "My lecture", chair: "Chaired by", contact: "Get to know me", email: "Email me", linkedin: "Connect with me", cv: "Academic profile",
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
