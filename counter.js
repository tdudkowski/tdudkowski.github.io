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

// UTILITIES
const counter = document.querySelector('.counter span');
// number of days in months
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//reducer function
const add = function (accumulator, a) {
 return accumulator + a;
}
// function counting number of days till specified date
const countDays = (day) => {
 let dateMonths = Number(day.slice(0, 2));
 dateMonths > 1 ? dateMonths = months.slice(0, dateMonths - 1).reduce(add) : dateMonths = 0; // conting number of days from previous months
 let dateDays = Number(day.slice(3));
 dateDays = 1 && dateMonths == 0 ? dateDays = 0 : dateDays; // removing January 1st from counting
 const numberOfDays = dateMonths + dateDays;
 return numberOfDays;
}
// function creating date format
const formatDate = (month, day) => {
 const formattedDate = `${month>9?month:'0'+month}-${day>9?day:'0'+day}`;
 return formattedDate;
}

// START DAY
// start day declaration
const monthsStart = 2;
const daysStart = 9;
const startDay = formatDate(monthsStart, daysStart);
// number of days till start day - daysTillStart
daysTillStart = countDays(startDay);

// END DAY
// end day declaration; first number is a month, second one is a day
let endDay = '03-02';
// if endDay is today; if not - comment 3 lines below
const monthsEnd = new Date().getMonth() + 1;
const daysEnd = new Date().getDate();
endDay = formatDate(monthsEnd, daysEnd);
// number of days till start day - daysTillEnd
daysTillEnd = countDays(endDay);
// old way
// let daysTillEnd = new Date().getMonth(); // find number of previous months
// daysTillEnd = months.slice(0, daysTillEnd).reduce(add); // number of days in previous months (if they are)
// daysTillEnd += new Date().getDate(); // plus days from this month

// DIFFERENCE
// count difference
const factorX = 1; // number of absent days
let result = daysTillEnd - daysTillStart;
result-= factorX;
// show it
counter.textContent = result;
  
