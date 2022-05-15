const inputEl = document.querySelector("#validation-input");

const inputBlur = (event) => {
    const condition = event.currentTarget.value.length === Number(inputEl.dataset.length);
        inputEl.classList.toggle("invalid", !condition);
        inputEl.classList.toggle("valid", condition);
    
}

inputEl.addEventListener("blur", inputBlur);