const form = document.querySelector('.login-form');

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const mail = formElements.email.value;
  const password = formElements.password.value;

  if (mail.trim() === '' || password.trim() === '') {
    alert(`All form fields must be filled in`);
  } else {
    const formData = {
      mail: mail.trim(),
      password: password.trim(),
    };

    console.log(formData);
  }

  event.currentTarget.reset();
}
