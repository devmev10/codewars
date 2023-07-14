// Given a time in AM/PM format as a string, convert it to military (24-hour) time as a string.

// Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock

// Sample Input: 07:05:45PM Sample Output: 19:05:45

// Try not to use built in DateTime libraries.

// My Solution
function getMilitaryTime(time) {
  // Extract the hour, minute, and second components from the input string
  const [hour, minute, second] = time.split(":");

  // Extract the AM/PM indicator
  const indicator = time.slice(-2).toUpperCase();

  // Convert the hour to a number
  let militaryHour = parseInt(hour);

  // Adjust the hour based on the AM/PM indicator
  if (indicator === "PM" && militaryHour < 12) {
    militaryHour += 12;
  } else if (indicator === "AM" && militaryHour === 12) {
    militaryHour = 0;
  }

  // Pad the hour, minute, and second components with leading zeros if necessary
  const militaryHourString = militaryHour.toString().padStart(2, "0");
  const minuteString = minute.padStart(2, "0");
  const secondString = second.slice(0, 2).padStart(2, "0");

  // Return the military time string
  return `${militaryHourString}:${minuteString}:${secondString}`;
}
