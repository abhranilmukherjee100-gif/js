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