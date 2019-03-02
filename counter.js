//     const counter = document.querySelector('.counter span');
//     let number = new Date();
//     if (number.getMonth() == 1) {
//       counter.textContent = number.getDate() - 9;
//     } else if (number.getMonth() == 2) {
//       counter.textContent = number.getDate() + 19;
//     } else if (number.getMonth() == 3) {
//       counter.textContent = number.getDate() + 50;
//     } else if (number.getMonth() == 4) {
//       counter.textContent = number.getDate() + 80;
//     }

// today - first take
// let todayDay = new Date().getMonth() - 1; // number of prevoious month
// if (todayDay > -1) { // count days of all previous month
//   for (let i = todayDay; i >= 0; i--) {
//     todayDay += Number(months[i]);
//   }
// }
// todayDay = todayDay + new Date().getDate(); // add number of days from this month

const counter = document.querySelector('.counter span');
// number of days in months
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// start day declaration; first numer is a month, second one is a day
const startDay = '02-09';
//reducer function
const add = function (accumulator, a) {
 return accumulator + a;
}
// number of days till start day
let startDateMonths = Number(startDay.slice(0, 2));
startDateMonths > 1 ? startDateMonths = months.slice(0, startDateMonths - 1).reduce(add) : startDateMonths = 0;
let startDateDays = Number(startDay.slice(3));
startDateDays > 1 ? startDateDays : startDateDays = 0;
const startDate = startDateMonths + startDateDays;
// number of days till today
let daysTillToday = new Date().getMonth(); // find number of previous months
daysTillToday = months.slice(0, daysTillToday).reduce(add); // number of days in previous months (if they are)
daysTillToday += new Date().getDate(); // plus days from this month
// count difference
const numberOfDays = daysTillToday - startDate;
// show it
counter.textContent = numberOfDays;
  
