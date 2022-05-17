const widgetEl = document.querySelector(".widget");
const colorEl = document.querySelector(".color");
const btnCangeColorEl = document.querySelector(".change-color");
const bodyEl = document.body;

const btnClick = () => {
bodyEl.style.backgroundColor = getRandomHexColor();
colorEl.textContent = bodyEl.style.backgroundColor;
}

btnCangeColorEl.addEventListener("click", btnClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
