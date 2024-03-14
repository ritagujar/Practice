let todaysCompleteDate = document.querySelector(".date");
let hour = document.querySelector(".hour");
let minutes = document.querySelector(".min");
let seconds = document.querySelector(".sec");

const showDate = () => {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let date = new Date();
  //   console.log(date);
  let day = days[date.getDay()];
  //   console.log(day);
  let todaysDate = date.getDate();
  //   console.log(todaysDate);
  let month = months[date.getMonth()];
  //   console.log(month);
  let year = date.getFullYear();
  //   console.log(year);

  todaysCompleteDate.innerHTML = `${day}, ${todaysDate} ${month} ${year}`;
};

const showTime = () => {
  let date = new Date();
  console.log(date);
  let hr = date.getHours();
  console.log(hr);
  let min = date.getMinutes();
  console.log(min);
  let sec = date.getSeconds();
  console.log(sec);

  //   Changing clock from 24 hr format to 12 hr format
  if (hr == 0) hr == 12;
  if (hr > 12) hr = hr - 12;

  console.log(hr);

  hr = hr < 10 ? "0" + hr : hr;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  hour.innerHTML = hr;
  minutes.innerHTML = min;
  seconds.innerHTML = sec;
};

// SetInterval will call the function every 1000 milliseconda (1 sec), so it's keep updating and shows the updated time on app every 1sec.
setInterval(showTime, 1000);

showDate();
