const nameInput = document.getElementById("name-input");
const numberInput = document.getElementById("number-input");
const femaleInput = document.getElementById("female-input");
const maleInput = document.getElementById("male-input");
const Card = document.getElementById("card");
const colorInput = document.getElementById("color-input");
const countryInput = document.getElementById("country-input");

function setUserFavoriteColor(color) {
  Card.style.backgroundColor = color;
}

function resetInputs() {
  nameInput.value = "";
  numberInput.value = "";
  colorInput.value = "#ffffff";
}

function onBtnClick() {
  setGender();
  checkAge();
  setUserFavoriteColor(colorInput.value);

  let gender = "";
  if (femaleInput.checked) {
    gender = femaleInput.value;
  }
  if (maleInput.checked) {
    gender = maleInput.value;
  }

  Card.innerHTML +=
    `<div class="card-body">
    <h5 class="card-title">` +
    setGender() +
    `</h5>
    <p class="card-text">
      Hello !! My name is ` +
    nameInput.value +
    ` and I'am ` +
    numberInput.value +
    ` years old and I'am from ` +
    countryInput.value +
    `
    </p>
  </div>`;
}

function checkAge() {
  if (nameInput.value.length <= 1) {
    Card = "";
  }
  if (numberInput.value <= 0) {
    Card = "";
  }
}

function setGender() {
  if (femaleInput.checked) {
    return "female";
  }

  if (maleInput.checked) {
    return "male";
  }
}
