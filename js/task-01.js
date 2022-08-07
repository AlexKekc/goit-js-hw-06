const items = document.querySelectorAll(".item");
console.log("Number of categories: ", items.length);

const categories = document.querySelectorAll("h2");
const categoriesArray = [];
categoriesArray.push(...categories);

categoriesArray.map((category) => {
  const listOfElements = category.nextElementSibling;
  const elementsOfCategory = listOfElements.children;

  console.log("Category: ", category.textContent);
  console.log("Elements: ", elementsOfCategory.length);
});
