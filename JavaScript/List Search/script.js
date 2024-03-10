const input = document.querySelector(".input-text");
const listItems = document.querySelectorAll("li");

const searchBooks = () => {
  const inputValue = input.value;

  for (let i = 0; i < listItems.length; i++) {
    if (listItems[i].innerHTML.toLowerCase().includes(inputValue))
      listItems[i].style.display = "";
    else listItems[i].style.display = "none";
  }
};

input.addEventListener("keyup", searchBooks);
