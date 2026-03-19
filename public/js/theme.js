(function () {
  /* ── Dark mode toggles ── */
  var darkToggles = [
    document.getElementById('theme-toggle'),
    document.getElementById('theme-toggle-mobile')
  ].filter(Boolean);

  function updateDarkUI() {
    var isDark = document.documentElement.classList.contains('dark');
    darkToggles.forEach(function (t) {
      t.setAttribute('aria-label', 'Switch to ' + (isDark ? 'light' : 'dark') + ' mode');
    });
  }

  function handleDarkToggle() {
    var isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    updateDarkUI();
  }

  darkToggles.forEach(function (t) {
    t.addEventListener('click', handleDarkToggle);
  });

  /* ── System dark mode listener ── */
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (!localStorage.getItem('theme')) {
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      updateDarkUI();
    }
  });

  updateDarkUI();
})();
