const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  email.value === "" || password.value === ""
    ? alert("У формі є незаповнені поля. Заповніть, будь ласка")
    : console.log(email.value, password.value) & event.currentTarget.reset();
});
