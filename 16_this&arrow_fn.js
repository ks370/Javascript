// this means refering current context in user scope to access data use this keyword

// this only use in object not in function

const user={
    username:"kartik",
    price:999,
    welcome:function(){
        console.log(`${this.username},welcome to website`)
        console.log(this) // here this give context
    }
}
//user.welcome()
// user.username="anuj"
// user.welcome()

//console.log(this) // this give {}->empty  bcz in current context notthing is there

// const chai =function (){
//     let username="bwe"
//     console.log(this.username) //give undefined
// }
// chai()

// not  getting context of function we use arrow function
const chai = () => {
    let username="ajc"
    console.log(this.username) // give undefined
}
//chai()

/**********ARROW************  */
// const addtwo = (num1,num2)=>{ // arrow funtion
//     return num1+num2
// }
// //console.log(addtwo(4,5))

//another way of arror function is implisitly return
const addtwo = (num1,num2)=>  (num1+num2)
console.log(addtwo(4,5))
 // if using() no need to write return
 //         {}need to return value

 // retuning object uing arrow function
 const object = (num1,num2)=>  ({username:"karik"})


 // console.log(this).  on chrome inspect console give =>>> window object 
 