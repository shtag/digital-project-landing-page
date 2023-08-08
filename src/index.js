import './styles.scss';

const input = document.querySelector('.header_menu_btn');
const menu = document.querySelector('.header_nav');
input.addEventListener('input', () => {
  if (input.checked) {
    console.log(input.checked);
    menu.style.transform = 'translateY(1px)';
  } else {
    // menu.style.top = '-10000px';
    menu.style.transform = 'translateY(-1000px)';
  }
});
