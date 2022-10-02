import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';

const inputRef = document.querySelector('.feedback-form');

inputRef.addEventListener('input', throttle(onInput, 500));
inputRef.addEventListener('submit', onSubmit);

initPage();

function onInput(evt) {
  const { name, value } = evt.target;
  let formData = localStorage.getItem(LOCALSTORAGE_KEY);
  if (formData) {
    formData = JSON.parse(formData);
  } else {
    formData = {};
  }
  formData[name] = value;
  const formDataJSON = JSON.stringify(formData);
  localStorage.setItem(LOCALSTORAGE_KEY, formDataJSON);
}

function initPage() {
  const saveData = localStorage.getItem(LOCALSTORAGE_KEY);
  if (saveData) {
    const saveDataParse = JSON.parse(saveData);
    Object.entries(saveDataParse).forEach(([name, value]) => {
      inputRef.elements[name].value = value;
    });
  }
}

function onSubmit(evt) {
  evt.preventDefault();
  const {
    elements: { email, message },
  } = evt.currentTarget;
  console.log({ email: email.value, message: message.value });
  evt.target.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
