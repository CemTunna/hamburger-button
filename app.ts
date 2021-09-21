const btn = document.querySelector('.menu-btn')! as HTMLButtonElement;
let isMenuOpen = false;
const clickHandler = () => {
  if (!isMenuOpen) {
    btn.classList.add('open');
    isMenuOpen = true;
  } else {
    btn.classList.remove('open');
    isMenuOpen = false;
  }
};
btn.addEventListener('click', clickHandler);
