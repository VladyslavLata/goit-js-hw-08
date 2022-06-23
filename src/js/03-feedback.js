import throttle from 'lodash.throttle';

const FORM_VALUE = 'feedback-form-state';
let formData = {};
const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('input', throttle(onChangeInputValueClick, 500));
formEl.addEventListener('submit', onFormSubmit);

parseLocalStorageValue();

function onChangeInputValueClick() {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(FORM_VALUE, JSON.stringify(formData));
}

function parseLocalStorageValue() {
  const localStorageValue = localStorage.getItem(FORM_VALUE);
  if (localStorageValue) {
    try {
      formData = JSON.parse(localStorageValue);
      insertData(formData);
    } catch (error) {}
  }
}

function insertData(formData) {
  if ('email' in formData) {
    formEl.email.value = formData.email;
  }
  if ('message' in formData) {
    formEl.message.value = formData.message;
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(FORM_VALUE);
  formData = {};
}
