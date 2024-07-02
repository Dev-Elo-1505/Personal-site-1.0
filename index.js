const day = document.getElementById("day");
const currentTime = document.getElementById("current-time");

function updateDateTime() {
  const getDate = new Date();

  const daysOfWeek = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];

  const hours = String(getDate.getUTCHours()).padStart(2, "0");
  const minutes = String(getDate.getUTCMinutes()).padStart(2, "0");
  const seconds = String(getDate.getUTCSeconds()).padStart(2, "0");

  const time = `${hours}:${minutes}:${seconds} UTC`;

  let dayofWeek = getDate.getUTCDay();
  let today = daysOfWeek[dayofWeek];

  day.innerHTML = `${today} `;
  currentTime.innerHTML = `(${time})`;
}

updateDateTime();
setInterval(updateDateTime, 1000);
