if (2==2){
    //condn =true code will be executed else wont 
    console.log("UB"); 
}
//<,>,<=,>=,==,===,!=
if( 3!=1){
     console.log("singh");
       //condn is true and code will be executed
}



if(2==='2'){
    console.log("yuvi");//not strictly equal 
}
else{
    console.log("cheater");
}



//alag scope hota hain curly braces ke andar
var score=1000;
if (score >100) {
    const power ="fly"
}
    console.log('user power: ${power}');




const balance=1000
if(balance<400) {
    console.log("less than"); 
}
else if(balance<750){
    console.log("less than 75");
}
else{
    console.log("more");
}



const userloggedin =true
const debitcard =true
const loggedinfromgoogle=false
const loggedinfrominsta=true
if(userloggedin && debitcard && 2==2){
    console.log("accessible!");
}
if(loggedinfromgoogle || loggedinfrominsta){
    console.log("access!!!");
}
    




//switch case
//switch (key) {
//     case value:

//     break;
//      default:
//          break;
//           }

const month =3
 switch (month) {
    case 1:
         console.log(jan);
        break;//press shift+alt+down arrow
    case 2:
         console.log("f");
        break;//press shift+alt+down arrow
    case 3:
         console.log("m");
        break;//press shift+alt+down arrow
    case 4:
         console.log("april");
        break;//press shift+alt+down arrow
    case 5:
         console.log("may");
        break;//press shift+alt+down arrow
    case 6:
         console.log("june");
        break;//press shift+alt+down arrow
    case 7:
         console.log("july");
        break;//press shift+alt+down arrow
    case 8:
         console.log("aug");
        break;//press shift+alt+down arrow
    case 9:
         console.log("sep");
        break;//press shift+alt+down arrow
    default:
        break;
 }