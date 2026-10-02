 function myname(){
    console.log("ABCD");

 }

//  function addtwonumber(n1,n2){ // n1 and n2 are parameter of function which are given by user
//     console.log(n1+n1);  
//  }
//  addtwonumber(3,4);  // 3,4 are argument of function

 function addtwonumber(n1,n2){
    let result=n1+n2; // this result is different acc to scope of variable 
    return result;    //also return n1+n2
 }
 //const result= addtwonumber(3,4);  // this result is different acc to scope of variable 


 function loginusermessge(username){
    if(username===undefined){  // also can use if(!username) -> means reverse of username (not given username as argument )
        console.log("Pls enter username")
        return
    }
    return `${username} just logged in `
 }
 //console.log(loginusermessge());  // if we not give argument is print  -> undefined just logged in 


 function calculatecartprice(...num1){ // rest operator or spead operator are same it depent on their use what we call it 
    return num1;                // here ... is rest operator
 }
//console.log(calculatecartprice(200,400,300));
 // ...num1 this is used bcz we don't know how many nummmber it will give all price in an array 
  /*

  function calculatecartprice(val1,val2,...num1)
     console.log(calculatecartprice(200,400,300,999,34));
        num1 will return [300,999,34]

   */

const user = {
    username:"kartik",
    price:499
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
//handleobject(user);
// we can directly pass object as argument 
handleobject({
    username:"anuj",
    price:997
})


// passing array in function
const newarray=[200,800,900];
function returnsecondvalue(getarray){
    return getarray[1];
}
console.log(returnsecondvalue(newarray))