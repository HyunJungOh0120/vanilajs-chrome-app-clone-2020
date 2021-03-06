const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

//이름을 치면    안녕 누구? 라는 문구가 나왔으면 좋겠다.
//이름이 없으면 폼 그대로 유지.
const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello, ${text}. Having a good day?`;
}

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    ///she isnt here
    askForName();
  } else {
    ///she here
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
