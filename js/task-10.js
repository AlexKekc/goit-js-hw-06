function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divControls = document.querySelector("#controls");
const inputEl = document.querySelector("input[type=number]");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const divBoxes = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes());

inputEl.addEventListener("input", (event) => {
  return event.currentTarget.value;
});

destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const divArray = [];
  for (let i = 1; i <= amount; i += 1) {
    let divEl = document.createElement("div");
    divEl.style.width = "30px";
    divEl.style.height = "30px";
    divEl.textContent = `Box ${i}`;
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.fontSize = "10px";
    divEl.style.textAlign = "center";
    divArray.push(divEl);
    divBoxes.append(...divArray);
  }
  divArray.reduce((total) => {
    return total + 10;
  });
  console.log(divArray);
}

console.log(createBoxes(10));

function destroyBoxes() {
  divBoxes.innerHTML = "";
}
