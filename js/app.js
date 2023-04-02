const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting =document.querySelector("#greeting")
const link= document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"; //본인이 생성한 string을 반복해서 사용하게 될 경우에는 대문자 변수로 저장해 놓고 사용하는 것이 실수를 줄일수 있도록 도움이 됨
function onLoginSubmit(event) {  
event.preventDefault();
loginForm.classList.add(HIDDEN_CLASSNAME);
const username = loginInput.value;
localStorage.setItem(USERNAME_KEY, username);
paintGreetings(username);
}

function paintGreetings(username) {
greeting.innerText =`Hello ${username} keep going`;
greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
loginForm.classList.remove(HIDDEN_CLASSNAME);
loginForm.addEventListener("submit", onLoginSubmit);
//show the form
} else {
paintGreetings(savedUsername);
// show the greetings
}