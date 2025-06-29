// Dates
let myDate = new Date();
console.log(myDate); // Current date and time
console.log(myDate.toString()); // String representation
console.log(myDate.toDateString()); // Date part only
console.log(myDate.toTimeString());  // Time part only 
console.log(myDate.toLocaleString("en-IN")); // Locale-specific string
console.log(myDate.toLocaleDateString("en-IN")); // Locale-specific date
console.log(myDate.toLocaleTimeString("en-IN")); // Locale-specific time
console.log(typeof myDate); // Type of myDate (should be 'object')


// let specificDate = new Date(2023, 9, 1); // October 1, 2023 (months are 0-indexed)
let specificDate = new Date("03-25-2005")
console.log(specificDate.toDateString());

// Uncomment the following lines to see more date methods
// console.log(myDate.toISOString()); // ISO format
// console.log(myDate.getFullYear()); // Year
// console.log(myDate.getMonth()); // Month (0-11)
// console.log(myDate.getDate()); // Day of the month (1-31)
// console.log(myDate.getDay()); // Day of the week (0-6, Sunday-Saturday)
// console.log(myDate.getHours()); // Hours (0-23)
// console.log(myDate.getMinutes()); // Minutes (0-59)
// console.log(myDate.getSeconds()); // Seconds (0-59)
// console.log(myDate.getMilliseconds()); // Milliseconds (0-999)



