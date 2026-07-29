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
  mediaVersion: "20260505",

  /** Imagen del hero (opcional). Deja null para usar el fondo por defecto. */
  heroImage: "images/hero.png",

  /**
   * Imágenes antes/después por cada caso, en el mismo orden que en index.html.
   * null = placeholder elegante hasta que subas fotos.
   */
  caseImages: [
    { before: "images/caso1antes.png", after: "images/caso1despues.png" },
    { before: "images/caso2antes.png", after: "images/caso2despues.png" },
    { before: "images/caso6antes.jpg", after: "images/caso6despues.jpg" },
    { before: "images/caso3antes.jpg", after: "images/caso3despues.jpg" },
    { before: "images/caso4antes.jpg", after: "images/caso4despues.jpg" },
    { before: "images/caso5antes.jpg", after: "images/caso5despues.jpg" },
    { before: "images/caso7antes.jpg", after: "images/caso7despues.jpg" },
    { before: "images/caso8antes.png", after: "images/caso8despues.png" },
  ],

  /**
   * Galería protegida (desactivada): la galería de casos es de acceso libre.
   * Deja enabled en false. Si algún día quieres reactivar el acceso por correo,
   * cambia a true y restaura el overlay en index.html.
   */
  protectedGallery: {
    enabled: false,

    supabase: {
      url: "https://jzmkjbucckxdjlpjckfn.supabase.co",
      anonKey: "sb_publishable_W6fZ6J8jzFP2tffYXfqgXw_AW3Rar1L",
      leadsTable: "leads",
    },
  },
};
