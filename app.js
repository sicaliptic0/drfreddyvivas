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
      nav_bio: "Dr. Vivas",
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
      bio_kicker: "Formación clínica",
      bio_photo_sub: "Médico Cirujano · Medicina Estética",
      bio_lead: "Formado en Venezuela con Mención Cum Laude, completó su residencia en cirugía general antes de especializarse en medicina estética. Un camino que lo llevó desde los Andes hasta Nueva York, con formación en dermatología clínica, técnicas de láser médico y armonización facial — siempre con un criterio estético conservador y resultados que respetan la naturalidad.",
      bio_g1_label: "Formación médica",
      bio_g2_label: "Especialización estética",
      bio_g3_label: "Proyección internacional",
      bio_tag_degree: "Título médico",
      bio_deg_title: "Médico Cirujano (M.D.)",
      bio_deg_honor: "Mención Honorífica Cum Laude · 8.71 / 10",
      bio_tag_master: "Maestría",
      bio_master_title: "Grand Master en Dermatología Clínica",
      bio_tag_license: "Licencia internacional",
      bio_license_title: "Licencia de Estética — Estado de Nueva York",
      bio_dip1_title: "Diplomado Internacional en Armonización Orofacial Integral",
      bio_dip2_title: "Diplomado de Estética Facial y Corporal",
      bio_residency_title: "Residencia Asistencial Programada",
      bio_dip3_title: "Diplomado en Ecografía General",
      bio_dip4_title: "Medicina Fotónica — Endolaser Facial y Corporal",
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
      case3_title: "Armonización femenina: tercio medio e inferior",
      case3_zone: "Tercio medio, tercio inferior y jawline",
      case3_tech: "Relleno con ácido hialurónico",
      case3_time: "Inmediato / control según plan",
      case4_title: "Fillers labiales — volumen y contorno",
      case4_zone: "Labios",
      case4_tech: "Ácido hialurónico (fillers labiales)",
      case4_time: "Resultado inmediato",
      case6_title: "Tercio superior del rostro",
      case6_zone: "Frente y entrecejo",
      case6_tech: "Toxina botulínica",
      case6_time: "14 días post-tratamiento",
      case5_title: "Rellenos y bioestimulación con Sculptra®",
      case5_zone: "Mejillas y línea mandibular",
      case5_tech: "Fillers (ácido hialurónico) y Sculptra®",
      case5_time: "Resultado inmediato del filler; firmeza progresiva con Sculptra®",
      proc_title: "Procedimientos",
      proc_subtitle: "Tratamientos frecuentes en consulta. La indicación es siempre personalizada.",
      proc_g1_title: "Neuromoduladores",
      proc_g1_sub: "Toxina botulínica",
      proc_1: "Líneas de expresión — frente y entrecejo",
      proc_1b: "Patitas de gallo",
      proc_1c: "Armonización del tercio superior",
      proc_g2_title: "Rellenos Dérmicos",
      proc_g2_sub: "Ácido hialurónico",
      proc_2a: "Labios y contorno",
      proc_2b: "Pómulos, ojeras y jawline",
      proc_2c: "Armonización orofacial integral",
      proc_g3_title: "Bioestimuladores",
      proc_g3_sub: "Inductores de colágeno",
      proc_3a: "Bioestimuladores de colágeno",
      proc_3b: "Mejillas y línea mandibular",
      proc_3c: "Plan combinado según evaluación",
      proc_g4_title: "Estética Regenerativa & Láser",
      proc_g4_sub: "Tecnología avanzada",
      proc_4a: "Endolifting facial y corporal",
      proc_4b: "Rejuvenecimiento con láser CO₂",
      proc_4c: "Dermapen — microagujas",
      proc_4d: "Peeling químico (superficial y profundo)",
      proc_4e: "Limpieza facial superficial y profunda",
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
      protected_title:
        "🔒 Galería protegida — Estas fotos son de pacientes reales. Por su privacidad y dado que incluye imágenes clínicas, ingresa tu correo para acceder.",
      protected_email_label: "Correo",
      protected_cta: "Enviar enlace de acceso",
      protected_consent: "Acepto recibir información y promociones (puedo darme de baja cuando quiera).",
      protected_hint: "Te enviaremos un enlace para confirmar tu correo y desbloquear esta galería.",
      protected_status_missing: "Configuración pendiente. Falta activar el sistema de acceso (Supabase).",
      protected_status_sending: "Enviando enlace…",
      protected_status_sent: "Listo. Revisa tu correo y abre el enlace para desbloquear la galería.",
      protected_status_invalid: "Ingresa un correo válido.",
      protected_status_error: "No se pudo enviar el enlace. Intenta de nuevo en unos minutos.",
      protected_status_unlocked: "Acceso habilitado. Gracias.",
    },
    en: {
      skip: "Skip to content",
      nav_menu: "Menu",
      nav_bio: "Dr. Vivas",
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
      bio_kicker: "Clinical background",
      bio_photo_sub: "Medical Doctor · Aesthetic Medicine",
      bio_lead: "Trained in Venezuela with Cum Laude distinction, he completed a surgical residency before specializing in aesthetic medicine — a path that took him from the Andes to New York, with training in clinical dermatology, medical laser techniques, and facial harmonization, guided throughout by a conservative aesthetic approach and a commitment to natural results.",
      bio_g1_label: "Medical training",
      bio_g2_label: "Aesthetic specialization",
      bio_g3_label: "International credentials",
      bio_tag_degree: "Medical degree",
      bio_deg_title: "Doctor in Medicine (M.D.)",
      bio_deg_honor: "Cum Laude Honorable Mention · 8.71 / 10",
      bio_tag_master: "Master's degree",
      bio_master_title: "Grand Master in Clinical Dermatology",
      bio_tag_license: "International license",
      bio_license_title: "Esthetics License — New York State",
      bio_dip1_title: "International Diploma in Integral Orofacial Harmonization",
      bio_dip2_title: "Diploma in Facial and Body Aesthetics",
      bio_residency_title: "Programmed Clinical Residency",
      bio_dip3_title: "Diploma in General Ultrasound",
      bio_dip4_title: "Photonic Medicine — Facial and Body Endolaser",
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
      case3_title: "Feminine harmonization: mid and lower face",
      case3_zone: "Midface, lower third and jawline",
      case3_tech: "Hyaluronic acid filler",
      case3_time: "Immediate / follow-up per plan",
      case4_title: "Lip fillers — volume and contour",
      case4_zone: "Lips",
      case4_tech: "Hyaluronic acid (lip fillers)",
      case4_time: "Immediate result",
      case6_title: "Upper third of the face",
      case6_zone: "Forehead and glabella",
      case6_tech: "Neuromodulator",
      case6_time: "14 days post-treatment",
      case5_title: "Fillers and Sculptra® biostimulation",
      case5_zone: "Cheeks and jawline",
      case5_tech: "Hyaluronic acid fillers and Sculptra®",
      case5_time: "Immediate filler result; progressive firmness with Sculptra®",
      proc_title: "Procedures",
      proc_subtitle: "Common in-office treatments — always tailored after medical assessment.",
      proc_g1_title: "Neuromodulators",
      proc_g1_sub: "Botulinum toxin",
      proc_1: "Expression lines — forehead & glabella",
      proc_1b: "Crow's feet",
      proc_1c: "Upper third harmonization",
      proc_g2_title: "Dermal Fillers",
      proc_g2_sub: "Hyaluronic acid",
      proc_2a: "Lips and lip border",
      proc_2b: "Cheeks, under-eyes and jawline",
      proc_2c: "Integral orofacial harmonization",
      proc_g3_title: "Biostimulators",
      proc_g3_sub: "Collagen inducers",
      proc_3a: "Collagen biostimulators",
      proc_3b: "Cheeks and jawline",
      proc_3c: "Combined plan per medical assessment",
      proc_g4_title: "Regenerative Aesthetics & Lasers",
      proc_g4_sub: "Advanced technology",
      proc_4a: "Facial and body endolifting",
      proc_4b: "CO₂ laser skin rejuvenation",
      proc_4c: "Dermapen — microneedling",
      proc_4d: "Chemical peel (superficial & deep)",
      proc_4e: "Facial cleansing (superficial & deep)",
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
      protected_title:
        "🔒 Protected gallery — These photos are from real patients. For privacy and because they include clinical images, enter your email to access.",
      protected_email_label: "Email",
      protected_cta: "Send access link",
      protected_consent: "I agree to receive updates and promotions (I can unsubscribe anytime).",
      protected_hint: "We’ll email you a link to confirm your address and unlock this gallery.",
      protected_status_missing: "Setup pending. The access system (Supabase) is not configured.",
      protected_status_sending: "Sending link…",
      protected_status_sent: "Done. Check your inbox and open the link to unlock the gallery.",
      protected_status_invalid: "Please enter a valid email.",
      protected_status_error: "Couldn’t send the link. Please try again in a few minutes.",
      protected_status_unlocked: "Access granted. Thank you.",
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
        const cat = card.getAttribute("data-category") || "";
        const tags = cat.split(/\s+/).filter(Boolean);
        const show = key === "all" || tags.indexOf(key) >= 0;
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

  function initProtectedGallery() {
    const section = document.getElementById("casos");
    if (!section) return;

    const pg = cfg.protectedGallery || {};
    if (!pg.enabled) return;

    const overlay = section.querySelector("[data-protected-overlay]");
    const statusEl = section.querySelector("[data-protected-status]");
    const form = section.querySelector("[data-protected-form]");
    const emailInput = section.querySelector("#protected-email");
    const hintEl = section.querySelector("[data-protected-hint]");
    if (!overlay || !statusEl || !form || !emailInput || !hintEl) return;

    function t(key) {
      const pack = STRINGS[currentLang] || STRINGS.es;
      return (pack && pack[key]) || (STRINGS.es && STRINGS.es[key]) || "";
    }

    function setStatus(kind, text) {
      statusEl.classList.toggle("is-error", kind === "error");
      statusEl.classList.toggle("is-success", kind === "success");
      statusEl.textContent = text || "";
    }

    function lock() {
      section.classList.add("is-protected");
      overlay.hidden = false;
    }

    function unlock() {
      section.classList.remove("is-protected");
      overlay.hidden = true;
      setStatus("success", t("protected_status_unlocked"));
    }

    lock();

    const sbCfg = (pg && pg.supabase) || {};
    const sbUrl = String(sbCfg.url || "").trim();
    const sbKey = String(sbCfg.anonKey || "").trim();

    if (!sbUrl || !sbKey || !window.supabase || typeof window.supabase.createClient !== "function") {
      setStatus("error", t("protected_status_missing"));
      return;
    }

    const supa = window.supabase.createClient(sbUrl, sbKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
        flowType: "pkce",
      },
    });

    function redirectTo() {
      const base = window.location.origin + window.location.pathname;
      return base;
    }

    function scrollToCases() {
      try {
        document.getElementById("casos")?.scrollIntoView({ behavior: "smooth", block: "start" });
      } catch (_) {}
    }

    async function syncSession() {
      try {
        const sessionRes = await supa.auth.getSession();
        const session = sessionRes && sessionRes.data && sessionRes.data.session;
        if (session) {
          unlock();
          scrollToCases();
        }
      } catch (_) {}
    }

    supa.auth.onAuthStateChange(function (_event, session) {
      if (session) {
        unlock();
        scrollToCases();
      }
    });

    syncSession();

    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      const email = String(emailInput.value || "").trim();
      if (!email || email.indexOf("@") < 1) {
        setStatus("error", t("protected_status_invalid"));
        return;
      }

      const btn = form.querySelector("button[type='submit']");
      const consent = !!form.querySelector("input[name='marketing_consent']")?.checked;

      if (btn) btn.disabled = true;
      emailInput.disabled = true;
      setStatus("success", t("protected_status_sending"));

      const table = String(sbCfg.leadsTable || "").trim();
      if (table) {
        try {
          await supa.from(table).insert({
            email: email,
            marketing_consent: consent,
            source: "protected_gallery",
            locale: currentLang,
          });
        } catch (_) {}
      }

      try {
        const res = await supa.auth.signInWithOtp({
          email: email,
          options: {
            emailRedirectTo: redirectTo(),
          },
        });
        if (res && res.error) throw res.error;

        hintEl.textContent = t("protected_hint");
        setStatus("success", t("protected_status_sent"));
      } catch (err) {
        const msg = err && typeof err === "object" && "message" in err ? String(err.message || "") : "";
        const extra = msg ? " (" + msg + ")" : "";
        setStatus("error", t("protected_status_error") + extra);
      } finally {
        if (btn) btn.disabled = false;
        emailInput.disabled = false;
      }
    });
  }

  function initBioAccordions() {
    document.querySelectorAll("[data-accordion-btn]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const expanded = btn.getAttribute("aria-expanded") === "true";
        const acc = btn.closest(".bio__acc");
        const body = acc.querySelector("[data-accordion-body]");
        btn.setAttribute("aria-expanded", expanded ? "false" : "true");
        body.classList.toggle("is-open", !expanded);
        acc.classList.toggle("is-open", !expanded);
      });
    });
  }

  function initBioScroll() {
    const items = document.querySelectorAll("[data-bio-item]");
    if (!items.length) return;

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const el = entry.target;
            const index = Array.from(items).indexOf(el);
            setTimeout(function () {
              el.classList.add("is-visible");
            }, index * 120);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    items.forEach(function (item) {
      observer.observe(item);
    });
  }

  initLangToggle();
  initWhatsapp();
  initHeroImage();
  initCaseImages();
  initBeforeAfterSliders();
  initCaseFilters();
  initProtectedGallery();
  initBioAccordions();
  initBioScroll();
  initNav();
  initHeaderScroll();
  initYear();
})();
