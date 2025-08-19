// Variables in JavaScript
// Using let and const for variable declaration
let accountId = 1234567890;
let accountEmail = "alizait123@gmail.com";
let accountPassword = "123456";
let accountCity = "Faisalabad";
let accountState;

accountId = 9876543210; 
accountEmail = "aliza@gmail.com";
accountPassword = "123";
accountCity = "Lahore";

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log("Account ID:", accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
