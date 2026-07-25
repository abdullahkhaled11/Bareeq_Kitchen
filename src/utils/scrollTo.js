/**
 * Smooth-scrolls to a section by its CSS selector (e.g. "#contact")
 * @param {string} id - CSS selector string
 */
export function scrollTo(id) {
  const el = document.querySelector(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
