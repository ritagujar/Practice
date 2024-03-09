const counter = document.querySelector(".counter");
const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");

increase.addEventListener("click", () => {
  counter.innerHTML++;
  counterColorChange();
});

reset.addEventListener("click", () => {
  counter.innerHTML = 0;
  counterColorChange();
});

decrease.addEventListener("click", () => {
  counter.innerHTML--;
  counterColorChange();
});

function counterColorChange() {
  if (counter.innerHTML < 0) counter.style.color = "red";
  else if (counter.innerHTML > 0) counter.style.color = "green";
  else {
    counter.style.color = "black";
  }
}
