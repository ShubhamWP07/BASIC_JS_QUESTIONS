// 18. Write a program which tells the number of days in a month, now consider leap year.



function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

let EnterYearMonth = daysInMonth( 2020);
console.log(EnterYearMonth);

// OUTPUT

