//Type Conversion
// In programming language , type conversion is the process of converting one datatype to another data type
//example : Number to String
//There are two types of conversions in Java Script
//1. Implicit Conversion --> Automatic Conversion
//2. Explicit Conversion --> Manual used in Built-in Data Types

//Implicit Conversion 
//1. AnyData to String (using String Operator +)
// let str = "2";
// str + " ";
// console.log(str, typeof str);

// let data1 = 2 + "";
// console.log(data1, typeof data1);

// let data = 2 ;
// // data + ""; // wrong --> redeclaring needed
// console.log(data, typeof data);

// let bool = true;
// console.log(bool, typeof bool);

// let nulls = null + "";
// console.log(nulls, typeof nulls);

// let undefineds = undefined + "";
// console.log(undefineds, typeof undefineds);

// let cc = 2 + "5";
//  // Concatination
// console.log(cc, typeof cc); //25
//Anything with string add's up to it which is concat


//NOTE: + is the only operator that does not do arithmetic operarions on String
//It is used for concatination


//Anything to Number


// let strNum = "Ishwari" - "20"; //NaN
// //Not a Number
// console.log(strNum, typeof strNum);

// let num = "20" - "" ;
// console.log(num, typeof num);

// let str = "hello" - "Ishwari";
// console.log(str); // NaN

// //Boolean to Number

// // True --> 1
// //false --> 0

// let a1 = true + 4;
// console.log(a1);

// let b1 = false + 5;
// console.log(b1);

//Undefined to Any Data Type

// let d1 = 5 + null;
// console.log(d1);

// Original Value  	Converted to Number Converted to String Converted to Boolean
// false	               0	            "false"	                false	
// true	                   1	              "true"	            true	
// 0                        0	                "0"	                false	
// 1                      	1	               "1"                 	true	
// "0"                  	0                 	"0"             	true	
// "000"                  	0	                "000"	            true	
// "1"	                     1	                  "1"	            true
// NaN                   	NaN	                 "NaN"            	false	
// Infinity               	Infinity           	"Infinity"      	true	
// -Infinity            	-Infinity          "-Infinity"	        true	
// ""                    	0	                 ""	                false	
// "20"                   	20	                   "20"           	true	
// "twenty"                	NaN	                 "twenty"	        true	
// [ ]                     	0	                  ""	            true	
// [20]                    	20              	"20"            	true	
// [10,20]               	NaN              	"10,20"         	true	
// ["twenty"]           	NaN	               "twenty"         	true	
// ["ten","twenty"]	        NaN	               "ten,twenty"	        true	
// function(){}	            NaN            	"function(){}"       	true	
// { }                   	NaN	              "[object Object]"	    true	
// null (empty)              0	                "null"	            false	
// undefined (keyword)    	NaN              	"undefined"	        false


//Explicit Conversion
/*
1. Using number methods 
2.Using string methods
3. Using Boolean() methods

*/

// let strNumber = "20" ;
// console.log(strNumber);

// let finalNumber = Number(strNumber);
// console.log(finalNumber, typeof finalNumber);

// let strBoolean = "true"; //1
// let strBool = "false"; //0

// let convert1 = Number(strBoolean);
// let convert2 = Number(strBool);
// console.log(convert1,convert2);
// console.log(typeof convert1,typeof convert2);


//----------------------------------------------------------------

// let result;

// result = String(100);
// console.log(result);

// result = String(null);
// console.log(result);

// result = String(NaN);
// console.log(result);

// result = String(undefined);
// console.log(result);

// result = String("Hello");
// console.log(result);

// result = String(true);
// console.log(result);

// console.log(NaN);
// console.log(null);
// console.log(undefined);
// console.log("Hello");


//----------------------------------------------------------------

// let convert1 = Boolean(0);
// console.log(convert1);

// convert1 = Boolean("");
// console.log(convert1);

// convert1 = Boolean(null);
// console.log(convert1);

// convert1 = Boolean(undefined);
// console.log(convert1);

// convert1 = Boolean(NaN);
// console.log(convert1);

// convert1 = Boolean(false);
// console.log(convert1);

// convert1 = Boolean(100);
// console.log(convert1);

// convert1 = Boolean("Hello");
// console.log(convert1);

// convert1 = Boolean("-1");
//console.log(convert1);

// convert1 = Boolean(true);
// console.log(convert1);

//----------------------------------------------------------------

//All Truthy Values

/*
1. true -Boolean true value
2. any number - non-zero number
3. any string - non-empty string (even spaces and  newlines)
4. any object - non-empty object
5. any function - non-empty function
*/

//All Falsy Values

/*
1. false - Boolean false value
2. 0 - Number 0
3. "" - empty string
4. null - null value
5. undefined - undefined value
6. NaN - Not a Number value
*/



