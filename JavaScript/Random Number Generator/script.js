const number = document.querySelector(".random-number");
const btn = document.querySelector(".btn");

btn.addEventListener("click", generateRandomNumber);

function generateRandomNumber() {
  // Math.random() is an inbuilt method which returns a random value between 0 to 1 (for example 0.83746, 0.83847, 0.56233 ...)
  // So multiplying by 100 will give us a value between 0 to 99.99999 and to include 100 we will need to add 1 in the end.
  const randomNumber = Math.floor(Math.random() * 100 + 1);

  // Since Math.random gives us a lot of decimal numbers we will use Math.floor to remove the decimals and will get a whole number.
  number.innerHTML = randomNumber;
}
