import throttle from 'lodash.throttle';

const FORM_VALUE = "feedback-form-state";
const formData = {};
const localStorageValue = localStorage.getItem(FORM_VALUE);
const formEl = document.querySelector(".feedback-form");
const inputEmailEl = document.querySelector("input[name=email]");
const textareaEl = document.querySelector("textarea[name=message]");
formEl.addEventListener('input', throttle(onChangeInputValueClick, 500));
formEl.addEventListener('submit', onFormSubmit);


if (localStorageValue) {
  const inputsValue = parseLocalStorageValue();

    inputEmailEl.value = inputsValue.email;
    textareaEl.value = inputsValue.message;
  }

function onChangeInputValueClick() {
  formData.email = event.currentTarget.elements.email.value;
  formData.message =  event.currentTarget.elements.message.value;
  localStorage.setItem(FORM_VALUE, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(FORM_VALUE);
}

function parseLocalStorageValue() {
  try {
return  JSON.parse(localStorageValue);
} catch (error) {
}
}