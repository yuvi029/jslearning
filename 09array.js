 //********arrays*******************//
 const myArr= [0,1,2,3,4,5];
 console.log(myArr[2]);
 const myHeroes = ["sk", "king", "srk"]
 const my=new Array(33,22,222);

 //length
 console.log(myArr.length);

 //methods
 myArr.push(5);
 console.log(myArr);
 myArr.pop(); //last value
 console.log(myArr);
 myArr.unshift(9);
 myArr.shift();

 console.log(myArr.includes(9));
//question that asks whether 9 is included or not 
console.log(myArr.indexOf(9));
//question that asks index of 9 if not than returns-1
const newarr =myArr.join();

//*********slice ,splice***************//

console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1,3);
console.log(myn2);




//*********LECTURE2 ARRAY*******************//

const marvel = ["thor", "superman", "ironman"]
const dc = ["superman", "flash", "batman"]
marvel.push(dc);
console.log(marvel);

const allheros=marvel.concat(dc); //combine both of them
console.log(allheros);//combine and returns a new array

//spread all heroes
const allhero = [...marvel, ...dc];
console.log(allhero);


const anotherarr=[1,2,3, [4,5,6],7,[9,11,22]];

const real_another=anotherarr.flat(2)
console.log(real_another);


///
console.log(Array.isArray("yuvraj"));
console.log(Array.from("yuvraj"));
//make aray of the elements

console.log(Array.from({name: "yuvraj"}));
//intresting key leliya to array name ka yaha emoty bnega

//iterating
for(let i=0;i<marvel.length;i++){
    console.log(marvel[i]);
}
//map
const numbers=[10,100,1000];
const sq=numbers.map(numbers=>numbers*numbers);
console.log(sq);



 
 
 