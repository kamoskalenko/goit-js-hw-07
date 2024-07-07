const body = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
const colorTextCont = document.querySelector('.color');

const setBgColor = () => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  body.style.background = getRandomHexColor();
  colorTextCont.textContent = body.style.background;
};

changeColorBtn.addEventListener('click', setBgColor);
