const nameInput = document.getElementById("name-input");
const numberInput = document.getElementById("number-input");
const Card = document.getElementById("card");

function onBtnClick() {
  checkAge();

  Card.innerHTML +=
    `<div class="card-body">
    <h5 class="card-title">Card Profile</h5>
    <p class="card-text">
      Hello !! My name is ` +
    nameInput.value +
    ` and I'am ` +
    numberInput.value +
    ` years old
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
