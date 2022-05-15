const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector("#text");


const inputChange = (event) => {
    let fontSize = String(event.currentTarget.value);

    textEl.style.fontSize = `${fontSize}px`;
}

inputEl.addEventListener("change", inputChange);