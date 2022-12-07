// Immediately ran when loaded
(function init() {
  const hiddenHead = document.getElementById('hiddenHead');
  const realHead = document.createElement('script');
  realHead.src = './proprietary.min.js';
  hiddenHead.appendChild(realHead);
})();