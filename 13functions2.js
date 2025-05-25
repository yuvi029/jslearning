// Object with a method using `this`
const user = {
    username: "yuvraj",
    price: 99,
    welcomemessage: function () { 
        // `this` refers to the object `user`
        console.log(`${this.username}, welcome`);
    }
};

user.welcomemessage(); // yuvraj, welcome

// Changing username
user.username = "sam";
user.welcomemessage(); // sam, welcome

// In global scope: `this` depends on environment
console.log(this); // In Node.js: {}, In browser: Window



// Regular function (not inside object)
function chai() {
    let username = "yuvraj singh";

    // `this` inside regular function does NOT refer to function scope
    // In strict mode, `this` is undefined; in non-strict, it's global
    console.log(this.username); // undefined
}
chai();



// Function expression
const chais = function () {
    let username = "harry";

    // Same behavior: `this` doesn't refer to function scope
    console.log(this.username); // undefined
};
chais();



// Arrow function
const chaisa = () => {
    let username = "harry";

    // Arrow functions don’t have their own `this`
    // `this` is inherited from the outer (lexical) scope
    console.log(this); // In browser: window object | In Node.js: {}
};
chaisa();




// Arrow function with return keyword
const addtwo = (num1, num2) => {
    // Explicit return with curly braces
    return num1 + num2;
};
console.log(addtwo(22, 233)); // 255




// Arrow function with implicit return (no curly braces)
const addthree = (num3, num4, num5) => (
    num3 + num4 + num5
);
console.log(addthree(1, 11, 111)); // 123






// IIFE (Immediately Invoked Function Expression)
// Defined and executed immediately
(function yuvraj() {
    console.log("db conn"); // Output: db conn
})();






// Arrow function version of IIFE with parameter
((name) => {
    // Template literal must use backticks (`) not double quotes
    console.log(`db connect ${name}`);
})("yuvraj"); // Output: db connect yuvraj

   


















