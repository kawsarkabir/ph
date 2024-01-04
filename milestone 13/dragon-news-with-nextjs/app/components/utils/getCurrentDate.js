export function getCurrentDate() {
  // Create a new Date object
  var currentDate = new Date();

  // Define arrays of day names and month names
  var dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the index of the day and month in the arrays
  var dayIndex = currentDate.getDay();
  var monthIndex = currentDate.getMonth();

  // Get the month, date, and year
  var month = monthIndex + 1; // 0-11 (January to December), so add 1
  var date = currentDate.getDate();
  var year = currentDate.getFullYear();

  // Return the result as an object with the day and month as strings
  return {
    day: dayNames[dayIndex],
    month: monthNames[monthIndex],
    date: date,
    year: year,
  };
}
