//Variable and Block Scope
//scope - Area where variable is defined or accessible

//let score=90;--> Global Scope

if(true){
    //console.log(score)
}

//ternary operator

let age=20;
console.log(age>20 ? "Yes" : "No")


//switch

switch(age){
    case 15:
        console.log('Fifteen');
        break;
        case 20:
            console.log('Twenty');
            break;
            default:
                console.log("Something went wrong");
                break;
}