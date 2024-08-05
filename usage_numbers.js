//numbers

let score=50
console.log(score, typeof score)

//Mathmatical Operator * / % ** +-

let result = score/2 // Give Qoutient

console.log(result)

let newResult = score%2 // Give Remainder
console.log(newResult)


let updatedResult = score *2+(4*3)-8/2%4;
console.log(updatedResult)
//Using priority and Precedence

//1. () Bracket
//2. ** Power Operator
//3 * / % (Form Left to Right)
//4 + - (From Left to Right)

//Concatination of Numbers:

let resultLine = 'My total sum is:' +updatedResult
console.log(resultLine)

//Loose Equality (==) Vs Strict Equality OPerator (===)
let age=33;
console.log(age =="22") // Focus only on value but not Type.

console.log(age==="33") //Focus both value and type

//Type Conversion