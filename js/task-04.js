let counterValue = 0;

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");

decrementButton.addEventListener("click", function () {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});

incrementButton.addEventListener("click", function () {
  counterValue += 1;
  valueEl.textContent = counterValue;
});
