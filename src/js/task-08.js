    const formEl = document.querySelector(".login-form")
    const emailEl = document.querySelectorAll("input")[0];
    const passwordEl = document.querySelectorAll("input")[1];
    const btnEl = document.querySelector("button");

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (event.currentTarget.elements.email.value === "" || event.currentTarget.elements.password.value === "") {
            alert("Заполните обязательные поля");
        } else {
            const emailInput = emailEl.getAttribute("name");
            const passInput = passwordEl.getAttribute("name");
                const data = {
                [emailInput] : event.currentTarget.elements.email.value,
                [passInput] : event.currentTarget.elements.password.value,
            }
            console.log(data);
            formEl.reset();  
        }
    }

    formEl.addEventListener("submit", onFormSubmit);