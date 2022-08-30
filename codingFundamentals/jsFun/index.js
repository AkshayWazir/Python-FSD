// ? what is a callback function ?

function a() {
  // ! require some data deom function b
  let bData;
  // !this getBData is a callback function
  function getBData(data) {
    bData = data;
  }

  b(getBData);
  return bData;
}

function b(callbackFunc) {
  // * this function is running independently
  let bSpecificData = { name: "Akshay" };
  callbackFunc(bSpecificData);
}

// console.log(a());

// * Object destructuring

let obj = { name: "Akshay", serial: 134, age: 4 };
let { name, serial, age } = obj;

// console.log(`Hello ${name} with serial ${serial}`);

let newObj = { empId: 1, empName: "Akshay", empJoin: "23-12-2011" };
let { empId, empName, empJoin } = newObj;
// console.log(`${empName} with ${empId} has joined at ${empJoin}`);

// ? this is the usecase for object destructuring
{
  /* <MyComponent
  value1={12}
  value2={"Akshay"}
  attr3={[1, 2, 3, 4, 5]}
  attr4={{ name: "Akshay", id: 23 }}
/>;

export default function MyComponent(props) {
  const { value1, value2, attr3, attr4 } = props;

  return <div></div>;
} */
}

// * what is 'map' in js

let arr = [1, 2, 3, 4, 5, 6];
function applyToArrayItem(item) {
  return item * 2 + 4 + 34;
}
// console.log(arr.map(applyToArrayItem));

// * printing a list of items in React
// export default function MyComponent(props) {
//   const { value1, value2, attr3, attr4 } = props;
//   return <div></div>;
// }

// ! whereever you want to print this list
// {
//   Array.map((item, index) => <MyComponent value1={intem.name} value2={index} />);
// }

// * filtering contents of an array
let array = [1, 2, 3, 4, 5, 6, 7, 8];
let array2 = [
  { name: "Akshay", id: 1 },
  { name: "Amit", id: 2 },
  { name: "Nikhil", id: 3 },
  { name: "Shiv", id: 4 },
  { name: "Vanshika", id: 5 },
];

function evenNumFilter(item) {
  return item % 2 === 0 ? true : false;
}

// let newArray = array.filter(evenNumFilter);
// console.log(array.filter(evenNumFilter));
function filterArray2Long(array) {
  let tempArray = [];
  for (const item of array) {
    if (item.id % 2 === 0) {
      tempArray.push(item);
    }
  }
  return tempArray;
}

let newArray2 = array2.filter((item) => item.id % 2 === 0);
console.log(newArray2);
