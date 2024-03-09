const counter = document.querySelector(".counter");
const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");

increase.addEventListener("click", () => {
  counter.innerHTML++;
});

decrease.addEventListener("click", () => {
  counter.innerHTML--;
});
