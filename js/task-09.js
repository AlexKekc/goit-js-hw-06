function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const spanColour = document.querySelector(".color");
const buttonChangeColor = document.querySelector(".change-color");

buttonChangeColor.addEventListener("click", changeBackGroundColour);

function changeBackGroundColour(event) {
  body.style.backgroundColor = getRandomHexColor();
  spanColour.textContent = getRandomHexColor();
}
