/**
 * Smooth-scrolls to a section by its CSS selector (e.g. "#contact").
 * If the element exists on the current page, scrolls smoothly.
 * Otherwise, navigates to the homepage with the hash so it scrolls after load.
 * @param {string} id - CSS selector string (e.g. "#about")
 * @param {function} [navigate] - react-router navigate function (optional)
 */
export function scrollTo(id, navigate) {
  const el = document.querySelector(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else if (navigate) {
    // We're on a different page — navigate to home with hash
    navigate('/' + id);
  } else {
    // Fallback: use window.location
    window.location.href = '/' + id;
  }
}
