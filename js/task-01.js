const itemsCount = document.querySelectorAll(".item");
console.log("Number of categories: ", itemsCount.length);

const categoriesCount = document.querySelectorAll("h2");

for (let i = 0; i < categoriesCount.length; i += 1) {
  const listOfElements = categoriesCount[i].nextElementSibling;
  const elementsOfCategory = listOfElements.children;

  console.log("Category: ", categoriesCount[i].textContent);
  console.log("Elements: ", elementsOfCategory.length);
}
