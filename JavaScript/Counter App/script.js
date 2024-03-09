const counter = document.querySelector(".counter");
const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");

increase.addEventListener("click", () => {
  counter.innerHTML++;
});

reset.addEventListener("click", () => {
  counter.innerHTML = 0;
});

decrease.addEventListener("click", () => {
  counter.innerHTML--;
});
