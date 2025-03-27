///////-------------- STRING METHODS -----------
// concat Method

// let a = "HEllo";
// let b = "World";
// console.log(a.concat(b, "My", "World!"));

//.includes() 
// The includes Method checks if one String can be found inside another String
// gives boolean
// console.log(num.includes("3")); 
// let message = "JavaScript is Fun!Hello!";
// let check = message.includes("Bye");
// console.log(check);

// //.indexOf()
// let str = "Jacob";
// console.log(str.charAt(0));
// console.log(str.indexOf("J"));

// .lastIndexOf()
// let str = "ANNA";
// console.log(str.indexOf("A"));
// console.log(str.lastIndexOf("A"));

//.length()
// length starts from 1
// let str = "Programming";
// console.log(str.length);

//.padEnd()
//pads the current string to the end
// let str = "CODE";
// console.log(str.padEnd(10, "*")); // CODE******

//.padStart
//appends the given elements at the start to the current String
// let str = "CODE";
// console.log(str.padStart(8, "$"));

//.repeat()
// let str = "[JULIANA] ";
// console.log(str.repeat(2));
// console.log(str.repeat(2).concat("Hi")); // Adds at the last

//.replace()
// let str  = "HI WORLD!";
// console.log(str.replace("HI","HELLO"));
// console.log(str.replace("I","EY"));

// //.slice()
// let str = "Programming";
// //index    012345678910
// //length   1234567891011
// console.log(str.slice(1,6));

//.split()
//1. using split method you can convert a Strign to array
//2. pass the split value from where you want to split it
// let str = "HELLO OH OHIO ORANGES";
// console.log(str.split("O"));
// console.log(str.split(" "));

//.startsWith()
// //gives boolean
// let str = "Hello, JavaScript is Fun!";
// console.log(str.startsWith("Hello"));
// console.log(str.startsWith("hello")); 

//.endsWtih()
// let str = "Heelo, How are you?";
// console.log(str.endsWith("?"));

//.toLowerCase()
// let str = "Hello All I am Happy!";
// console.log(str.toLowerCase());

//.toUpperCase()
// let str = "Hello All I am Happy!";
// console.log(str.toUpperCase());

//.trim()
//removes spaces from start and end of the String
// let str = "       Hello, it such a good weather!      ";
// console.log(str);
// console.log(str.trim());

//.subString()
//same as Slice()
// let str = "JavaScript";
// console.log(str.substring(0,5));

// TO ADD A NEW LINE IN JS

// \n means new line in JS
// \v means vertical tab
// \t means horizontal tab
// console.log("Hello this is first line \nThis is the second!");
// console.log("Hello this is first line \vThis is the second!");
// console.log("Hello this is first line \tThis is the second!");

// STRING REPRESENTATION
// "", '', ``

// console.log("HELLO");
// console.log('Hello');
// console.log(`Hello`);

//.toString()
// let num = 20;
// console.log(num.toString(16)); 

//toString is used to perform Number System
//binary --> 2
//octal --> 8
//hexadecimal --> 16

// function numberSystem(value) {
//     return {
//         binary: value.toString(2),
//         octal: value.toString(8),
//         hexadecimal: value.toString(16),
//     }
// }
// console.log(numberSystem(10));

// function numberSystem(num) {
//     let myObject = {
//         binary: value.toString(2),
//         octal: value.toString(8),
//         hexadecimal: value.toString(16),
//     }
//     return myObject
// }

// let final = numberSystem(11);
// console.log(final);