const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.navbar ul');
const formContainer = document.querySelector('.form-container');

menuToggle.addEventListener('click', () => {
  if (navLinks.classList.contains('show')) {
    navLinks.classList.remove('show');
    navLinks.classList.add('hide');
  } else {
    navLinks.classList.remove('hide');
    navLinks.classList.add('show');
    hideForm(); 
  }
});

function showForm() {
  formContainer.classList.remove('hidden');
  formContainer.style.zIndex = 50;
}

function hideForm() {
  formContainer.classList.add('hidden');
  formContainer.style.zIndex = -1;
}

document.querySelector('.some-button').addEventListener('click', () => {
  hideMenu(); 
  showForm();
});

function hideMenu() {
  navLinks.classList.remove('show');
  navLinks.classList.add('hide');
}
