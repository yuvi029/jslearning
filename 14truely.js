//

const useremail="singhyuvi"  //string ko true value maan liya gaya hain yahaa
if(useremail) {
    console.log("got user email");
}
else {
    console.log("dont have useremail");
}



//falsy value
//false, 0,-0,BigInt On, "",null,undefined,NaN

//truely values
//"0",'false' //string ke andar truely value, " ", [],, {}, function(){}




if(useremail.length===0){
    console.log("array is empty");
}
const emptyobj= {}
 if(Object.keys(emptyobj).length===0) {
    console.log("objectis empty");     
 }





 //nullish coalecing operator(??) :null undefined
 let val1;
 //val1 =5??10
 val1=null??10
 //null aaya to left hand side wala 
 console.log(val1);