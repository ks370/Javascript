/*
if we declare object with literals then singleton nhi bnta h 
if we declare object with constructor then singleton bantah 
*/

//object literals


//key and value 
const mysym = Symbol("mykey1");
/* interviewer can ask to declare symbol and access it and show it symbol */


const jsuser = {
    name:"kartik",
    "fullname":"abcd",// cannot access by . method
    age:21,
    [mysym]:"mykey1", //using [] show it symbol in output if not using  it give mysym = mykey1
    location:"jaipur",
    email:"kartikkumar1830@gmail.com",
    islogged:false
}
//method of accessing 
console.log(jsuser.email);
console.log(jsuser["email"]);  //best
console.log(jsuser[mysym]); // for getting mysym is symbol


//changing
jsuser.email="nviebirievbe";
Object.freeze(jsuser); // not able to change now 

 
jsuser.greeting=function(){
    console.log("Hello js user");
}
console.log(jsuser.greeting());
jsuser.greeting2=function(){
    console.log(`hello js use,${this.name}`);  // this is used to know the things in js user to accessing
}
console.log(jsuser.greeting2());


