// Method 1
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;
myFriends.length = num;
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
// Method 2
myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
num = 3;
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
//  ----------------------------------------------------------------
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.pop();
friends.shift();
console.log(friends); // ["Eman", "Osama"]
// ----------------------------------------------------------------
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [
  arrTwo.pop(),
  arrOne.pop(),
  arrOne.pop(),
  arrOne.pop(),
  arrTwo.pop(),
  arrTwo.pop(),
];

// Write One Single Line Of Code

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
// ----------------------------------------------------------------
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO
console.log(words.reverse()[0][0].slice(website.length).toUpperCase()); // ZERO
//  ----------------------------------------------------------------
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
console.log(haystack.indexOf(needle));
console.log(haystack.lastIndexOf(needle));
console.log(haystack.includes(needle));
// ----------------------------------------------------------------
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
let A = allArrs.concat(arr1, arr2).sort();
let B = A.slice(arr2.length);
let C = B.join("").toLowerCase();
console.log(C); // fxy
// ----------------------------------------------------------------
let Arr1 = ["A", "C", "X"];
let Arr2 = ["D", "E", "F", "Y"];
let AllArrs = [];
// Your Code Here
let a = Arr2.pop();
let b = Arr2.pop();
let c = Arr1.pop();
console.log(AllArrs.concat(b, c, a).join("")); // fxy
