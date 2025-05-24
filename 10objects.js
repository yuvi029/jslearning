//*********objects*************/
//OBJECTS key value pair where key is strig and value can be strings
//singleton

const mySym =Symbol("key1")  // important for interview perception here symbol is used and is inside the square bracket

const user={
    name:"yuvi",
    [mySym]: " key1",
    age: "21",  
    location: "abad",
    email: "singhyuvi4321@gmail.com"
}
  //access user
  console.log(user.email);
  console.log(user["location"]);
  console.log(user.mySym);
//modify
user.age="20";

  //another type to issue objects

  function person(name,age,batsman){
         this.name=name;
         this.age=age;
         this.batsman=batsman;
  }
           const batter1= new person("UB", 2, "RHB");
           console.log(batter1);
           

   //**********OBJECTS2********************//
   const tinderuser ={}        
   tinderuser.id ="123,sk"
   tinderuser.name="sammt";
   tinderuser.loggedin =false;
   console.log(tinderuser);


   //objects ke andar objects
   const regurlaruser ={
     email: "2023ugee029@nitjsr.ac.in",
         fullname: {
            username: {
                firstname: "yuvraj",
                lastname: "singh"
            }
         }
   }
   console.log(regurlaruser.fullname.username.firstname);
   const obj1 ={ 1: "a", 2: "b"}
   const obj2 ={ 3: "a", 4: "b"}

   //const obj3 ={ obj1, obj2}
   const obj3 =Object.assign(obj1, obj2)
   console.log(obj3);
   

   console.log(tinderuser);
   console.log(Object.keys(tinderuser));
   console.log(Object.values(tinderuser));
   console.log(Object.entries(tinderuser));
   console.log(tinderuser.hasOwnProperty("gender"));

   
   
   


   
   