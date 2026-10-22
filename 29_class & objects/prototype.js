// in javascript all thing are object array and string  and function
// property of object are same. for array and string but it is useful or not it is secondary thing


/* a prototype is an object from which another object can inherit properties and methods. */

function multiplyby5(num){
    return num*5
}
multiplyby5.power=2
// console.log(multiplyby5(5))
// console.log(multiplyby5.power)
// console.log(multiplyby5.prototype)

function createuser(username,score){
    this.username=username
    this.score=score

}
createuser.prototype.increment=function(){
   this.score++
}
createuser.prototype.printme=function(){
   // console.log(`price is ${this.score}`); // this.score means jisne bhi pucha h usko bata do 
}
const chai =new createuser("chai",25) // there is an confusion kiska score increase krna h not decide we have to give context
const tea= new createuser("tea",250)
// now this wil not run  we have to use new keyword

//chai.printme()




////////////////////////////////////////////////////////////////////////////

let myname="kartik.  "
String.prototype.truelength=function(){
    console.log(`${this}`) // current context return kartik
   // console.log(`${this.myname}`) // undefined
    console.log(`True lenght is : ${this.trim().length}`)
}

myname.truelength() // truelength is undefined as of now so we made it 
// now we can use truelength as lenght(). or tirm()
"ABCD    ".truelength()












let myhero={
    thor:'hammer',
    spiderman:'sling',
    getspiderpower:function(){
        //console.log(`spidy power is ${this.spiderman}`);
    }
}
Object.prototype.kartik=function(){
   // console.log(`kartik is present in all object `)
}
myhero.kartik()











// inheritence
const user={
    islogged:true
}
const teacher={
    isavailable:false
}
const Tasupport={
    makeassignment:"js assignment",
    fulltime:false,
    __proto__:teacher // accessing property of teacher in tasupport
}
teacher.__proto__=user // means teacher inherite the property of user object 



//Modeern syntax
Object.setPrototypeOf(Tasupport,teacher)
// means tasupport access property of teacher object in it 