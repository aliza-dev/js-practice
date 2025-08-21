// Primitive types

// 7 types: String,Number,Boolean, null,undefined,symbol,BigInt

const score = 100;
const scoreValue = 100.5;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId);

const bigNumber = 123456789012345678n;


// Reference (non-primitive)
// Array, Object, Function

const heros = [quaid-e-azam, allama-iqbal, fatima-jinnah];
let myObj = {
    name: "Aliza",
    age: 20,
}
const myFunction = function () {
    console.log("Hello World");
}

console.log(typeof bigNumber); 