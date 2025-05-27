const coding= ["js", "ruby", "java" ,"python", "cpp"]
//for each doesnot return values
const values =coding.forEach((item) =>{
    //console.log(item)
    return item
})
console.log(values );




//filtersss
const mynums =[1,2,3,4,5,56,6,7,644]
let newnumss=mynums.filter ((num)=> num>5) 
console.log(newnumss);

//if we open scope we need to use return keyword else we dont need


const newnumsss = []
mynums.forEach((num) => {
    if(num > 4) {
        newnumsss.push(num)  // push into correct array
    }
})
console.log(newnumsss);
 


const mynumbers=[1,2,3,4,5,6,7,8,9,20]
const newnums=mynumbers.map((num) =>num+10)
console.log(newnums);



//chaining method
const newn=mynumbers
            .map( (num)=> num*10)
            .map(  (num) => num + 1)
console.log(newn);



//reduce********IMportant***********

const array1 =[1,2,3,4,5];
const initialvalue =0;
const sumwithvalue =array1.reduce(
    (accumulator, currentvalue)  => accumulator+currentvalue,
    initialvalue
);
console.log(sumwithvalue);


//starting initiated at 0
//reduce iterate over array and reduces to a sngle value 
//takes a call back funcntion
//accumulator stores running value 
//current stores current value 





//using arrow function

const mynuu=[1,2,3]
const mytotal=mynuu.reduce( (acc,currval) =>{
    console.log(`acc: ${acc} and currval : ${currval}`);
    
    return acc+currval
}, 0)

console.log(mytotal);




//using function
const mynu=[1,2,3]
const mytotl=mynuu.reduce( function(acc,currval) {
    console.log(`acc: ${acc} and currval : ${currval}`);
    
    return acc+currval
}, 0)

console.log(mytotl);
