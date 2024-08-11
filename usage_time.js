//setTImeout and setInterval

//setTImeout - Run function "once" after "interval" of time
//setInterval - Run function repeatedly, starting after the interval of time, then repeating.

//setTimeout

//Syntax - setTimeour (func|code, delay, arg1, arg2....)

function greeting(name){
    console.log(`Welcome to our channel ${name}`)
}

setTimeout(greeting, 1000, "Rahul","Raghu")

//setInterval
//Syntax - setInterval(func|code, delay, arg1, arg2....)

//setInterval(greeting, 1000, "Rahul Naik")


//Hoisting
//Variable "Declaration" are hosted towards "top" of their scope.

// test =10
// console.log(test)
// var test

//function declration:

// test()
// let test=function(){   ReferenceError: Cannot access 'test' before initialization 
//     console.log("Hello Programmer")
// }
