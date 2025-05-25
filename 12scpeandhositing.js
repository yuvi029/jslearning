// Global scope
var c = 300;  // Global variable

if (true) {
    // Block scope
    let a = 10;
    const b = 120;
    var c = 22; // Function or global scoped, not block scoped
}

// console.log(a); //  Error: a is not defined
// console.log(b); // Error: b is not defined
console.log(c);    //  Output: 22



function one() {
    const username = "hitesh";

    function two() {
        const website = "youtube";
        console.log(username); //  Accessible due to lexical scope
    }

    // console.log(website); // Error: website is not defined
    two(); // Calls inner function
}
one();


//hositing means variable /functions are moved to the top of the scope


//intresting//
function addone(num){
    return num+1;
}
addone(5)


const addtwo=function(num){
    return num+2

}
addtwo(50)
console.log(addtwo(50));
