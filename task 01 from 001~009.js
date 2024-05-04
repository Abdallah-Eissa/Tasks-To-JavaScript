document.write("<h1>Elzero</h1>");
document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontSize = "80px";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.fontFamily = "arial";
document.querySelector("h1").style.fontWeight = "bold";

// ---------------------------------------------------------------
console.log(
  "%cElzero %cWeb %cSchool",
  "color: red; font-size: 40px",
  "color: green; font-size: 40px; font-wight:bold",
  "color: white; font-size: 40px; background:blue"
);

// ---------------------------------------------------------------
console.group("Group 1");
console.log("Massage one");
console.log("Massage two");
console.group("Child Group");
console.log("Massage one");
console.log("Massage two");
console.group("Grand Child Group");
console.log("Massage one");
console.log("Massage two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("Massage one");
console.log("Massage two");

// ---------------------------------------------------------------
console.table(["Elzero", "Ahmed", "Sameh", "Gamal", "Aya"]);

// ---------------------------------------------------------------
console.log("Iam In Console");
document.write("Iam In Page");

console.log("Iam In Console");
document.write("////\\\\\\\\Iam In Page");
