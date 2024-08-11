//Introuduction to objects in JavaScript

let car = {
    color:"black",
    model:"2022",
    company:"Honda"
}

console.log(car)

//Accessing the JavaScript Object properties.

console.log(car['model'])
console.log(car.company)

let propertyName="color";

console.log(car[propertyName])

//modify the object:

car.color="brown"
console.log(car)

//Delete properites of object

let obj={
    prop1:"value1",
    prop2:"Value2"
}

// it always return true
delete obj.prop1
console.log(obj.prop1)

//Method - It is nothing but obect property (key) holiding.
let person={
    ageCalcualte:function(birthyear=1991){
        let age = 2024-birthyear;
        return age;
    }
}

console.log(person.ageCalcualte(1991))

//this 

