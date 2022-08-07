const inputEl = document.querySelector("#font-size-control");
const spanTextEl = document.querySelector("#text");

inputEl.addEventListener("input", resizeText);

function resizeText(event) {
  spanTextEl.style.fontSize = `${event.currentTarget.value}px`;
}
