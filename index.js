// Day of the Week
var currentDate = new Date();
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var currentDayIndex = currentDate.getDay();
var currentDayName = daysOfWeek[currentDayIndex];
var currentDayElement = document.getElementById("currentDay");

if (currentDayElement) {
    currentDayElement.textContent = "Today is " + currentDayName;
} else {
    console.error("Element with ID 'currentDay' not found in the HTML.");
}
// UTC time 
function updateUTC() {
    let currentDate = new Date();
    let utcTime = currentDate.getTime();
  
    document.getElementById('utcTime').innerHTML = utcTime;
  }
  
  updateUTC();
  setInterval(updateUTC, 100);

