//for of

//arrays specific loops
//["", "", ""]
//[{}, {}, {}]
const arr=[1,2,3,45,]
for (const num of arr) {
    console.log(num);
}//value till 5 printed

const string=`hello world`;
for (const greet of string) {
    console.log(`each char is ${string}`);
}

//maps
const map=new Map()
map.set('IN','USA', 'AMERICA')
map.set('Fr','France')
console.log(map);

for (const key of map) {
    console.log(key);
}
//here each element will be printed for getting everything in different

for (const [key, value] of map) {
    console.log(key, ":-", value);
}



//here we will not get anyoutput as object is not iterable
// const myObject ={
//     'game1':'NFS',
//     'game2': 'spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }






//FOR OBJECTS IT IS FOR IN LOOP
const myObject ={
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
}
for(const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}




//FOR EACH LOOP
//call back function------name nahi ayega
const coding=['js','ruby','JAVA','C++']
coding.forEach(   function (item) {
    console.log(item);
}) 

//arrow
coding.forEach( (item) => {
console.log(item);
})




//important
const mycoding =[
    {
        launguagename : "java",
        launguagefilename: "js"
    },

    {
        launguagename : "c",
        launguagefilename: "c"
    },

    {
        launguagename : "c++",
        launguagefilename: ".cpp"
    }
]
mycoding.forEach((item) => {
    console.log(item.launguagefilename);
})