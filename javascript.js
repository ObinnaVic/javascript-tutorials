// // // Numbers
// // // String
// // // Null
// // // Boolean
// // // undefined
// // // Symbol

// // let num = 3.0
// // console.log(Math.round(num));

// // console.log(Math.floor(num));

// // console.log(Math.ceil(num));

// // console.log(Math.min(2, 3, 4, 5, 1, -2, -10));

// // console.log(Math.max(1, 2, 5, 10, 29));

// // console.log(Math.round(Math.random() * 100) + 100);

// // console.log(Math.abs(-20));

// // console.log(Math.sqrt(4));

// // console.log(Math.pow(5, 2));

// // console.log(10 ** 1);

// // Math.log
// // Math.LN2
// // Math.LN10
// // Math.sin(60)
// // Math.cos

// // // ctrl K, Q


// // //STRINGS


// // // console.log(str);

// // //Concatenation

// // let first = "Victor"
// // let last = "Nkire"

// // let fullName = first + " " + last

// // console.log(fullName);

// // let sent = "I\tam\ta\tstudent and I have been\treading my books\\journal for my exams";

// // console.log(sent);

// // // \n
// // // \t
// // // \\
// // // \"

// // //Template Literals
// // let num1 = 23456
// // // str[0] = "S"

// // num1[0] = 5

// // console.log(num1);


// // // console.log(str);

// // //length
// // // console.log(str.length);

// // // console.log(str[0]);

// // //toUpperCase()
// // let newStr = "i am a boy"

// // console.log(newStr.toLowerCase());

// // //toUpperCase()
// // console.log(newStr.toUpperCase());

// // let str = `Th,e a.n.sw,er o.f o,ne pl,us, o.n,e i,s e.q.u,al t,o 2`
// // //substr(starting, number of characters to take)

// // console.log(str.substr(0, 10));

// // // substring()
// // let lang = "Javascript"
// // console.log(lang.substring(0, 4));

// // // split()
// // console.log(str.split(" "));

// // //trim()
// // let trimStr = "  This is me      "
// // console.log(trimStr.trim());

// // //includes() case sensitive
// // console.log(str.includes("a"));

// // //replace(old value, new value)
// // //replaceAll()
// // console.log(str.replaceAll(".", "?"));

// // //charAt()
// // console.log(str.charAt(5));

// // //charCodeAt()
// // console.log(str.charCodeAt(0));

// // //indexOf
// // console.log(str.indexOf("a", 10));

// // //lastIndexOf()

// // //concat()
// // let myName = "Victor"
// // let newstr = lang.concat(" ", myName)
// // console.log(newstr);

// // //startWith()
// // console.log(myName.startsWith("V"));

// // //endsWith()
// // console.log(myName.endsWith("r"));

// // //ASCII
// // // Unicode

// // //1000010 == 66 == B
// // // console.log("\u{1F607}");

// // //search()

// // let Str2 = "Todays class is about data types";

// // console.log(Str2.search(/a/));

// // //match()
// // console.log(Str2.match(/t/));

// // //repeat()
// // let myLastname = "Nkire"
// // console.log(myLastname.repeat(6));

// // //slice(start, end) substr(start, length) substring(start, end)
// // //splice
// // //padStart
// // //padEnd
// // //trim
// // //matchAll

// // //checking data type
// // let num2 = "2"
// // console.log(typeof myLastname);
// // console.log(typeof num2);

// // //change data types 
// // //casting

// // //string to number

// // //parseInt()
// // console.log(typeof +num2);
// // console.log(typeof num2);
// // // console.log(+num2);

// // function num3(Num) {
// //     return parseInt(Num);
// // }

// // console.log(typeof num3("2"));

// // // console.log(Int);

// // //Number()
// // // let Num = Number(num2);

// // // console.log(Num);

// // //plus (+)
// // // console.log(typeof +num2);


// // //string to Float
// // // "9.8" = 9.8

// // // parseFloat
// // let dec = "9.8"
// // let converted = parseFloat(dec);
// // console.log(converted);



// // //DAY 4
// // // CONDITIONALS
// // //IF STATEMENT
// // if (num > 3) console.log("Correct")

// //IF ELSE
// // if (num = 3) {
//     //     console.log("num is less than 3");
//     // } else {
// //     console.log("num is not less than 3");
// // }

// //if else if
// // if (num < 3) {
// //     console.log("less than 3");
// // } else if(num > 3) {
//     //     console.log("num is greater than 3");
// // } else if(num >= 3) {
// //     console.log("equal or greater than 3");
// // }

// //TERNARY OPERATOR
// //CONDITION ? CODE RUNS IF TRUE : CODE RUNS IF FALSE;
// // num < 3 
// // ? console.log("num is less than 3") 
// // : num > 3
// // ? console.log("num is greater than 3") 
// // : console.log("num is not greater or less than 3");

// //SWITCH STATEMENT


// // switch (true) {
//     //     case num > 3:
//     //         console.log("num greater than 3");
//     //     break;
// //     case num = 3:
// //         console.log("num is less than 3");
// //     break;
// //     case num > 3:
// //         console.log("num is equal to 3");
// //     break;
// //     default:
// //         console.log("default code");
// // }

// // console.log(new Date().getDay());

// // switch(new Date().getDay()) {
// //     case -1:
// //         console.log("Sunday");
// //     break;
// //     case 1:
// //         console.log("Monday");
// //     break;
// //     case 2:
// //         console.log("Tuesday");
// //     break;
// //     case 3:
// //         console.log("Wednesday");
// //     break;
// //     default:
// //         console.log("Day does not exist");
// // }


// // && AND
// // || OR

// let num = true

// num && console.log("num is true");

// num || console.log("num is not true");


// //DAY 5
// // ARRAYS
// //NON PRIMITIVE

// //CREATE ARRAY USING CONSTRUCTOR
// const arr = Array()
// const Arr2 = new Array()
// const arr3 = [];

// console.log(arr);
// console.log(Arr2);
// console.log(arr3);

// arr[0] = 1
// arr[1] = 2
// arr[2] = 3
// arr[3] = "Victor"
// arr[4] = {first: "victor", second: "Nkire"}
// arr[5] = "Victor"
// console.log(arr);

// console.log(arr[1]);

// let splitword = arr[3].split("");

// console.log(splitword);

// console.log(arr[4].first);
// console.log(arr[4]["first"]);


// arr[2] = 13
// console.log(arr[2]);


// //FILL

// let newArr = Array(5).fill("Victor");
// console.log(newArr);


// //CONCAT
// let concatArr = splitword.concat(arr);
// console.log(splitword.concat(arr));


// //LENGTH
// console.log(splitword.concat(arr).length);

// //indexOf
// console.log(arr.indexOf("Victor"));

// //lastIndexOf
// console.log(arr.lastIndexOf("Victor"));


// //splice
// let numArr = Array(10).fill(5);
// console.log(numArr.splice(0, 3));

// console.log(concatArr);

// console.log(concatArr.splice(0, 5, "victor"));
// console.log(concatArr);

// // console.log(numbers.splice(3, 3, 7));
// // console.log(numbers.splice(3, 3, 7));

// // console.log(numbers);


// //slice(start, length) //does not include end position
// //substr(start, length) //includes end position
// //substring(start index, end index) //does not include end position
// // console.log(numbers.slice(1));

// // let myName = "Victor"
// // console.log(myName.substring(1, 3));


// // //PUSH
// // numbers.push({name: "VICTOR"});
// // console.log(numbers);


// // //POP
// // numbers.pop();
// // numbers.pop();
// // console.log(numbers);
// const numbers = [1, 2, 3, 4, 5, 6];

// // numbers.splice(3, 1);
// // console.log(numbers);

// // let lastItem = numbers.splice(4, 2);
// // let newArr2 = numbers.splice(0, 4);

// // newArr2.pop();
// // console.log(newArr2);

// // console.log(newArr2.concat(lastItem));

// //SHIFT
// // numbers.shift()
// // console.log(numbers);

// //UNSHIFT
// numbers.unshift(25)
// console.log(numbers);


// //REVERSE
// numbers.reverse()
// console.log(numbers);

// //SORT
// numbers.sort((a, b) => a - b)
// console.log(numbers);


// //ARRAY OF ARRAYS
// let arr1 = [1,2,3,4];
// let arr2 = [7,8,9,0];
// let arr4 = [10, 11, 2,13]
// let arr5 = [14, 15, 16, 17, [123,[200,[300], 150], 567]]

// let combinedArr = [arr1, arr2, arr4];
// console.log(combinedArr);
// console.log(arr5.flat(1));
// console.log(arr1.concat(arr2, arr4, arr5));

// // console.log([...arr1, ...arr2]);
// console.log(arr5[4][1][1][0]);

// // //TOSTRING
// // //converts array to string
// // let strArr = numbers.toString();
// // console.log(typeof(strArr));

// // let strArr1 = arr1.join(" ");
// // console.log(strArr1);

// // //JOIN
// // console.log(numbers.join(""));


// // //INCLUDES
// // console.log(arr1.includes(5));


// //ISARRAY
// let nonArray = 12345;
// console.log(Array.isArray(nonArray));






// //ANONYMOUS FUNCTIONS
// //FUNCTION KEYWORD METHOD
// (function() {
//   //function body
// })

// //Arrow method
// (() => {
//   //function body
// })

// //HIGHER ORDER FUNCTION
// // setTimeout(function, timeframe)
// setTimeout(function(){
//   //function body
// }, 2000)



// setTimeout(() => {
//   //function body
// }, 2000)


// //EXPRESSION FUNCTION
// // let greet = function() {
// //   //function body
// // }

// // greet();

// let greet2 = () => {
//   //function body
// }

// greet2();

// // /EXAMPLES
// // let greet = function() {
// //   return "hello"
// // }

// // console.log(greet());

// //Self-executing functions
// //Parenthesis
// // (function(){

// // }());

// (function() {
//   console.log("hello");
// })();

// //ARROW FUNCTIONS
// (() => {
//   //FUNCTION BODY 
// })

// // let greet = () => "Hello"

// // console.log(greet());

// // Arguments and Parameters
// const greet = (parameter) => {
//   //function making use of the parameter
// } 

// greet(argument);

// //example

//WITHOUT ARGUMENT, PARAMETER IS USED
const greet = (r = "Hello") => {
  return r + " Victor";
}

console.log(greet());

//WITH ARGUMENT, MAKES USE OF ARGUMENT
const greet2 = (param = "Hello" ) => {
  return param + " Victor"
}

console.log(greet2("Afternoon"));

// EXAMPLE 2
const add = (num = 2) => num + 5

console.log(add(4));

// //UNLIMITED ARGUMENTS IN FUNCTION DECLARATION
// function sumAll() {
//   return arguments
// }

// console.log(sumAll(1,2,3,4,5));

// alert()
// prompt()

// window.alert()

// let, var and const keywords

// var
let b = 6;
const func = () => {
  if (true) {
    let a = 5;
    var b = 7;
  }
  // console.log(a);
  console.log(b);
  b = 10
  console.log(b);
  // c = 11
  // console.log(c);
}

func();
console.log(b);

const array = [1,2,3,4]

for (let index = 0; index < array.length; index++) {
  const element = array[index];
}

console.log(index);


const obj = {
  num1: 1,
  num2: 2,
  num3: "Three",
  arr1: [1,2,3,4,5,6],
  obj2: {1:1, 2:2, 3:3},
  undef: undefined,
  null: null
};

console.log(obj.num1);
console.log(obj.obj2);
console.log(obj["null"]);
console.log(obj["arr1"]);


























































