const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createIngridientsItem = element => {
  const elementRef = document.createElement("li");
  elementRef.textContent = element;
  elementRef.classList.add("item");
 return elementRef;
};
 
const ingredientsRef = ingredients.map(createIngridientsItem);

const listOfIngredientsRef = document.querySelector("#ingredients");
listOfIngredientsRef.append(...ingredientsRef);
