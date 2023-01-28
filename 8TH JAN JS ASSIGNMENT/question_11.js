// 11. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.



// - What is the year today?

let getDate = {
  now : new Date(),
  year: function(){
    return this.now.getFullYear();
  },
  // OUTPUT
  // 2023


  // - What is the month today as a number?

  month: function(){
    return this.now.getMonth()+1;
  },
  // OUTPUT
  // 1


  // - What is the date today?

  date: function() {
    return this.now.getDate()
  },
  // OUTPUT
  // 14
  

  // - What is the day today as a number?

  day: function() {
    return this.now.getDay();
  },
  // OUTPUT
  // 6


  // - What is the hours now?

  hour: function(){
    return this.now.getHours();
  },
  // OUTPUT
  // 23


  // - What is the minutes now?

  minute : function(){
    return this.now.getMinutes();
  },
  // OUTPUT
  // 48


  // - Find out the numbers of seconds elapsed from January 1, 1970 to now.

  second: function (){
    return Date.now();
  }
  // OUTPUT
  // 1673720319107

}
console.log(getDate.year());
console.log(getDate.month());
console.log(getDate.date());
console.log(getDate.day());
console.log(getDate.hour());
console.log(getDate.minute());
console.log(getDate.second());


