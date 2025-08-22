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

/////////////////////////////////////////////////////////////////////////////////

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "Alizatariqdotcom";

let anotherName = myYoutubeName;
anotherName = "chaiaurcode";

console.log(anotherName);   // chaiaurcode
console.log(myYoutubeName); // Alizatariqdotcom

let userOne = {
    email: "user@google.com",
    upi: "user@ybi"
}

let userTwo = userOne;

userTwo.email = "aliza@google.coo"; //  fixed

console.log(userTwo); // { email: 'aliza@google.coo', upi: 'user@ybi' }
console.log(userOne); // { email: 'aliza@google.coo', upi: 'user@ybi' }






// Stack : jo bhi variable declare kia ho iska copy milta hai 
// Heap : iska reference milta hai(jo bhi change karein ghy original value ma change ho ga)