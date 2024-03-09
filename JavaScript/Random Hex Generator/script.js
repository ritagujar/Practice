const hexCode = document.querySelector(".hex-code");
const btn = document.querySelector(".btn");

btn.addEventListener("click", changeBgColor);

function changeBgColor() {
  const randomColor = Math.random().toString(16).substring(2, 8);

  document.body.style.backgroundColor = "#" + randomColor;

  hexCode.innerHTML = "#" + randomColor;
}
