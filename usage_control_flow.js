//control FLow



//For loops

//Run the specific task 100 times


//for loops

for(let i=0; i<=100;i++){
    console.log("Run the task",i)
}

//uscase of the loop

let dished=['Biryani', 'Bhallay', 'pani-puri', 'Chapati'];

for(let i=0; i<dished.length; i++){
    console.log(dished[i])
  
}
  console.log('--------------------------------')
//iteration and value of i
//0,1,2,3

//while loop
let j=1;
while (j<dished.length){
    console.log(dished[j]);
    j++;
}


//Do while loop

let k=1;
do{
    console.log("At least Run Time", k)
    j++;
}while(j<=1)


    //usage if, else, else if statements

let budget=700;

if(budget>600){
    console.log("Will do dinner in hotel");

} else if(budget >4500){
    console.log('Will do dinner at 3* Star hotel');

}
else {
    console.log("Run if all condidtions are false")
} 

//nested if - bad condition

let num =23
if(num>22){
    console.log("Run if 1st condition true");
    if(num>21){
        console.log("Run if Both condition true");
    }
}