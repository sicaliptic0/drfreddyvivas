/**
 * Ajusta número de WhatsApp (solo dígitos, con código de país, sin + ni espacios).
 * Ejemplo México: 5215512345678
 */
window.SITE_CONFIG = {
  whatsappPhone: "19296925721",

  /**
   * Cambia este valor cuando sustituyas imágenes con el mismo nombre de archivo
   * para que el navegador vuelva a descargarlas (?v=… en la URL).
   */
  mediaVersion: "20260416",

  /** Imagen del hero (opcional). Deja null para usar el fondo por defecto. */
  heroImage: "images/hero.JPG",

  /**
   * Imágenes antes/después por cada caso, en el mismo orden que en index.html.
   * null = placeholder elegante hasta que subas fotos.
   */
  caseImages: [
    { before: null, after: null },
    { before: null, after: null },
    { before: "images/caso1antes.png", after: "images/caso1despues.png" },
    { before: "images/caso2antes.png", after: "images/caso2despues.png" },
    { before: "images/caso3antes.jpg", after: "images/caso3despues.jpg" },
    { before: null, after: null },
  ],

  /**
   * Galería protegida: bloquea y difumina la sección "Casos" hasta que el usuario
   * confirme su correo vía enlace (magic link / OTP).
   */
  protectedGallery: {
    enabled: true,

    /**
     * Supabase (Auth + DB).
     * - url: Project URL (https://xxxx.supabase.co)
     * - anonKey: Project API key (anon/public)
     */
    supabase: {
      url: "https://jzmkjbucckxdjlpjckfn.supabase.co",
      anonKey: "sb_publishable_W6fZ6J8jzFP2tffYXfqgXw_AW3Rar1L",
      /**
       * Tabla opcional para guardar leads (email + consentimiento).
       * Recomendado: crear tabla "leads" y permitir INSERT público con RLS.
       */
      leadsTable: "leads",
    },
  },
};
