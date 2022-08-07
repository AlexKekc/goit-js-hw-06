const inputEl = document.querySelector("#validation-input");
const attributeOfInput = inputEl.getAttribute("data-length");

inputEl.addEventListener("blur", (event) => {
  event.currentTarget.value.length == attributeOfInput
    ? inputEl.classList.add("valid") & inputEl.classList.remove("invalid")
    : inputEl.classList.add("invalid") & inputEl.classList.remove("valid");
});
