const categoriasEl = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categoriasEl.length}`);

categoriasEl.forEach (category => {
    console.log("Category:", category.querySelector("h2").textContent);
    console.log("Elements:", category.querySelectorAll("li").length);
})