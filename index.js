const currentDate = new Date();

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const dayOfWeek = weekdays[currentDate.getDay()];

document.getElementById("day").textContent = dayOfWeek;

//display utc time
function updateUTCTime() {
  const utcTimeMilliseconds = new Date().getTime();
  const utcTimeElement = document.getElementById("time");
  utcTimeElement.textContent = utcTimeMilliseconds;
  console.log(utcTimeMilliseconds);
}

// Call the function to initially display the UTC time
updateUTCTime();

// Update the UTC time every second (1000 milliseconds)
setInterval(updateUTCTime, 1000);
