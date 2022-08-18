// * ways to create a empyt object
let user = new Object();
let user1 = {};

// * here we show  how to define object with key value pairs
let user2 = {
  name: "John",
  age: 32,
};

// * to add a new property to this object
user2.department = "IT";
user2["post"] = "Manager";

// * if you want to delete a property from object
delete user2.age;

// * we can use multiple word as a key for our property
user2["Hello name is"] = 345.567;
let user3 = {
  name: "Biswas",
  age: 22,
  "Depart ment Work": "IT",
};

// * using multiple word property
console.log(user3["Depart ment Work"]);

// * deleting multiple word property
delete user3["Depart ment Work"];

let user4 = {
  name: "Akshay",
  age: 45,
};

let key = prompt("Enter the Key", "name");
console.log("This is key : ", key);
console.log("This is key usage : ", user4[key]);

// ! this will not work with dot notation
console.log(user4.key); // ? undefined

// * this is object creation function
function createUser(name, age) {
  return { name: name, age: age };
}

function createUser1(name, age) {
  return { age, name };
}

//! cannot use predefined js keys as an object key
let user5 = {
  for: "Something",
};

// * to  check if key exists inside of object or not
let user6 = createUser("Akshay", 78);
if ("name" in user6) {
  console.log("name is present in user6");
}

// * iterate over all the keys of a single object
for (let key in createUser1("Akshay", 90)) {
  console.log("Key is : ", key);
}

// ! task 1
// ? create an empy Object : user
// ? add the property name with value "John"
// ? add the property surname with the value "Smith"
// ? change the value of "name" to "Pete"
// ? remove the property "name"

// ! Task 2
// ? write a function "isEmpty(obj)" which returns "true" if the object has no properties otherwise "false"
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

const isEmpty2 = (obj) => Object.keys(obj).length === 0;

// ! Task 3
// ? we have an object with each property storing values of user salary using key value pair with key as user name and value as salary
// ? make a function to return the sum of the salaries of all the user

const salSum = (obj) => {
  let s = 0;
  for (let val of Object.values(obj)) {
    s += val;
  }
  return s;
};

// ! Task 4
// ? given a object with properties having mix of string and number. change the numeric property value to 5 times its original value
function changeVals(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 5;
    }
  }
}

// * copy primitive data type by value
let val1 = "Akshay";
let val2 = val1;

// * copy data types by reference
let obj1 = { name: "Akshay" };
let obj2 = obj1;

obj1.name = "Aditya";
console.log(obj2);

// * comparison by reference
let a = {};
let b = a;

console.log("a and b are Equal ? ", a == b); // * compares two variables by reference
console.log(a === b); // * this compares two variables by value

let c = {};
let d = {};
console.log(c == d);

// * Now question is how to copy this object
// ? simple cloning
let obj3 = { name: "John", age: 12 };
let obj4 = Object.assign({}, obj3);
console.log("obj3 and obj4 are equal ? :", obj3 == obj4);
console.log(obj3);
console.log(obj4);

let nesObj = {
  name: "John",
  age: 45,
  job: {
    title: "Analyst",
    salary: 200,
  },
};
console.log(Object.assign({}, nesObj));

// * Function
function functionName(params) {
  // * body
}

const var1 = (param, param1) => {
  // body
};

var1(var1, 12);

// * you have been given two sorted arrays "a" and "b"
// * you have to merge these two sorted arrays into one sorted array
function mergeSortedArray(arr1, arr2) {
  return [...arr1, ...arr2].sort();
}

let ob = { name: "Arjun", age: 78 };
let ob1 = { add: "asomss", value: 878 };
console.log({ ...ob, ...ob1 });

console.log(mergeSortedArray([3, 5, 7, 9], [8, 6, 4, 1]));

// ? Find the factorial of a number
function factorial(num) {
  return num === 1 ? num : num * factorial(num - 1);
}

console.log(factorial(4));

// ? find number inside of a sorted array using binary search
let arr = [1, 2, 3, 4, 5, 6, 7, 8],
  target = 3;

function binarySearch(start, end, target) {
  let mid = parseInt((start + end) / 2);
  if (start === end) {
    return arr[start] === target ? start : -1;
  } else if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] <= target) {
    return binarySearch(mid + 1, end, target);
  } else if (arr[mid] > target) {
    return binarySearch(start, mid, target);
  } else {
    return -1;
  }
}

const searchBinary = (arr, target) => binarySearch(arr.length > 0 ? 0 : -1, arr.length - 1, target);

console.log(searchBinary(arr, 6));
