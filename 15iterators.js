//loops 
//iterators
//FOR LOOP

const array=[1,2,3,4,4,5,6]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
              if(element ==5){
                           console.log();
                      }
         console.log(element);
                    }

//block space jo vi andar hoga declare wo andar hi use hoga

for (let i =0; i <= 10; i++) {
    console.log(`outer loop value: ${i}`);
     for (let j = 0; j <=10; j++) {
      // console.log('Inner loop value: ${j}');
      console.log(i+'*' + j + '=' +i*j);
      
    }
}
//observe the execution


//loop stopped in between
//break and continue
for (let index = 0; index < 20; index++) {
    if(index==5) {
        console.log("detected 5");
        break;
    }
    console.log(`value of i is ${index}`);
}

for (let index = 0; index < 20; index++) {
    if(index==5) {
        console.log("detected 5");
        continue; //ek baar maaf kardo 
    }
    console.log(`value of i is ${index}`);
}


//while do while loop
let index = 0;
while (index < 10) {
    console.log(`value of index is ${index}`); //dont use single braces use curly one
    index++;
}


let myarray =['flash', "batman", "superman"]
let arr=0;
while( arr<myarray.length) {
    console.log(`value is ${myarray[arr]}`);
    arr=arr+1;
}


//dowhile
   let score =11;
do {
    console.log(`score os ${score}`);
    score ++
}
while (score <=10)
