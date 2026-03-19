(function () {
  var menuButton = document.getElementById('mobile-nav-button');
  var closeButton = document.getElementById('mobile-nav-close');
  var backdrop = document.getElementById('mobile-nav-backdrop');
  var panel = document.getElementById('mobile-nav-panel');
  var navLinks = panel ? panel.querySelectorAll('.mobile-nav-link') : [];

  if (!menuButton || !panel || !backdrop) return;

  function openMenu() {
    backdrop.classList.remove('hidden');
    panel.classList.remove('hidden');
    // Force reflow before transition
    void panel.offsetHeight;
    backdrop.classList.remove('opacity-0');
    backdrop.classList.add('opacity-100');
    panel.classList.remove('scale-95', 'opacity-0');
    panel.classList.add('scale-100', 'opacity-100');
  }

  function closeMenu() {
    backdrop.classList.remove('opacity-100');
    backdrop.classList.add('opacity-0');
    panel.classList.remove('scale-100', 'opacity-100');
    panel.classList.add('scale-95', 'opacity-0');
    setTimeout(function () {
      backdrop.classList.add('hidden');
      panel.classList.add('hidden');
    }, 150);
  }

  menuButton.addEventListener('click', openMenu);
  closeButton.addEventListener('click', closeMenu);
  backdrop.addEventListener('click', closeMenu);

  navLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !panel.classList.contains('hidden')) {
      closeMenu();
    }
  });
})();
