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

//this keyword.
// In each method we have an access of special keyword called "this"
//"this" keyword represent the object. "calling" the "method" in which "this" is "present"

let personDetails={
firstName:"Rahul Patil",
city:"Dubai",
Education:"Software Engineer",
birthyear:1991,
getSummary:function(){
    return `${this.firstName} lives in ${this.city} ${this.Education} ${this.birthyear}`
}

}

console.log(personDetails.getSummary())

//forEach method of array.
//Its another type of loop which we used to travers
//over the array.

//forEach method
 let dishes=['Biryani', 'channy', 'Karahai', 'Bhallay']

 dishes.forEach(function(element){
    console.log(element)
 })


 // Objects inside array.
 let blockList=[{userName:"Rahul", reason: "Abusive Content"},{userName:"Rahul", reason: "Abusive Information"} ]
console.log(blockList)

for(let i=0; i<blockList.length; i++){
    console.log(`user ${blockList[i].userName} has been blocked due to ${blockList[i].reason}`)
}

//
