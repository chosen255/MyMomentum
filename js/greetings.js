const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const greetingUser = document.querySelector(".greeting-hello")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); 
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    const rename = document.createElement("button");
    rename.className = "renameBtn";
    rename.innerText = "●";
    greetingUser.appendChild(rename);
    rename.addEventListener("click", onRename);

    greeting.innerText = `Hello ${username}`;
    greetingUser.classList.remove(HIDDEN_CLASSNAME);

    loginForm.addEventListener("submit", onLoginSubmit);
}

function onRename(event) {
    greetingUser.classList.add(HIDDEN_CLASSNAME);
    localStorage.removeItem(USERNAME_KEY);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginInput.value = "";
    event.target.remove();
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}
