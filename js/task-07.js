const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector("#text");

textEl.style.fontSize = `${inputEl.value}px`;

const inputChange = (event) => {
    let fontSize = String(event.currentTarget.value);

    textEl.style.fontSize = `${fontSize}px`;
}

inputEl.addEventListener("change", inputChange);