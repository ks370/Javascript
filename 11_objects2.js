//by constructor
const tinderuser = {}
tinderuser.id="123abc"
tinderuser.name="kartik"
tinderuser.isloggedin=false

console.log(Object.keys(tinderuser));//giving array of key
console.log(Object.values(tinderuser));//giving array of value
console.log(Object.entries(tinderuser));//giving key and vlaue is array and all key value array in one array
console.log(tinderuser.hasOwnProperty('isloggedin'));// check property in object and returnn in boolean type
//console.log(tinderuser);

//nesting of object
const regularuser={
    email:"kartikkuamr1830@gmail.com",
    fullname:{
        username:{
            firstname:"kartik",
            lastname:"sharma"
        }
    }
}
//accessing
console.log(regularuser.fullname.username.firstname);

const ob1={1:"a",2:"b"}
const ob2={3:"v",4:"n"}
//const ob3={ob1,ob2} // object ke ander object and object
const ob3 = Object.assign({},ob1,ob2) // good if taking {} as syntax
//.assign(target,source). here target is {} and source are ob1 and ob2
console.log(ob3);
//give a single object of having ob1 and ob2 as element
const ob4={...ob1,...ob2} // using spread operator