(function () {
  "use strict";

  const cfg = window.SITE_CONFIG || {};
  const WHATSAPP_BASE = "https://wa.me/";

  function mediaUrl(url) {
    if (!url) return url;
    const v = cfg.mediaVersion;
    if (v == null || v === "") return url;
    const u = String(url);
    const sep = u.indexOf("?") >= 0 ? "&" : "?";
    return u + sep + "v=" + encodeURIComponent(String(v));
  }

  const STRINGS = {
    es: {
      skip: "Saltar al contenido",
      nav_menu: "Menú",
      nav_value: "Enfoque",
      nav_cases: "Casos",
      nav_procedures: "Procedimientos",
      nav_testimonials: "Testimonios",
      nav_contact: "Contacto",
      hero_kicker: "Medicina estética",
      hero_lead:
        "Resultados elegantes y naturales, con un enfoque sereno y basado en seguridad.",
      hero_whatsapp: "Escribir por WhatsApp",
      hero_cases: "Ver casos",
      value_title: "Un enfoque que inspira confianza",
      value_subtitle: "Tres pilares que guían cada consulta y cada plan de tratamiento.",
      value_1_title: "Naturalidad y proporción",
      value_1_text:
        "Priorizamos armonía facial y resultados que se sienten auténticos, sin excesos.",
      value_2_title: "Experiencia clínica",
      value_2_text:
        "Protocolos cuidados en toxina botulínica, rellenos de ácido hialurónico y bioestimuladores.",
      value_3_title: "Acompañamiento claro",
      value_3_text:
        "Explicación honesta de opciones, tiempos de evolución y qué esperar en cada etapa.",
      cases_title: "Antes y después",
      cases_subtitle:
        "Selección de casos. Arrastra el divisor o desliza en el móvil para comparar.",
      filter_all: "Todos",
      filter_toxina: "Toxina botulínica",
      filter_rellenos: "Rellenos",
      filter_bio: "Bioestimuladores",
      ba_before: "Antes",
      ba_after: "Después",
      meta_zone: "Zona",
      meta_technique: "Técnica",
      meta_time: "Tiempo",
      case1_title: "Zona superior del tercio facial",
      case1_zone: "Frente y entrecejo",
      case1_tech: "Toxina botulínica",
      case1_time: "14 días post-tratamiento",
      case2_title: "Mirada en reposo más descansada",
      case2_zone: "Patitas de gallo",
      case2_tech: "Toxina botulínica",
      case2_time: "12 días post-tratamiento",
      case3_title: "Armonización femenina: tercio medio e inferior",
      case3_zone: "Tercio medio, tercio inferior y jawline",
      case3_tech: "Relleno con ácido hialurónico",
      case3_time: "Inmediato / control según plan",
      case4_title: "Aumento de labios con ácido hialurónico",
      case4_zone: "Labios",
      case4_tech: "Ácido hialurónico",
      case4_time: "7 días post-tratamiento",
      case6_title: "Reestructuración cigomática y mirada más descansada",
      case6_zone: "Pómulos, ojeras, labios y tercio superior",
      case6_tech:
        "Ácido hialurónico (área cigomática y labios), toxina botulínica, bioestimulador de colágeno y NCF en ojeras (líneas finas e hidratación)",
      case6_time: "Evolución según cada técnica y control médico",
      case5_title: "Calidad de piel y firmeza progresiva",
      case5_zone: "Mejillas y línea mandibular",
      case5_tech: "Bioestimulador de colágeno",
      case5_time: "8 semanas (serie según plan)",
      proc_title: "Procedimientos",
      proc_subtitle: "Tratamientos frecuentes en consulta. La indicación es siempre personalizada.",
      proc_1: "Toxina botulínica para líneas de expresión",
      proc_2: "Rellenos con ácido hialurónico",
      proc_3: "Bioestimuladores de colágeno",
      proc_4: "Armonización facial conservadora",
      proc_5: "Plan combinado según evaluación médica",
      test_title: "Testimonios",
      test_subtitle: "Experiencias compartidas por pacientes.",
      test_1:
        "“Muy claro en la explicación y un resultado natural. Me sentí acompañada en todo el proceso.”",
      test_1_author: "A. M.",
      test_2: "“Profesional y calmado. El seguimiento post-tratamiento dio mucha confianza.”",
      test_2_author: "R. G.",
      test_3: "“Sin apariencia artificial. Exactamente el enfoque que buscaba.”",
      test_3_author: "L. P.",
      contact_title: "Contacto",
      contact_subtitle:
        "Escríbenos por WhatsApp para resolver dudas o coordinar una valoración.",
      contact_whatsapp: "Abrir WhatsApp",
      legal:
        "Las imágenes se publican con consentimiento informado y fines ilustrativos. Los resultados varían según anatomía, edad, técnica y plan individual. La información de este sitio no sustituye una consulta médica ni constituye una relación médico-paciente.",
      footer_copy: "©",
    },
    en: {
      skip: "Skip to content",
      nav_menu: "Menu",
      nav_value: "Approach",
      nav_cases: "Cases",
      nav_procedures: "Procedures",
      nav_testimonials: "Testimonials",
      nav_contact: "Contact",
      hero_kicker: "Aesthetic medicine",
      hero_lead:
        "Elegant, natural-looking outcomes with a calm approach grounded in safety.",
      hero_whatsapp: "Message on WhatsApp",
      hero_cases: "View cases",
      value_title: "An approach that builds trust",
      value_subtitle: "Three pillars that guide every consultation and treatment plan.",
      value_1_title: "Natural balance",
      value_1_text:
        "We prioritize facial harmony and authentic-looking results—never exaggerated.",
      value_2_title: "Clinical experience",
      value_2_text:
        "Careful protocols in neuromodulators, hyaluronic acid fillers, and biostimulators.",
      value_3_title: "Clear guidance",
      value_3_text:
        "Honest explanations of options, healing timelines, and what to expect at each stage.",
      cases_title: "Before and after",
      cases_subtitle:
        "Selected cases. Drag the divider or swipe on your phone to compare.",
      filter_all: "All",
      filter_toxina: "Neuromodulator",
      filter_rellenos: "Fillers",
      filter_bio: "Biostimulators",
      ba_before: "Before",
      ba_after: "After",
      meta_zone: "Area",
      meta_technique: "Technique",
      meta_time: "Timing",
      case1_title: "Upper third of the face",
      case1_zone: "Forehead and glabella",
      case1_tech: "Neuromodulator",
      case1_time: "14 days post-treatment",
      case2_title: "A more rested look at rest",
      case2_zone: "Crow's feet",
      case2_tech: "Neuromodulator",
      case2_time: "12 days post-treatment",
      case3_title: "Feminine harmonization: mid and lower face",
      case3_zone: "Midface, lower third and jawline",
      case3_tech: "Hyaluronic acid filler",
      case3_time: "Immediate / follow-up per plan",
      case4_title: "Lip augmentation with hyaluronic acid",
      case4_zone: "Lips",
      case4_tech: "Hyaluronic acid",
      case4_time: "7 days post-treatment",
      case6_title: "Cheekbone refinement and a brighter look",
      case6_zone: "Cheekbones, under-eyes, lips and upper third",
      case6_tech:
        "HA (cheeks and lips), neuromodulator, collagen biostimulator, and NCF under the eyes (fine lines and hydration)",
      case6_time: "Timeline varies by modality; medical follow-up",
      case5_title: "Skin quality and progressive firmness",
      case5_zone: "Cheeks and jawline",
      case5_tech: "Collagen biostimulator",
      case5_time: "8 weeks (series per plan)",
      proc_title: "Procedures",
      proc_subtitle: "Common in-office treatments—always tailored after medical assessment.",
      proc_1: "Neuromodulators for expression lines",
      proc_2: "Hyaluronic acid fillers",
      proc_3: "Collagen biostimulators",
      proc_4: "Conservative facial harmonization",
      proc_5: "Combined plan based on medical evaluation",
      test_title: "Testimonials",
      test_subtitle: "Shared experiences from patients.",
      test_1:
        "“Very clear explanations and a natural result. I felt supported throughout.”",
      test_1_author: "A. M.",
      test_2: "“Professional and calm. Post-treatment follow-up made a real difference.”",
      test_2_author: "R. G.",
      test_3: "“No artificial look—exactly the approach I wanted.”",
      test_3_author: "L. P.",
      contact_title: "Contact",
      contact_subtitle:
        "Reach out on WhatsApp for questions or to arrange an assessment.",
      contact_whatsapp: "Open WhatsApp",
      legal:
        "Images are published with informed consent and for illustrative purposes. Outcomes vary with anatomy, age, technique, and individual planning. This website does not replace a medical consultation and does not establish a doctor–patient relationship.",
      footer_copy: "©",
    },
  };

  let currentLang = localStorage.getItem("fv-lang") || "es";

  function applyLang(lang) {
    const pack = STRINGS[lang] || STRINGS.es;
    document.documentElement.lang = lang === "en" ? "en" : "es";
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (key && pack[key] != null) {
        el.textContent = pack[key];
      }
    });
    document.querySelectorAll(".lang__btn").forEach(function (btn) {
      const isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("lang__btn--active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
    localStorage.setItem("fv-lang", lang);
    currentLang = lang;
  }

  function initLangToggle() {
    document.querySelectorAll(".lang__btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const lang = btn.getAttribute("data-lang");
        if (lang) applyLang(lang);
      });
    });
    applyLang(currentLang);
  }

  function initWhatsapp() {
    const phone = String(cfg.whatsappPhone || "").replace(/\D/g, "");
    const url = phone ? WHATSAPP_BASE + phone : "#";
    document.querySelectorAll("[data-whatsapp]").forEach(function (a) {
      if (phone) {
        a.setAttribute("href", url);
      } else {
        a.setAttribute("href", "#contacto");
        a.addEventListener("click", function (e) {
          e.preventDefault();
          document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
        });
      }
    });
  }

  function initHeroImage() {
    const el = document.querySelector("[data-hero-bg]");
    const src = cfg.heroImage;
    if (!el || !src) return;
    el.classList.add("has-image");
    const resolved = mediaUrl(src);
    el.style.backgroundImage = "url('" + resolved.replace(/'/g, "\\'") + "')";
    el.style.backgroundSize = "cover";
    el.style.backgroundPosition = "center top";
  }

  function initCaseImages() {
    const cards = document.querySelectorAll(".case-card");
    const images = cfg.caseImages || [];
    cards.forEach(function (card, index) {
      const pair = images[index];
      if (!pair || (!pair.before && !pair.after)) return;
      const root = card.querySelector("[data-ba]");
      const layerBefore = card.querySelector("[data-ba-before]");
      const layerAfter = card.querySelector("[data-ba-after]");
      if (!root || !layerBefore || !layerAfter) return;
      if (pair.after) {
        const u = mediaUrl(pair.after);
        layerAfter.style.backgroundImage = "url('" + u.replace(/'/g, "\\'") + "')";
      }
      if (pair.before) {
        const u = mediaUrl(pair.before);
        layerBefore.style.backgroundImage = "url('" + u.replace(/'/g, "\\'") + "')";
      }
      root.classList.add("has-images");
    });
  }

  function clamp(n, min, max) {
    return Math.min(max, Math.max(min, n));
  }

  function initBeforeAfterSliders() {
    const prefersReduced =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    document.querySelectorAll("[data-ba]").forEach(function (root) {
      let dragging = false;
      let pointerId = null;

      function setPos(percent) {
        const p = clamp(percent, 0, 100);
        root.style.setProperty("--ba-pos", p + "%");
      }

      function posFromClientX(clientX) {
        const rect = root.getBoundingClientRect();
        if (rect.width <= 0) return 50;
        return ((clientX - rect.left) / rect.width) * 100;
      }

      function onPointerDown(e) {
        if (e.button != null && e.button !== 0) return;
        dragging = true;
        pointerId = e.pointerId;
        root.setPointerCapture(pointerId);
        setPos(posFromClientX(e.clientX));
      }

      function onPointerMove(e) {
        if (!dragging || e.pointerId !== pointerId) return;
        setPos(posFromClientX(e.clientX));
      }

      function onPointerUp(e) {
        if (e.pointerId !== pointerId) return;
        dragging = false;
        try {
          root.releasePointerCapture(pointerId);
        } catch (_) {}
        pointerId = null;
      }

      root.addEventListener("pointerdown", onPointerDown);
      root.addEventListener("pointermove", onPointerMove);
      root.addEventListener("pointerup", onPointerUp);
      root.addEventListener("pointercancel", onPointerUp);

      if (prefersReduced) {
        setPos(50);
      }
    });
  }

  function initCaseFilters() {
    const chips = document.querySelectorAll(".chip[data-filter]");
    const cards = document.querySelectorAll(".case-card");
    if (!chips.length || !cards.length) return;

    function applyFilter(key) {
      chips.forEach(function (chip) {
        const active = chip.getAttribute("data-filter") === key;
        chip.classList.toggle("chip--active", active);
        chip.setAttribute("aria-selected", active ? "true" : "false");
      });
      cards.forEach(function (card) {
        const cat = card.getAttribute("data-category");
        const show = key === "all" || cat === key;
        card.classList.toggle("is-hidden", !show);
      });
    }

    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        applyFilter(chip.getAttribute("data-filter") || "all");
      });
    });
  }

  function initNav() {
    const nav = document.querySelector(".nav");
    const toggle = document.querySelector("[data-nav-toggle]");
    const list = document.getElementById("nav-menu");
    if (!nav || !toggle || !list) return;

    function close() {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }

    function open() {
      nav.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
    }

    toggle.addEventListener("click", function () {
      if (nav.classList.contains("is-open")) close();
      else open();
    });

    list.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", close);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
  }

  function initHeaderScroll() {
    const header = document.querySelector(".site-header");
    if (!header) return;
    function onScroll() {
      header.classList.toggle("is-scrolled", window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function initYear() {
    const el = document.querySelector("[data-year]");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  initLangToggle();
  initWhatsapp();
  initHeroImage();
  initCaseImages();
  initBeforeAfterSliders();
  initCaseFilters();
  initNav();
  initHeaderScroll();
  initYear();
})();
