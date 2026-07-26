(() => {
  const days = document.querySelector('#days');
  if (days) {
    const departure = new Date('2027-04-29T17:25:00+09:00');
    const updateCountdown = () => {
      const difference = departure.getTime() - Date.now();
      days.textContent = Math.max(0, Math.ceil(difference / 86400000)).toLocaleString('ja-JP');
    };
    updateCountdown();
    setInterval(updateCountdown, 3600000);
  }

  const opening = document.querySelector('.opening');
  if (opening) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        opening.classList.add('hide');
        document.body.classList.remove('is-loading');
      }, 900);
    });
  } else {
    document.body.classList.remove('is-loading');
  }

  const header = document.querySelector('.site-header');
  if (header) {
    const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 24);
    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();
  }

  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    reveals.forEach((element) => revealObserver.observe(element));
  } else {
    reveals.forEach((element) => element.classList.add('visible'));
  }

  // Show above-the-fold content immediately, even before observer callbacks.
  requestAnimationFrame(() => {
    reveals.forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight * 1.05) {
        element.classList.add('visible');
      }
    });
  });

  const storyImages = document.querySelectorAll('.story-image img');
  if (storyImages.length) {
    window.addEventListener('scroll', () => {
      const center = window.innerHeight / 2;
      storyImages.forEach((img) => {
        const rect = img.parentElement.getBoundingClientRect();
        const progress = (center - rect.top) / (window.innerHeight + rect.height);
        const clamped = Math.max(0, Math.min(1, progress));
        img.style.setProperty('--scroll-shift', `${(clamped - 0.5) * 12}px`);
      });
    }, { passive: true });
  }

  const menuButton = document.querySelector('.menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
    });
    mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    }));
  }

  const tabs = document.querySelectorAll('.mobile-tabbar a');
  tabs.forEach((tab) => tab.addEventListener('click', () => {
    tabs.forEach((item) => item.classList.remove('active'));
    tab.classList.add('active');
  }));
})();
