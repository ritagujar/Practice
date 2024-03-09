const hexCode = document.querySelector(".hex-code");
const btn = document.querySelector(".btn");

const changeBgColor = () => {
  // Hex color code looks like this #ff80ff (for pink color)
  // Since we know hex color code is made up off letters and numbers but in a string form.
  // Math.random() will give us a random value between o to 1

  // .toString() will convert that random number to a string.
  // Now that we got the string but it will only show a number like 0.028457. Since we also need alphabets, So we will pass16 inside() to include values between(0 - 9 && a - f).

  // So now the output will look something like this 0.25bac78s3f. But we only need 6 digits to make a hex code, So we will use .substring(2,8) which will neglect the first
  // two elements and give us a value up untill the 8th index which will give us our required 6 digits to make a hex code (i.e. 25bac7 from above example).
  const randomColor = Math.random().toString(16).substring(2, 8);

  document.body.style.backgroundColor = "#" + randomColor;

  hexCode.innerHTML = "#" + randomColor;
};

// Since we are using the ES6 method for writing our function, We have declared the EventListener after the function definition.
btn.addEventListener("click", changeBgColor);
