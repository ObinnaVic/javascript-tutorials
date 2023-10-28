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
// const greet = (r = "Hello") => {
//   return r + " Victor";
// }

// console.log(greet());

//WITH ARGUMENT, MAKES USE OF ARGUMENT
// const greet2 = (param = "Hello" ) => {
//   return param + " Victor"
// }

// console.log(greet2("Afternoon"));

// // EXAMPLE 2
// const add = (num = 2) => num + 5

// console.log(add(4));

// // //UNLIMITED ARGUMENTS IN FUNCTION DECLARATION
// // function sumAll() {
// //   return arguments
// // }

// // console.log(sumAll(1,2,3,4,5));

// // alert()
// // prompt()

// // window.alert()

// // let, var and const keywords

// // var
// let b = 6;
// const func = () => {
//   if (true) {
//     let a = 5;
//     var b = 7;
//   }
//   // console.log(a);
//   console.log(b);
//   b = 10
//   console.log(b);
//   // c = 11
//   // console.log(c);
// }

// func();
// console.log(b);

// const array = [1,2,3,4]

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
// }

// console.log(index);


// const obj = {
//   num1: 1,
//   num2: 2,
//   num3: "Three",
//   arr1: [1,2,3,4,5,6],
//   obj2: {
//     1:1, 
//     2:2, 
//     3:3,
//     func2: function() {
//       return "Nested Function"
//     }
//   },
//   undef: undefined,
//   null: null,
//   func: function() {
//     return "Hello"
//   }
// };

//ACCESS AN ARRAY VALUE FROM AN OBJECT
// console.log(obj.arr1[obj.arr1.length - 1]);

// // obj.obj2.func2 = function() {
// //   return "Nested function"
// // }

// obj["obj2"]["func3"] = function() {
//   return "Nested 3"
// }

// console.log(obj.obj2.func2());

// console.log(obj.num1);
// // console.log(obj.obj2);
// console.log(obj["null"]);
// // console.log(obj["arr1"]);


// //A function in an object is Method
// // obj.func = function() {
// //   return "Hello"
// // }

// console.log(obj.func());
// console.log(obj);


// console.log(obj.arr1.at(-1));

// let result;
// for (let i = 0; i <= obj.arr1.length; i++) {
// //   if (i === 6) {
// //     result = i
// //   }
// // }
// // console.log(result);


// // console.log(obj["arr1"].indexOf(6));
// const obj = {
//   num1: 1,
//   num2: 2,
//   num3: "Three",
//   arr1: [1, 2, 3, 4, "5", 6],
//   obj2: {
//     1: 1,
//     2: 2,
//     3: 3,
//     func2: function () {
//       return "Nested Function";
//     },
//     testObj: {one:1, two:2, three:3}
//   },
//   undef: undefined,
//   null: null,
//   func: function () {
//     return `${this.num1} is not equal to ${this.num2}`;
//   },
//   // func4: () => {
//   //   return alert("Hello")
//   // }
// };


// //this
// //used to access properties of an object inside a function in the object

// console.log(obj.func());
// // console.log(obj.func4());

// obj.getNum1 = function () {
//   return this.num1
// }

// //OBJECT METHODS
// //OBJECT.ASSIGN : SHALLOW CLONING
// //object.assign(newObj, originalOBJ)

// const clone = Object.assign({}, obj)

// clone.obj2.testObj.two = 10
// console.log(clone);
// console.log(obj);

// //STRUCTUREDCLONE
// //USED TO CLONE AN OBJECT DEEPLY
// // const clone2 = structuredClone(obj);
// // clone.obj2.testObj.one = 20;
// // console.log(clone2);
// // console.log(obj);

// //OBJECT.KEYS

// const myKeys = Object.keys(obj)
// console.log(myKeys);

// //OBJECT.VALUES
// const value = Object.values(obj)
// console.log(value);

// //OBJECT.ENTRIES
// const entries = Object.entries(obj);
// console.log(entries);

// for (const [keys, values] of Object.entries(obj)) {
//   console.log(`${keys} are the keys of our ${values}`);
// }

// //HASOWNPROPERTY
// console.log(obj.hasOwnProperty("num1"));



//HIGHER ORDER FUNCTIONS
// const callback = (n) => {
//   return n * 2
// }

// const multiply = (callback, m) => {
//   return callback + m
// }

// console.log(multiply(callback(5), 10));

// setInterval(() => {
//  console.log("Hello")
// }, 2000)//2s 2000ms



//RETURNING FUNCTIONS
// const higherOrder = (n) => {
//   const doSomething = (m) => {
//     const doWhatEver = (t) => {
//       return 2 * n + 3 * m + t;
//     };
//     return doWhatEver;
//   };
//   return doSomething;
// };
// console.log(higherOrder(2)(3)(10));

// const outmostFunc = (n) => {
//   const innerFunc = (m) => {
//     const innerMost = (t) => {
//       console.log(2 * n + 3 * m + t);
//     }
//     console.log(innerMost())
//   }
//   console.log(innerFunc());
// }

//Sorting
//Sort() : Works best with arrays with string values
//Sort((a, b) => a-b) If you have number values in your array

// const arr = ["Victor", "Emma", "Goodness", "Adam"]

// arr.sort();

// console.log(arr); //["Adam", "Emma", "Goodness", "Victor"]

// const num = [1, 4, 6, 7, 8, 9, 2]

// //toSorted
// const newNum = [...num]

// console.log(newNum);

// newNum.sort((a, b) => a - b)
// console.log(newNum);
// console.log(num);

// //arr.sort((a, b) => a.localeCompare(b). "de")

// const nonUnique = [1, 2, 1, 4, 4, 5, 5, 6, 7, 1]

// const unique = new Set(nonUnique);

// console.log(unique);

// for (const i of unique) {
//     console.log(i)
// }

// //ADDING VALUES TO THE SET (.add)

// unique.add(10);
// console.log(unique);

// //Deleting values from the set (.delete)

// unique.delete(2);

// console.log(unique);

// //Checking legth of the set (.size)

// console.log(unique.size);

//Clearing the set (.clear);

// unique.clear()

// console.log(unique);


// let obj1 = {one: 1, two: 2, three: 3}
// let obj2 = {one: 1, two: 2, three: 3}

// unique.add(obj1);
// unique.add(obj2);

// console.log(unique);

// const unique2 = new Set

// console.log(unique2);
// unique2.add(1)

// console.log(unique2);

//Checking for items present in the array (.has)

// console.log(unique2.has(2));

// let a = [1, 2, 3, 4, 5, 6 ,7];
// let b = [3, 4, 5, 6, 7, 8, 9];
// //Union of Set
// let c = [...a, ...b]
// console.log(c);
// let d = new Set(c)
// console.log(d);

//Intersect of Set
// let c = a.filter((i) => b.includes(i));
// console.log(c);

// let c = new Set(b)
// let d = a.filter((i) => c.has(i));
// console.log(d);

//Difference of Set

// let c = new Set(b);
// console.log(c);
// let d = a.filter((i) => !c.has(i))
// console.log(d);

// //MAPPING (Works with Key/Value pairs);
// // const val = 1;

// // console.log(val);

// const ourMap = new Map();
// const obj = {name: "Victor"}
// const obj2 ={name: "Emma"}
// const newArr = [1, 4, 5, 6]

// //Adding values to the map (.set);
// ourMap.set(obj2, newArr)
// ourMap.set(obj, "object")
// ourMap.set("first", 1);
// console.log(ourMap);

// //Getting value from a map (.get);
// console.log(ourMap.get(obj2));
// console.log(ourMap.get("first"));

// //Checking the length of a map(.size)

// console.log(ourMap.size);

// //Checking if a key exists in the map (.has)

// console.log(ourMap.has("first"));

// const arr2 = [2,3,4,5,6,7]


//CONSOLE OBJECT METHODS
//1. console
//2. document.write
//3. document.getElementById

//CONSOLE.LOG
// console.log("Hello")

// //%d : Substitution of digits
// console.log("%d days of Javascript", 30);

// //%s: substitute strings
// console.log("30 %s of Javscript", "days");

// //%c : styling consoled texts
// console.log("%c 30 days of JAVASCRIPT %c", "color: yellow");


//REGULAR EXPRESSIONS (REGEXP)
// (/.../) 

//new RegExp(pattern, flag);

// //Without a flag
// let text = "Victor"
// const regEx = new RegExp(text);

// console.log(regEx);

// //With a flag
// let text2 = "Victor";
// let flag = "gi";
// const regEx2 = new RegExp(text2, flag);
// console.log(regEx2);


// //FLAGS
// // g (Global flag)
// let sentence = "This is a javascript class";
//match();

// let pattern = /s/g;
// let result = sentence.match(pattern)
// console.log(result);

//i (case insensitive);
// let pattern = /t/gi
// let result = sentence.match(pattern);
// console.log(result);

// m (multiline)
// \n (signifies new line)
// let mulitilineSent = "This is a Javascript\nclass and it holds\nevery saturday and sunday";

// //^(start) and $(end)
// let pattern = /Javascript$/m
// let result = mulitilineSent.match(pattern);
// console.log(result);

// let pattern2 = /^class/m
// let result2 = mulitilineSent.match(pattern2);
// console.log(result2); 


//s (Dot-All) Match all words or characters except the new line character (\n); 
// let text = "Hello\nWorld";
// let pattern = /Hello.World/s
// let result = text.match(pattern);
// console.log(result);


//y (sticky)
// const text = "ababab";
// let pattern = /ab/y
// let result = text.match(pattern);
// console.log(result);
// console.log(result);
// console.log(result);


//RegEx Object Methods

//exec() // execution (pattern.exec(text))
// let text = "This is a javascript class";
// let pattern = /this/gi
// //match = text.match(pattern);
// let result = pattern.exec(text);
// console.log(result);

//match() 
// const text = "I love Javascript";
// const pattern = /love/;
// let result = text.match(pattern);
// console.log(result);

//matchAll();
// const text = "I love Javascript love love love";
// const pattern = /love/g;
// let result = text.matchAll(pattern);
// let arr = [...result];
// let id = [];
// for (let i = 0; i < arr.length; i++) {
//      id.push(arr[i]) 
// }

// console.log(id);
// console.log([...result]);

//test()
// const text = "I love Javascript";
// const pattern = /love/;
// let result = pattern.test(text);
// console.log(result);


//search() If match is found, it returns the index, else it returns -1
// const text = "I love Javascript";
// const pattern = /Javascript/;
// const result = text.search(pattern);
// console.log(result);

//replace() take two parameter, (pattern, substitute word)
// const text = "I love Javascript htfdssf";
// const pattern = /Javascript/;
// const result = text.replace(pattern, () => {
//     let newText = text.match("Javascript");
//     return newText[0].toUpperCase();
// });
// console.log(result);


//Special Characters
// ^ = start with
// let text = "I love Javascript";
// let pattern = /^I/;
// let result = text.match(pattern)
// console.log(result);


//$ = Ends with
// let text = "I love Javascript";
// let pattern = /Javascript$/;
// let result = text.match(pattern)
// console.log(result);

//[] = set of characters
// let text = "I love Javascript8";
// let pattern = /[A-Za-z0-9]/g;
// let result = text.match(pattern)
// console.log(result);


//[^] = means what is not//negates
// let text = "I love Javascript8";
// let pattern = /[^abc]/g;
// let result = text.match(pattern)
// console.log(result);

// \d = matches digits in a string
// let text = "I love Javascript8789756382";
// let pattern = /\d/g;
// let result = text.match(pattern)
// console.log(result);

// \D = matches everything that is not a digit
// let text = "I love Javascript8789756382";
// let pattern = /\D/g;
// let result = text.match(pattern)
// console.log(result);

// \b = matches boundaries, that is characters are beside or inbetween spaces, punctuations, and end or start of the string
// let text = "I loveJavascript 8789756382";
// let pattern = /\b2/g;
// let result = text.match(pattern)
// console.log(result);

// \B = matches charaacters that beside or between words or alphabets or other characters 
// let text = "Ilove Javascriptlove 8789756382";
// let pattern = /\Blove/g;
// let result = text.match(pattern)
// console.log(result);


// {3} = exactly 3 characters
// let text = "I to lov Javascript love 878 ... 9756382";
// let pattern = /\w{3}/g;
// let result = text.match(pattern);
// console.log(result);


// {3,} = atleast 3 characters
// let text = "I to lov Javascript love 878 9756382";
// let pattern = /\b\w{3,}\b/g;
// let result = text.match(pattern);
// console.log(result);

// {3,9} = characters or words from 3 to 9
// let text = "I to lov Javascript love 878 9756382";
// let pattern = /\b\w{3,5}\b/g;
// let result = text.match(pattern);
// console.log(result);

// | = OR or Either
// let text = "I to lov python love 878 9756382";
// let pattern = /[Jj]avascript|[Pp]ython|love/g;
// let result = text.match(pattern);
// console.log(result);

// ? = zero or one time
// let text = "to Javascriipt 878 9756382";
// let pattern = /[I]?/g;
// let result = text.match(pattern);
// console.log(result);


// + = one or more times
const arr = ["Victor", "Sam", "Emma", "Henry", "Innocent"];
let result = [];
for (const i of arr) {
    let reg = i.match(/[Ii]+/g)
    if (reg) {
        result.push(i);
    }
}

console.log(result);

// * = zero or more times


// . = matches any character except new line "\n" 

// \w = means alphabets, underscores

// \s = adds spaces to the output;
// let text = "I to lov Javascript love 878 9756382";
// let pattern = /[I]+\s/g;
// let result = text.match(pattern);
// console.log(result);


//ERROR HANDLING
//try and catch
//try: Wrap a code block that has a possibility of returning an error.
//catch: Catches and returns any error found in the code block wrapped in the try block.

// try { //contains code to test
//     let lastName = "Nkire";
//     let fullName = `${firstName} ${lastName}`
// } catch (error) { //contains errors
//     //error: error name and error message
//     console.log(error.name);    
// } finally { // contains codes that runs whether there is an error or not.
//     // console.log(fullName);
// }


//throw
// try {
//     let lastName = "Nkire";
//     let fullName = `${firstName} ${lastName}`
//     if (firstName === undefined) {
//         throw new Error("Please enter a first name")
//     }
//     return fullName;
// } catch (error) {
//     console.log(error.message);
// }

//Error types

//Reference Error: For undeclared or Undefined errors
//Syntax Error: * x
// Type Error: string when suppose to use number;
  


// CLASSES

//Class Expressions

// const Expression = class {
//     //Our code
// }

// const expression1 = new Expression();
// const expression2 = new Expression();
// const expression3 = new Expression();


//Class Declaration

// class Declaration {
//     //Code
// }

// const declaration1 = new Declaration();
// const declaration2 = new Declaration();
// const declaration3 = new Declaration();
// const declaration4 = new Declaration();

// console.log(new Date());


// const obj= {
//     func: function() {
//         return "Hello";
//     }
// }

// console.log(obj.func());

// CONSTRUCTOR 

// class Person {
//     constructor(firstName, lastName) {
//         console.log(this);
//         this.firstName = firstName;
//         this.lastName = lastName
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// const person = new Person("Victor", "Nkire");

// console.log(person.getFullName());

// const func = (name = "Victor") => {
//     return name;
// }

// console.log(func());

//DEFAULT PARAMETER VALUES

// class Person {
//     value;
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.value = age;
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName} ${this.value}`
//     }

//     setAge(value) {
//         this.value = value;
//     }
// }

// const person = new Person("Victor", "Nkire", 50)
// const person2 = new Person("Emma", "Innocent", 100)
// const person3 = new Person("Sam", "Willow", 12);

// console.log(person.getFullName());
// console.log(person2.getFullName());

// person.value = 30;
// console.log(person.getFullName());

// person.setAge(80)
// console.log(person.getFullName());




//PRIVATE FIELD (#)

// class Person {
//     #value;

//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.#value = age;
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName} ${this.#value}`
//     }

//     setAge(value) {
//         this.#value = value;
//     }

//     #getValuePrivate() {
//         return this.#value;
//     }

//     getValue() {
//         return this.#getValuePrivate();
//     }
// }

// const person = new Person("Victor", "Nkire", 80);

// // person.#value = 30;
// // console.log(person.getFullName());

// person.setAge(50);
// console.log(person.getFullName());
// console.log(person.getValue());
// console.log(person.#getValuePrivate());

// "in" : Used to check values of a different instance of the same class.

// class Color {
//     #value;
//     constructor(r, g, b) {
//         this.#value = [r, g, b];
//     }

//     redChange(diffColor) {
//         if(!(#value in diffColor)) {
//             return;
//         }
//         return this.#value[0] = diffColor.#value[0];
//     }

//     getValues() {
//         return this.#value;
//     }

// }

// const color = new Color(30, 20, 70);
// const diffColor = new Color(10, 15, 22);

// console.log(color.redChange(diffColor));

// console.log(color.getValues());


//GETTERS: A method to return/get values in a class. This makes a method read-only;

// class Color {
//     #value;
//     constructor(r, g, b) {
//         this.#value = [r, g, b];
//     }

//     redChange(diffColor) {
//         if(!(#value in diffColor)) {
//             return;
//         }
//         return this.#value[0] = diffColor.#value[0];
//     }

//     get getValues() {
//         return this.#value;
//     }

// }

// const color = new Color(20, 30, 40);

// console.log(color.getValues);



//SETTERS: Method to set or modify values in your class. It is read and write enabled.

// class Color {
//     value;
//     constructor(r, g, b) {
//         this.value = [r, g, b];
//     }

//     redChange(diffColor) {
//         if(!(value in diffColor)) {
//             return;
//         }
//         return this.value[0] = diffColor.value[0];
//     }

//     get getValues() {
//         return this.value;
//     }

//     set modifyValue(num) {
//         this.value = this.value.push(num);
//     }

// }

// const color = new Color(20, 30, 40);

// // color.modifyValue(20);

// console.log(color.value);


//STATIC METHOD

// class Color {
//     value;
//     constructor() {
//         this.value = [20, 30, 40];
//     }

//     redChange(diffColor) {
//         if(!(value in diffColor)) {
//             return;
//         }
//         return this.value[0] = diffColor.value[0];
//     }

//     getValues() {
//         return this.value;
//     }

//     set modifyValue(num) {
//         this.value = this.value.push(num);
//     }

//     static addValues() {
//         let result = 0;
//         let value = [20, 30, 40];
//         for (const i of value) {
//             result += i;
//         }
//         return result;
//     }


// }

// const color = new Color(30, 20, 40);
// const diffColor = new Color(50, 60, 70);
// console.log(typeof color.getValues());

// console.log(Color.addValues());


//Inheritance
class Color {
    value;
    constructor() {
        this.value = [20, 30, 40];
    }

    redChange(diffColor) {
        if(!(value in diffColor)) {
            return;
        }
        return this.value[0] = diffColor.value[0];
    }

    getValues() {
        return this.value;
    }

    set modifyValue(num) {
        this.value = this.value.push(num);
    }

    static addValues() {
        let result = 0;
        let value = [20, 30, 40];
        for (const i of value) {
            result += i;
        }
        return result;
    }


}

class ColorTwo extends Color {
    constructor() {
        super();
        this.valuesArr2 = [40, 20, 10];
    }
}

const colorTwo = new ColorTwo;

console.log(colorTwo.value);
console.log(colorTwo.getValues());


class Person {
    constructor(firstName){
        this.firstName = firstName;
    }

    set firstname(name) {
        this.firstName = name;
    }
}

const person = new Person("Victor");

person.firstname = "Sam";

console.log(person.firstName);



class ClassWithGetSet {
    #msg = "hello world";
    get msg() {
      return this.#msg;
    }
    set msg(x) {
      this.#msg = `hello ${x}`;
    }
}
  
  const instance = new ClassWithGetSet();
  console.log(instance.msg); // "hello world"
  
  instance.msg = "cake";
  console.log(instance.msg); // "hello cake"


  































