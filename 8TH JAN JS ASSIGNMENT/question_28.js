
// 28. Write a program to print the given patterns using the loops-
// a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
//    *
//    **
//    ***

// b. Print a square pattern, if the input is 3 then the output should be similar to the given output
//    ***
//    ***
//    ***

// c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
//      *
//     ***
//     *****



// a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
//    *
//    **
//    ***
let number = 5;
let star = "";
for (let i = 1; i <= number; i++) {
  for (let j = 0; j < i; j++) {
    star += "*";
  }
  star += "\n";
}
console.log(star);

// OUTPUT
// *
// **
// ***
// ****
// *****



// b. Print a square pattern, if the input is 3 then the output should be similar to the given output
//    ***
//    ***
//    ***
let num = 3;
let str = "";

for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= num; j++) {
    str += "*";
  }
  str += "\n";
}

console.log(str);

// OUPUT
// ***
// ***
// ***



// c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
//      *
//     ***
//     *****
let num2 = 3;
let str2 = "";

for (let i = 1; i <= num2; i++) {
  for (let j = 1; j <= num2 - i; j++) {
    str2 += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    str2 += "*";
  }
  str2 += "\n";
}
console.log(str2);

// OUTPUT
//   *
//  ***
// *****