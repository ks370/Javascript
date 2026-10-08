function one(){
    const username="kartik"
    function two(){
        const website = "youtube"
        console.log(username);
    }
   //console.log(website);  // giving error while printing
    two();
}
//one();

if(true){
    const username = "kartik"
    if(username=="kartik"){
        const website="youtube"
        console.log(username+website);
    }
    //console.log(website); give error calling outside of scope
}
//console.log(username); // give error calling out of scope

//**********Interesting******** */
// addone(5)  also access by writing here   if declare normal fucniton
function addone(num){
    return num+1
}
addone(5)


//addtwo(5) give error because we give functiion in a variable 
const addtwo=function(num){
    return num+2
}
addtwo(5)