//functions are reusable block
function say(){
    console.log("h");
}
say();

//add two numbers
function add(a,b) {
    console.log(a+b);
}
let sum=add(9,10);

//another funstions
function greet(name){
    console.log("hello!"+ name +"!");
}
greet("UB");
greet("sh");

//
function addtwonumbers(number1 , number2){
      let result  = number1 + number2
      return result;
}
   const result = addtwonumbers(3,2)
   console.log("result: ", result);
   

   //loop in fucntions

   function email(username) {
     if(username===undefined){
        console.log("please enter your username");
        return
     }
     return `${username} just logged in`
   }
   console.log(email("yuvraj029"));


   //*****************LECTURE 2 FUNCTIONS************//
   //FUNCTION WITH S=OBJECTS
   let person1 ={name:"yuvraj", age:'22', gender: 'male'}

   function greet(person){
    console.log(`hello! ` + person.name +` how are you? are you `+ person.gender+` of age `+ person.age);
   }
   console.log(greet(person1));
   

   function incrementage(person){
    person.age++;
   }
   incrementage(person1);
   console.log(person1.age);

   //array
   const mynewarray=[1,22,333,111,111]
   function returnsecondvalue(getarray){
    return getarray[1];
   }
   console.log(returnsecondvalue(mynewarray));
   