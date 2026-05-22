const header = document.getElementById('homeHeader');
const heroSearch = document.getElementById('heroSearch');
const searchShells = Array.from(document.querySelectorAll('.search-shell'));

function updateHeaderSearch(){
  const trigger = heroSearch ? heroSearch.getBoundingClientRect().bottom <= 110 : window.scrollY > 260;
  header.classList.toggle('is-scrolled', trigger);
}

function closeSearches(){
  searchShells.forEach(shell => shell.classList.remove('is-active'));
  document.body.classList.remove('search-open');
}

function openSearch(shell){
  searchShells.forEach(item => item.classList.toggle('is-active', item === shell));
}

const resolveIproQuery = (value = '') => /\bipro\b|iprostore/i.test(value.trim());

searchShells.forEach(shell => {
  const input = shell.querySelector('input');
  const actionBtn = shell.querySelector('button');
  shell.addEventListener('mouseenter', () => openSearch(shell));
  shell.addEventListener('focusin', () => openSearch(shell));
  shell.addEventListener('mouseleave', () => {
    if (!shell.contains(document.activeElement)) closeSearches();
  });
  if (input) {
    input.addEventListener('input', () => openSearch(shell));
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (resolveIproQuery(input.value)) window.location.href = 'review/iprostore.html';
        else openSearch(shell);
      }
      if (e.key === 'Escape') {
        input.blur();
        closeSearches();
      }
    });
  }
  if(actionBtn){
    actionBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (input && resolveIproQuery(input.value)) window.location.href = 'review/iprostore.html';
      else openSearch(shell);
    });
  }
});

document.addEventListener('click', e => {
  if (!e.target.closest('.search-shell')) closeSearches();
});


document.addEventListener('click', e => {
  const disabledSuggestion = e.target.closest('.suggestion-disabled');
  if (disabledSuggestion) {
    e.preventDefault();
    return;
  }
  const targetSuggestion = e.target.closest('.search-target');
  if (targetSuggestion && targetSuggestion.dataset.target) {
    e.preventDefault();
    window.location.href = targetSuggestion.dataset.target;
  }
});

updateHeaderSearch();
window.addEventListener('scroll', updateHeaderSearch, { passive:true });
window.addEventListener('resize', updateHeaderSearch);


// Mobile menu + mobile search
(() => {
  const body = document.body;
  const menuBtn = document.querySelector('.mobile-menu');
  const menuOverlay = document.querySelector('.mobile-menu-overlay');
  const searchTrigger = document.querySelector('.mobile-search-trigger');
  const searchOverlay = document.querySelector('.mobile-search-overlay');
  const searchClose = document.querySelector('.mobile-search-close');
  const searchInput = document.querySelector('.mobile-search-input');
  const heroSearch = document.querySelector('.hero-search');
  const headerSearch = document.querySelector('.header-search');
  const mobileSearchLaunchers = [heroSearch, headerSearch].filter(Boolean);

  const isMobileLayout = () => window.matchMedia('(max-width: 960px)').matches;

  function closeMobileMenu(){ body.classList.remove('mobile-menu-open'); }
  function openMobileMenu(){ body.classList.remove('mobile-search-open','notifications-open'); body.classList.add('mobile-menu-open'); }
  function toggleMobileMenu(){ body.classList.contains('mobile-menu-open') ? closeMobileMenu() : openMobileMenu(); }
  function closeMobileSearch(){ body.classList.remove('mobile-search-open'); }
  function openMobileSearch(){ body.classList.remove('mobile-menu-open','notifications-open'); body.classList.add('mobile-search-open'); setTimeout(() => searchInput && searchInput.focus(), 40); }

  function syncSearchInputs(){
    const readonly = isMobileLayout();
    mobileSearchLaunchers.forEach((launcher) => {
      const input = launcher.querySelector('input');
      if(!input) return;
      if(readonly){
        input.setAttribute('readonly', 'readonly');
        input.setAttribute('aria-readonly', 'true');
      } else {
        input.removeAttribute('readonly');
        input.removeAttribute('aria-readonly');
      }
    });
  }

  function handleMobileLauncher(e){
    if(!isMobileLayout()) return;
    e.preventDefault();
    openMobileSearch();
  }

  menuBtn && menuBtn.addEventListener('click', (e) => { e.preventDefault(); toggleMobileMenu(); });
  menuOverlay && menuOverlay.addEventListener('click', closeMobileMenu);
  searchTrigger && searchTrigger.addEventListener('click', (e) => { e.preventDefault(); openMobileSearch(); });
  searchClose && searchClose.addEventListener('click', (e) => { e.preventDefault(); closeMobileSearch(); });

  mobileSearchLaunchers.forEach((launcher) => {
    launcher.addEventListener('click', handleMobileLauncher);
    const input = launcher.querySelector('input');
    input && input.addEventListener('focus', handleMobileLauncher);
  });

  syncSearchInputs();
  window.addEventListener('resize', syncSearchInputs);

  searchInput && searchInput.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
      e.preventDefault();
      if (resolveIproQuery(searchInput.value)) window.location.href = 'review/iprostore.html';
    }
  });

  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){
      closeMobileMenu();
      closeMobileSearch();
      closeNotifications();
      hideLoading();
    }
  });
})();

// Notifications drawer + universal verifying overlay
(() => {
  const body = document.body;
  const loading = document.querySelector('.tp-loading');
  const panel = document.querySelector('.notif-panel');
  const overlay = document.querySelector('.notif-overlay');
  const closeBtn = document.querySelector('.notif-close');

  function hideLoading(){
    if(!loading) return;
    loading.classList.remove('is-visible');
    clearTimeout(window.__tpLoadingTimer);
  }

  function showLoading(options = {}){
    if(!loading) return;
    const { thenNavigate = null, persistent = false } = options;
    loading.classList.add('is-visible');
    clearTimeout(window.__tpLoadingTimer);
    if(persistent) return;
    window.__tpLoadingTimer = setTimeout(() => {
      loading.classList.remove('is-visible');
      if(typeof thenNavigate === 'function') thenNavigate();
    }, 850);
  }

  function openNotifications(){
    body.classList.remove('mobile-menu-open','mobile-search-open');
    body.classList.add('notifications-open');
    if(panel) panel.setAttribute('aria-hidden','false');
    if(overlay) overlay.setAttribute('aria-hidden','false');
  }
  function closeNotifications(){
    body.classList.remove('notifications-open');
    if(panel) panel.setAttribute('aria-hidden','true');
    if(overlay) overlay.setAttribute('aria-hidden','true');
  }

  document.querySelectorAll('.bell, a[aria-label="Notifications"], button[aria-label="Notifications"]').forEach(el => {
    el.classList.add('js-notification-trigger');
  });

  document.addEventListener('click', (e) => {
    const notifTrigger = e.target.closest('.js-notification-trigger, .bell, a[aria-label="Notifications"], button[aria-label="Notifications"]');
    if(notifTrigger){
      e.preventDefault();
      openNotifications();
      return;
    }

    if(e.target.closest('.notif-close') || e.target.closest('.notif-overlay')){
      e.preventDefault();
      closeNotifications();
      return;
    }

    const clickable = e.target.closest('button, a');
    if(!clickable) return;
    if(clickable.closest('.search-suggestions')) return;
    if(clickable.closest('.search-shell')) return;
    if(clickable.closest('.mobile-search-overlay .search-target')) return;
    if(clickable.matches('.mobile-search-trigger, .mobile-search-close, .mobile-search-icon, .mobile-menu, .notif-close')) return;
    if(clickable.classList.contains('notif-close')) return;
    if(clickable.closest('.tp-loading')) return;

    const href = clickable.tagName === 'A' ? (clickable.getAttribute('href') || '').trim() : '';
    const target = clickable.tagName === 'A' ? clickable.getAttribute('target') : null;
    if(clickable.classList.contains('search-target')) return;

    if(href && href !== '#' && !href.startsWith('javascript:')){
      e.preventDefault();
      showLoading({ thenNavigate: () => {
        if(target === '_blank') window.open(href, '_blank', 'noopener');
        else window.location.href = href;
      }});
      return;
    }

    e.preventDefault();
    showLoading({ persistent: true });
  });

  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') closeNotifications();
  });
})();

// ===== Guaranteed visible hero shape motion (JS-driven, bypasses CSS animation conflicts) =====
(() => {
  const yellow = document.querySelector('.hero .shape-yellow');
  const green = document.querySelector('.hero .shape-green');
  const orange = document.querySelector('.hero .shape-orange');
  if (!yellow && !green && !orange) return;

  const shapes = [yellow, green, orange].filter(Boolean);
  shapes.forEach((shape) => {
    shape.style.setProperty('animation', 'none', 'important');
    shape.style.setProperty('will-change', 'transform', 'important');
    shape.style.setProperty('transform-origin', '50% 70%', 'important');
  });

  function animateHeroShapes(now) {
    // Slow-motion movement: 4x slower than the previous version.
    const t = (now / 1000) * 0.25;

    if (yellow) {
      const a = Math.sin(t * 1.65);
      const b = Math.cos(t * 1.18 + 0.55);
      const x = 46 + a * 56;
      const y = -22 + b * 24;
      const rot = -18 + a * 26;
      yellow.style.setProperty('transform', `translate3d(${x}px, ${y}px, 0) rotate(${rot}deg)`, 'important');
    }

    if (green) {
      const a = Math.sin(t * 1.28 + 2.1);
      const b = Math.cos(t * 1.74 + 1.35);
      const x = -46 + a * 56;
      const y = -26 + b * 24;
      const rot = 18 - a * 28;
      green.style.setProperty('transform', `translate3d(${x}px, ${y}px, 0) rotate(${rot}deg)`, 'important');
    }

    if (orange) {
      const a = Math.sin(t * 1.04 + 0.6);
      const b = Math.cos(t * 1.42 + 1.1);
      orange.style.setProperty('transform', `translate3d(${a * 34}px, ${10 + b * 20}px, 0)`, 'important');
    }

    requestAnimationFrame(animateHeroShapes);
  }

  requestAnimationFrame(animateHeroShapes);
})();
