//Type Conversation

let stringType="54";

console.log(stringType, typeof stringType)

//Number Method

let numberType = Number(stringType)

console.log(numberType, typeof numberType)

//Imp note
//In number method passing String must be of numeri values

let numberConversion = 45
let stringConversion = String(numberConversion)

console.log(stringConversion, typeof stringConversion)

//Boolean method true/false

let age =32;
let booleanValueoFAge=Boolean(age);
console.log(booleanValueoFAge)

//Arrays - objects Collection of same types.

let dishes=['Biryani', 'Chat', 'Partha']
console.log(dishes[0])

//methods of array
//join method

console.log(dishes.join(' '))

//indexof
console.log(dishes.indexOf('Chat'))

//concat method
let newDishes=['Panipuri', 'vegbiryani', 'sweet']

console.log(dishes.concat(newDishes))