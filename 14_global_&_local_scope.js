//********************global and local scope*****************
 let a=10;
 let b=20;
 console.log(a ,"&&",b);

 //{} -> this is scope  if it come with if and else then this is called scope of if and else 
    // same for function or others

 // a and b are declare globally we can access these anywhere in code 
 // a and b are global variable  and have scope in entire code 
 if(true){
    let c=40;
    const d=90;  // here c and d are declare inside if block we can access c and d only in if block not outside
 }
 //console.log(c);  /// not possible to get value of c outside if block
 // c and d are local variable and have scope only in if block



 /* we can access global variable inside any local scope but 
    local variable cann't access in global scope */

    // one impt 
let n=5
if(true){
    let n=10;   // if not written let it will change value of n by writing it will create new varible inside if block
    console.log("inner = ",n);
}
console.log("outside = ",n);