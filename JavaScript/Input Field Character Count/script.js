const result = document.querySelector(".count");
const inputText = document.querySelector(".input-text");

const charCount = () => {
  const count = inputText.value.replace(/ /g, "").length;

  result.innerHTML = count;
};

inputText.addEventListener("keyup", charCount);
