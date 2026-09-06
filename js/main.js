document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
navToggle.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => nav.classList.remove('open'))
);

const toggleMoreBtn = document.getElementById('toggleMore');
const moreExperience = document.getElementById('moreExperience');
toggleMoreBtn.addEventListener('click', () => {
  const isHidden = moreExperience.hasAttribute('hidden');
  if (isHidden) {
    moreExperience.removeAttribute('hidden');
    toggleMoreBtn.textContent = 'Ocultar experiencia complementaria ▴';
  } else {
    moreExperience.setAttribute('hidden', '');
    toggleMoreBtn.textContent = 'Ver experiencia complementaria (2004–2021) ▾';
  }
});
