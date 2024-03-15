const isBrowser = () => typeof window !== 'undefined';
export function scrollToTop() {
  if (!isBrowser()) return;
  setTimeout(() => {
    window.document.body.scrollIntoView({ behavior: 'smooth' });
  }, 100);
}
