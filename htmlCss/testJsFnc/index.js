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

// ! Task 3
// ? we have an object with each property storing values of user salary using key value pair with key as user name and value as salary
// ? make a function to return the sum of the salaries of all the user

// ! Task 4
// ? given a object with properties having mix of string and number. change the numeric property value to 5 times its original value
