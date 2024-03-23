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
// const myDebounce = (cb, d) => {
//   let timer;

//   // This will be going to return a function as which is debounceCount so we are supposed to return a function
//   return function (...args) {
//     // Why we are clearing a timer is
//     // Every time we run this my debounce we have to clear this timer else we are gonna have all
//     // timer run one afer the other and it's going to fail the purpose of debounce function
//     if (timer) clearTimeout(timer);
//     timer = setTimeout(() => {
//       cb(...args);
//     }, d);
//   };
// };

// As this myDebounce func here takes a function and delay time
// const debounceCount = myDebounce(() => {
//   count.innerHTML = ++triggerCount;
// }, 800);

// btn.addEventListener("click", () => {
//   btnPress.innerHTML = ++pressedCount;
//   debounceCount();
// });

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

// Ques 2 -- Create debounce() Polyfill Implementation

const myThrottle = (cb, d) => {
  // When an perticular even is executed we are gonna record that time
  // So when the another even happens we are gonna messure if this perticular current time minus out previous time is more than our delay time or not
  // if it's less than our delay time then we are going to simply return it and we are not going to execute that event
  // but if it's more than our delay time then obviously we are going to execute that perticular even
  let last = 0;

  return function (...args) {
    // Current Time
    let now = new Date().getTime();

    if (now - last < d) return;
    last = now;
    return cb(...args);
  };
};

const throttledCount = myThrottle(() => {
  count.innerHTML = ++triggerCount;
}, 800);

btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;
  throttledCount();
});
