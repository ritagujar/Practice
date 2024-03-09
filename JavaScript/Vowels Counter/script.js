let input = document.querySelector(".input-text");
const btn = document.querySelector(".btn");
const result = document.querySelector(".para");

const countVowels = () => {
  let count = 0;
  let word = input.value.toLowerCase();

  for (let i = 0; i < word.length; i++) {
    let alphabet = word[i];

    if (
      alphabet == "a" ||
      alphabet == "e" ||
      alphabet == "i" ||
      alphabet == "o" ||
      alphabet == "u"
    )
      count++;
  }

  result.innerHTML = `${word.toUpperCase()} has ${count} vowels`;
};

btn.addEventListener("click", countVowels);
