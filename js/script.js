// LUMMA — интерактив сайта
// Лайтбокс удалён вместе с галереей локаций; осталось только мобильное меню.

// ── Мобильное меню ──
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Закрываем меню при клике по ссылке
nav.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});
