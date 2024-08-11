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

//Math Object build in object in javascript

console.log(Math)

let number=7.3
console.log(Math.round(number))//round to neared integer
console.log(Math.floor(number))//round to down

console.log(Math.ceil(number))

let random=Math.random()
console.log(Math.round(random*100))

//Function

//call and apply method
//We can manually set the value of this keywork using call and apply

let mainPlane={
    airline:"Fly India",
    iataCode:"FI",
    bookings:[],
    book: function(flightNum, name){
        console.log(`${name} Booked Flight on ${this.airline} with code ${this.iataCode}`)
this.bookings.push({flightName: `${this.airline}`, code:`${this.iataCode}`})
    }
}

console.log(mainPlane.book(44,"Rahul"))
console.log(mainPlane.book(44,"Rahul"))
console.log(mainPlane.book(44,"Rahul"))
console.log(mainPlane.book(44,"Rahul"))
console.log(mainPlane.bookings)

//New airline launched of same group

let childPain={
        airline:"Child India",
    iataCode:"CP",
    bookings:[],
}
let book = mainPlane.book

book.call(childPain, 689, "Zack")
//apply method:
Boolean.apply(childPain, [785, "Naik"])

console.log(childPain.bookings)
