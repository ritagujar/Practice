// Debouncing and Throttling in JavaScript
// Ques 1 - Create a button UI and add debounce as follows =>
//          --> Show "Button Pressed <X> Times" every time button is pressed
//          --> Show "Triggered <Y> Times" count after 800ms of debounce

const btn = document.querySelector(".increament_btn");
const btnPress = document.querySelector(".increament_pressed");
const count = document.querySelector(".increament_count");

var pressedCount = 0;
var triggerCount = 0;

// ******* DEBOUNCING *******

// Either we can create out own implementation of debounce or we can use debounce function from a library like Lodash
// We have to ask the interviwer if we are allowed to use Lodash or create a custom implementaion

// Using Lodash Library
// const debounceCount = _.debounce(() => {
//   count.innerHTML = ++triggerCount;
// }, 800);

// btn.addEventListener("click", () => {
//   btnPress.innerHTML = ++pressedCount;
//   debounceCount();
// });

// Ques 2 -- Create debounce() Polyfill Implementation

// So here we have to take the callback func and delay time
const myDebounce = (cb, d) => {
  let timer;

  // This will be going to return a function as which is debounceCount so we are supposed to return a function
  return function (...args) {
    // Why we are clearing a timer is
    // Every time we run this my debounce we have to clear this timer else we are gonna have all
    // timer run one afer the other and it's going to fail the purpose of debounce function
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, d);
  };
};

// As this myDebounce func here takes a function and delay time
const debounceCount = myDebounce(() => {
  count.innerHTML = ++triggerCount;
}, 800);

btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;
  debounceCount();
});

// ******* THROTTLING *******

// Ques 1 - Create a button UI and add debounce as follows =>
//          --> Show "Button Pressed <X> Times" every time button is pressed
//          --> Show "Triggered <Y> Times" count after 800ms of throttle

// Using Lodash Library
// const throttledCount = _.throttle(() => {
//   count.innerHTML = ++triggerCount;
// }, 800);

// btn.addEventListener("click", () => {
//   btnPress.innerHTML = ++pressedCount;
//   throttledCount();
// });
