/**
 * Ajusta número de WhatsApp (solo dígitos, con código de país, sin + ni espacios).
 * Ejemplo México: 5215512345678
 */
window.SITE_CONFIG = {
  whatsappPhone: "REPLACE_PHONE",

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
};
