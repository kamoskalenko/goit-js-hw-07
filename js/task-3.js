const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', onChangeOutput);

function onChangeOutput(event) {
  output.textContent = event.currentTarget.value.trim();

  if (event.currentTarget.value.trim() === '')
    return (output.textContent = `Anonymous`);
}
