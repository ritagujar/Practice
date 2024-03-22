const toggleSwitch = document.querySelector("#toggle-switch");
const box = document.querySelector(".box");
const switchContainer = document.querySelector(".switch__container");

const darkMode = () => {
  box.style.color = "white";
  switchContainer.style.color = "white";
};

const whiteMode = () => {
  box.style.color = "black";
  switchContainer.style.color = "black";
};

const switchTheme = (event) => {
  if (event.target.checked) {
    document.body.style.backgroundColor = "black";
    darkMode();
  } else {
    document.body.style.backgroundColor = "white";
    whiteMode();
  }
};

toggleSwitch.addEventListener("change", switchTheme);
