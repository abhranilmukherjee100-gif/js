// PRIMITIVE DATA TYPES

// 7 Types : String, Number, Boolean, Null, Undefined, Symbol, BigInt


const score = 100;
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId) // false

const bigNumber = 34567890123456789012345678901234567890n


//REFERENCE DATA TYPES(NON-PRIMITIVE DATA TYPES)

// 3 Types : Object, Array, Functions

const heros = ['shaktiman', 'naagraj', 'doga', 'batman']
let myObj = {
    name: 'Bruce Wayne',
    age: 30,
}



const myFunction = function(){
    console.log('Hello World')
}

console.log(typeof bigNumber) //bigint

//JavaScript is a dynamically typed language










//++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive), Heap(Non-Primitive)

let myYouTubeName = "hiteshchoudharydotcom"

let anothername = myYouTubeName
anothername = "chaiaurcode"

console.log(myYouTubeName)//hiteshchoudharydotcom 
console.log(anothername)//chaiaurcode

let userOne = {
    email: "user@google.com",
    upi: "user@upi"
}

let userTwo = userOne

userTwo.email = "user2@google.com"

console.log(userOne.email) 
console.log(userTwo.email)