// ------ DATES IN JAVASCRIPT ------------

let currentDate = new Date();
console.log(currentDate);
/* 2025-03-21T09:57:58.927Z
year-month-date 
 T: Time Starts--> beginning of time
 09: hours
 57: minutes
 58: seconds
 927: mili seconds
 Z ==> indicates time in Coordinated Universal Time (UTC) format 
 
-------------------------
NOTE:
By Default, new Date gives time in UTC - ISO format 
 i.e International organisation of Standartizarion (ISO);
-------------------------

*/

let date1 = new Date().toDateString();
console.log(date1); // Fri Mar 21 2025

let date2 = new Date().toLocaleDateString();
console.log("toLocaleDateString: ",date2);

let date3 = new Date().toString();
console.log("toString: ",date3); // takes time from terminal(mac), current time

let date4 = new Date().toLocaleString();
console.log("toLocaleString: ",date4);

// To get time in Your Time Zone
let date5 = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata"
});
/* 
"Asia/Kolkata" - India Standard Time (IST)
"Asia/Dubai" - Gulf Standard Time (GST)
"Asia/Tokyo" - Japan Standard Time (JST)
"Asia/Shanghai" - China Standard Time (CST)
"Asia/Singapore" - Singapore Time
"Asia/Jakarta" - Western Indonesia Time
"Asia/Tehran" - Iran Standard Time
*/

console.log(date5);

