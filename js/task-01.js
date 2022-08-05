const itemsCount = document.querySelectorAll(".item");
console.log("Number of categories: ", itemsCount.length);

const categoriesCount = document.querySelectorAll("h2");
const listCount = document.querySelectorAll("li + li");
console.log(listCount);
for (let i = 0; i < categoriesCount.length; i += 1) {
  console.log("Category: ", categoriesCount[i].textContent);
  //   const elementsList = categoriesCount[i].firstChild;
  //   console.log(elementsList);
  //   const elementfgfg = elementsList.childNodes.length;
  //   console.log("Elements: ", elementsList);
}

// const elementsParent = document.querySelector("ul");
// const elementsList = elementsParent.children;
// console.log(elementsList);
