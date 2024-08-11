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