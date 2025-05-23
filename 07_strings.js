//string interpolation
let name = 'Yuvraj';
let greeting = `Hello, ${name }!`;
console.log(greeting); // Output: Hello, Yuvraj!


//string length  //uppecase //lowercase
let str='yuvrajsingh';
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
//original is not changed here it is just used to make a copy here

//charat
console.log(str[0]);
console.log(str.charAt(1));

//index of
console.log(str.indexOf('script'));

//substring
console.log(str.substring(0,6));

//trim()
//-------it trims the spaces-----------
let strwithspaces = '     ssys    ';
console.log(strwithspaces.trim()); 

//split
let stringg='red,blue,green';
console.log(stringg.split());


const url="https://youtu.be/fozwNnFunlo?si=lU5yy5RXaxlGKHGt";
console.log(url.replace('si=', '-'));
console.log(url.includes('yuvraj'));
