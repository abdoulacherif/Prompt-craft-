import { navigateTo } from './auth.js';

document.addEventListener('DOMContentLoaded', () => {
  // Gestion des liens
  document.querySelectorAll('[data-link]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo(link.getAttribute('href'));
    });
  });

  // Highlight navigation active
  const currentPage = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-item').forEach(item => {
    if (item.getAttribute('href').includes(currentPage)) {
      item.classList.add('active');
    }
  });
});