//Functions

//It is simply a piece of code which we can use in our program 
//many time.

//It is just like a variable holding some piece of code

//Declaration.

function nameOffFunction(){
    console.log("Name of function");
}
//call Function
nameOffFunction()

//Function Expression


let fun = function(){
    //also called anonyms function

    console.log("Anonums Function")
}

fun()

//Real Time example:

let invitation=function(name) {

    console.log(`Welcome ${name} you are invited on our event.`)
}

invitation('Rahul')

//Returning values (How to return value from the function)...........................................

let ageCalulcation=function(birthYear, currentYear){
    let age=currentYear-birthYear;

    console.log(`current age is ${age}`)

    return age;
}
ageCalulcation(1991, 2024)

console.log(ageCalulcation(1991,2024))

//arrow function
//Special form of function expression
//It allows us to write function more fast because 
//No need to use function keyword
//No need to use paranthesis() in case of single paramter.
//No need to use curely {} if single line code in function
//No need to use return statement if single line code in function


//Arrow FUnction

let newInviation= name=>`welcom ${name} to this events `
console.log(newInviation("Rahul"))

//Passing function as an Argument (hight order function example)

let upperCase = function(str){
    return str.toUpperCase(str);
}

let lowerCase = function(str){
    return str.toLowerCase(str);
}

let tranformer = function(str, fun){
    return fun(str)
}

console.log(tranformer("Hello", upperCase))

let commpliment= function(mes){
    return function(name){
        console.log(`${mes} ${name}`)
        return true
    }
}
//console.log(commpliment("Hey")("Hey"))
//2nd Method
let commplimented=commpliment("Hey you are amazing code,")
commplimented("Rahul")
commplimented("Raghu")