// stack -> use in primitive datatype
/*
when stack memory use we get a copy of variable which
we declared 
*/



//heap -> use in non primitive datatype 
/*
we get a reference of object/variable
 */
let myname="kartik";
let anothername=myname;  // creating new space
anothername="newkartik"
console.log(anothername);
console.log(myname);

// in heap no new space take reference
let user={
    id:"kartikkuamjfn.gmial",
    upi:"user@gyl"
}
let usertwo=user;
user.upi="my@uriv";
console.log(user.upi);  // giving same output
console.log(usertwo.upi);