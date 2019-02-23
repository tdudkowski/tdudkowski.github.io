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
// start day number - 9th of February
const startDay = months[0] + 9;
// today
const add = function (accumulator, a) { // reducer function
return accumulator + a;
}
let todayDay = new Date().getMonth() - 1; // find number of previous months
if (todayDay >= 0) { // number of days in previous months (if they are)
  todayDay = months.splice(todayDay, 1).reduce(add);
}
todayDay = (todayDay + new Date().getDate()) - startDay; // add number of days from this month minus start day number
// show it
counter.textContent = todayDay;
  
