function isRtlText(text) {
  return /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/.test(text);
}

function updateTextDirection() {
  const elements = document.querySelectorAll('body *');

  elements.forEach(el => {
    if (el.children.length === 0 && el.textContent.trim().length > 0) {
      if (isRtlText(el.textContent)) {
        el.style.direction = 'rtl';
        el.style.textAlign = 'right';
      } else {
        el.style.direction = 'ltr';
        el.style.textAlign = 'left';
      }
    }
  });
}

// Observe DOM changes and update direction dynamically
const observer = new MutationObserver(() => {
  updateTextDirection();
});

observer.observe(document.body, { childList: true, subtree: true });
window.addEventListener('DOMContentLoaded', updateTextDirection);
