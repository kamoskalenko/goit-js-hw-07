const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  boxesContainer.innerHTML = '';

  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxesContainer.append(box);

    size += 10;
  }
}

createBtn.addEventListener('click', onCreateBtnClick);

function onCreateBtnClick() {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  }
}

destroyBtn.addEventListener('click', onDestroyBtnClick);

function onDestroyBtnClick() {
  boxesContainer.innerHTML = '';
}
