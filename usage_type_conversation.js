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
let updatedDishes=dishes.concat(newDishes);

console.log(dishes.concat(newDishes))

//length
console.log(updatedDishes.length)
//push method

console.log(updatedDishes.push('Biryani Veg')) //return new lenght

//pop method it will remove from back.
console.log(dishes.pop())

// Boolean Values and Comparision Operators

let booleanType = true;
let stringBoolType="true";

console.log(typeof booleanType, typeof stringBoolType)

let email="Rahul@gmail.com"
let booleanValue=email.includes("@")

console.log(booleanValue)

