const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');
const themeButton = document.querySelector('.theme-toggle');

menuButton?.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

themeButton?.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  themeButton.textContent = isDark ? '☀' : '☾';
  themeButton.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
});
