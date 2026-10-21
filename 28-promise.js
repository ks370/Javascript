//promise is an object 
const promiseone=new Promise(function(resolve,reject){
    // do an async task
    // database calls,cryptography,network
    setTimeout(function(){
        console.log('async task is complete')
        resolve()   // to connect with then 
    },1000)
})
// resolve is directly connnecting to then
// then is call back fucntion 
promiseone.then(function(){
    console.log("promise consumed ")
})



new promisetwo(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2')
        resolve()
    },1000)
}).then(function(){
    console.log("promise Async is resolved")
})



const promisethree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:'kartik',emilid:'kartikexample.com'})
    },1000)
})
// passing or giving some data in reolve
promisethree.then(function(user){
    console.log(user)   //{username:'kartik',emilid:'kartikexample.com'}
})



const promisefour=new Promise(function(){
    setTimeout(function(){
        let  error=true
        if(!error){
            resolve({username:'kartik',emilid:'kartikexample.com'})
        }
        else{
            reject("error occured ")
        }
    },1000)
})
// data is fetch by chaining 
promisefour.then((user)=>{
    console.log(user);
    return user.username
}).then(function(username){
    console.log(username)
}).catch(function(){
    console.log(error);
}).finally(function(){
    console.log("the promsie is either resolved or reject ")
})



//another syntax

const promsiefive=new promise(()=>{
    setTimeout(function(){
        let  error=true
        if(!error){
            resolve({username:'javascript',id:'123'})
        }
        else{
            reject("error occured ")
        }
    },1000)
})
// promise is an object so promsie() not like that 

// async mean we are getting some response
async function consumepromsiefive() {
  try{
     const response= await promsiefive
    console.log(response);
    }
    catch(error){
        console.log(error)
    }
}
consumepromsiefive()
//async not handle directly error 
/*
   const response= await promsiefive
   console.log(response); we have to use try and catch 
 */


async function getalluser() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data=await response.json() // converting data in json  bcz we are getting data in string and cannot able to fetch data form string
        console.log(data);
// in converting json it require time so we make it also await otherwise code not runnign 
    }
    catch(error){
        console.log("E:",error)
    }
}
getalluser()


// same work by then and catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})




/* in output the the data of json comes on top and then previous code are running 
bcz in fetch there is special type of queue. micro task queue / fetch queue/priority Queue

*/