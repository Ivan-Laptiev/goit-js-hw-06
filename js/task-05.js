const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

const inputChange = () => {
outputEl.textContent = (inputEl.value) ? inputEl.value : "Anonymous";
}

inputEl.addEventListener("input", inputChange);