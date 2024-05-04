// Replace ? With Arithmetic Operators
console.log(10 * 20 + (15 % 3) + 190 + 10 - 400); // 0
// -------------------------------------------------------------------------------------------------
let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num * num - num); // 6

// Soultion Three
console.log(++num + true + true); // 6

// Soultion Four
console.log(parseFloat(num) + true + true); // 6

// Solution Five
console.log(parseInt(num) + num - true - true); // 6

// Solution Six
console.log(--num + --num + --num); // 6
// -------------------------------------------------------------------------------------------------
let Num = "10";

// Solution One
console.log(+Num + +Num); // 20

// Solution Two
console.log(+Num + ++Num - true); // 20

// Solution Three
console.log(--Num + Num); // 20

// Solution Four
console.log(Number(Num + Num)); // 20
// -------------------------------------------------------------------------------------------------
let points = 10;

// Write Your Code Here

console.log(++points + true + true); // 13

// Write Your Code Here

console.log(Number(--points -true -true)); // 8;
