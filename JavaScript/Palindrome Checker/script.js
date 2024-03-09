const btn = document.querySelector("#btn");
const result = document.querySelector("#result");

const checkPalindrome = () => {
  const word = document.querySelector("#input-check").value;

  if (word.length == 0) {
    alert("Please Enter the Word");
  } else {
    let length = word.length;

    let start = word.substring(0, Math.floor(length / 2)).toLowerCase();

    let end = word.substring(length - Math.floor(length / 2)).toLowerCase();

    const reverse = [...end].reverse().join("");
    console.log(reverse);

    if (start == reverse) {
      result.innerHTML = `${word.toUpperCase()} is a palindrome`;
    } else {
      result.innerHTML = `${word.toUpperCase()} is not a palindrome`;
    }
  }
};

btn.addEventListener("click", checkPalindrome);
