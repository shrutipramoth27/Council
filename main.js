// KJSSE Students' Council — shared site behavior
(function () {
  // Mobile nav toggle
  var toggle = document.getElementById('menu-toggle');
  var mobileMenu = document.getElementById('mobile-menu');

  if (toggle && mobileMenu) {
    toggle.addEventListener('click', function () {
      var isOpen = !mobileMenu.classList.contains('hidden');
      if (isOpen) {
        mobileMenu.classList.add('hidden');
        toggle.setAttribute('aria-expanded', 'false');
      } else {
        mobileMenu.classList.remove('hidden');
        toggle.setAttribute('aria-expanded', 'true');
      }
    });

    // Close mobile menu when a link inside it is tapped
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close mobile menu on resize back to desktop width
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 1024) {
        mobileMenu.classList.add('hidden');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Gentle scroll-reveal for sections (skips if user prefers reduced motion)
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-6');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-6');
      observer.observe(el);
    });
  }
})();
