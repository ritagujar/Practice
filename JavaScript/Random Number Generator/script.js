const number = document.querySelector(".random-number");
const btn = document.querySelector(".btn");

btn.addEventListener("click", generateRandomNumber);

function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 100 + 1);

  number.innerHTML = randomNumber;
}
