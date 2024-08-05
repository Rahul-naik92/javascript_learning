console.log('Hello JavaScriptss');
let firstName="Wow";
let lastName="Programmer";

console.log(firstName, lastName)

//Method 2 Using Template literals

let fullName=`I want Become ${firstName} ${lastName}`

console.log(fullName)

//Getting String Character

console.log(firstName[2])

//String Methods.

console.log(firstName.toLowerCase())
console.log(lastName.indexOf("g"))

//Common String Methods

let hobbies='   coding reading running ';
console.log(hobbies)
let result = hobbies.trim()

console.log(result)

//include method

console.log(result.includes("reading")) //case sensitivie


let completeName="wowprogrammer";
console.log(completeName.slice(0,8))

//string split method

let favoriteColor="Brown Black Gray Blue"
let arrColors = favoriteColor.split(',');
console.log(arrColors)

//JS strings are immutable

let str ="Hello"
str[0]='p'
console.log(str)
console.log(str[0]='p')


