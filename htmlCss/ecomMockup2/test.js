// alert("Hello World from js file");
//  alert("Hello World from js file");

let array = [];
array.push(10);
array.push("Akshay");
array.push({ name: "Akshay" });
array.push([1, 2, 3]);
array.push(1.45);
console.log(array);

for (let i = 0; i < 10; i++) {
  console.log(i);
}

array.forEach((item) => console.log(item));
// * create Object
let tempObj = {};
tempObj["Hello my key is this"] = 2;
tempObj[45] = 67;
tempObj[[1, 2, 3]] = 67;
console.log(tempObj);
console.log(tempObj["Hello my key is this"]);

// let obj = {};
// let obj = [];

// * Declare two variable swith admin and name
// * asign "John" to name and name to admin
// * alert the value of admin

// * Print the diamind using for loop

let spaces = 10;
for (let i = 0; i < spaces; i++) {
  console.log(" ".repeat(spaces) + " * ".repeat(i + 1));
  spaces--;
}

let num = 10;

for (let i = 0; i < num; i++) {
  let line = "";
  for (let space = 0; space < num - i; space++) {
    line = line + " ";
  }
  for (let star = 0; star < i + 1; star++) {
    line = line + " * ";
  }
  console.log(line);
}

function giveMultiples(sal, type) {
  if (type === "EMP1") {
    return sal * 1.3;
  } else if (type === "EMP2") {
    return sal * 1.7;
  } else if (type === "EMP3") {
    return sal * 1.9;
  } else {
    return sal * 2;
  }
}

function getMultipleSwitch(sal, type) {
  switch (type) {
    case "EMP1":
      return sal * 1.3;
    case "EMP2":
      return sal * 1.7;
    case "EMP3":
      return sal * 1.9;
    default:
      return sal * 2;
  }
}

// * Python
//  num = 2
//  result = "even" if num % 2 == 0 else "odd"

// * JS
num = 2;
let result = num % 2 === 0 ? "even" : "odd";

// ? problem 1
// * Given an array of integers "num" and an integer "target"
// * return indices of the two numbers such that they add up to target

// def functionName(param1, param2):
//     something = 10

function functionName(param1, param2) {
  something = 10;
}

// ? Problem 2
// * Given a integer return true if its a palindrome number
// * 123321 , 121, 1234321
// ! 12345, 23445

// ? Problem 3
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, 2 is written as II in Roman numeral, just two ones added together. 
// 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, 
// the numeral for four is not IIII. Instead, the number four is written as IV. Because 
// the one is before the five we subtract it making four. The same principle applies to 
// the number nine, which is written as IX. There are six instances where subtraction is used:

//     I can be placed before V (5) and X (10) to make 4 and 9. 
//     X can be placed before L (50) and C (100) to make 40 and 90. 
//     C can be placed before D (500) and M (1000) to make 400 and 900.

// Given a roman numeral, convert it to an integer.


function twoSum(params) {
  // content
}

function palindrome(params) {
  // content
}
