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
  console.log(date);
  let day = days[date.getDay()];
  console.log(day);
  let todaysDate = date.getDate();
  console.log(todaysDate);
  let month = months[date.getMonth()];
  console.log(month);
  let year = date.getFullYear();
  console.log(year);

  todaysCompleteDate.innerHTML = `${day}, ${todaysDate} ${month} ${year}`;
};

showDate();
