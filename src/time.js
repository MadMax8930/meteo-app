const dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// Time management

let today = new Date();
let options = {weekday:'long'};
let currentDay = today.toLocaleDateString('en-EN', options);
// console.log(currentDay, today);

currentDay = currentDay.charAt(0).toUpperCase() + currentDay.slice(1);

let newDayOrderArr = dayOfWeek.slice(dayOfWeek.indexOf(currentDay)).concat(dayOfWeek.slice(0, dayOfWeek.indexOf(currentDay)));
// console.log(newDayOrderArr);

export default newDayOrderArr;