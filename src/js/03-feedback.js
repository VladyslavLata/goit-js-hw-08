import throttle from 'lodash.throttle';

const FORM_VALUE = "feedback-form-state";
const localStorageValue = localStorage.getItem(FORM_VALUE);
const formEl = document.querySelector(".feedback-form");
const inputEmailEl = document.querySelector("input[name=email]");
const textareaEl = document.querySelector("textarea[name=message]");
formEl.addEventListener('input', throttle(onChangeInputValueClick, 500));
formEl.addEventListener('submit', onFormSubmit);


if (localStorageValue) {
  const inputValue = parseLocalStorageValue();
  
  inputEmailEl.value = inputValue.email;
  textareaEl.value = inputValue.message;
}

function onChangeInputValueClick() {
  localStorage.setItem(FORM_VALUE, JSON.stringify({
  email: event.currentTarget.elements.email.value,
  message: event.currentTarget.elements.message.value}));
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