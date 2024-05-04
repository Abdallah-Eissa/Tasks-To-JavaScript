// Test Case 1
let num = 99; // "009"
if (num < 10) {
  console.log(`00${num}`);
} else if (num >10 && num <= 100) {
  console.log(`0${num}`);
} else if (100 < num) {
  console.log(`${num}`);
}

// num < 10
// ? console.log(`00${num}`)
// : num > 10 && num <= 100
// ? console.log(`0${num}`)
// : console.log(`${num}`);
// Test Case 2
// let num = 20; // "020"
// Test Case 3
// let num = 110; // "110"
// ---------------------------------------------------------------
let num_1 = 9;
let str = "9";
let str2 = "20";
if (num_1 == str) {
  console.log(`${num_1} Is The Same Value As ${str}`);
}
if (num_1 == str && num_1 !== str) {
  console.log(`${num_1} Is The Same Value As ${str} But Not The Same Type`);
}
if (num_1 != str2 && num_1 !== str2) {
  console.log(`${num_1} Is Not The Same Value Or The Same Type As ${str2}`);
}
if (str == str2) {
  console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`);
}
// Output
// "{num1} Is The Same Value As {str}"
// "{num1} Is The Same Value As {str} But Not The Same Type"
// "{num1} Is Not The Same Value Or The Same Type As {str2}"
// "{str} Is The Same Type As {str2} But Not The Same Value"
// ---------------------------------------------------------------
let Num1 = 10;
let Num2 = 30;
let Num3 = "30";

if (Num3 > Num1 && Num3 !== Num2) {
  console.log(
    `${Num3} Is Larger Than ${Num1} And Type string Not The Same Type As number`
  );
}
if (Num3 > Num1 && Num3 == Num2) {
  console.log(
    `${Num3} Is Larger Than ${Num1} And Value Is The Same As ${Num2} And Type string Not The Same Type As number`
  );
}
if (Num3 != Num1 && Num3 !== Num2) {
  console.log(
    `${Num3} Value And Type Is Not The Same As ${Num3} And Type Is Not The Same As ${Num2}`
  );
}
// Needed Output
("30 Is Larger Than 10 And Type string Not The Same Type As number");
("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");
// ---------------------------------------------------------------
// Edit What You Want Here

// Edit What You Want Here

let num1 = 20;
let num2 = 5;
let num3 = 20;
let num4 = 56;

/*
            Do Not Edit Below This Line
            Needed Output
            True 7 Times
            */

// Condition 1

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if (num1 + num2 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if (num1 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if (num1 + num2 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}
