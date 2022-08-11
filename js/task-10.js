function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("input[type=number]");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const divBoxes = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);

destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = inputEl.value;
  let startSizeOfDiv = 20;
  let startSizeOfText = 10;
  const divArray = [];
  for (let i = 1; i <= amount; i += 1) {
    let divEl = document.createElement("div");
    divEl.style.width = `${startSizeOfDiv + i * 10}px`;
    divEl.style.height = `${startSizeOfDiv + i * 10}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.textContent = `Box ${i}`;
    divEl.style.fontSize = `${startSizeOfText + i}px`;
    divEl.style.alignItems = "center";
    divEl.style.textAlign = "center";
    divArray.push(divEl);
    divBoxes.append(...divArray);
  }
  return divArray;
}

function destroyBoxes() {
  divBoxes.innerHTML = "";
}
