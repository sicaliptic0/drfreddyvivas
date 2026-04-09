/**
 * Ajusta número de WhatsApp (solo dígitos, con código de país, sin + ni espacios).
 * Ejemplo México: 5215512345678
 */
window.SITE_CONFIG = {
  whatsappPhone: "REPLACE_PHONE",

  /** Imagen del hero (opcional). Deja null para usar el fondo por defecto. */
  heroImage: "images/hero.JPG",

  /**
   * Imágenes antes/después por cada caso, en el mismo orden que en index.html.
   * null = placeholder elegante hasta que subas fotos.
   */
  caseImages: [
    { before: null, after: null },
    { before: null, after: null },
    { before: null, after: null },
    { before: null, after: null },
    { before: null, after: null },
  ],
};
