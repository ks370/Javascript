//object literal

const user={
    username:'kartik',
    logincount:0,
    signedin:true,
    getuserdetail:function(){
        //console.log("got user detail from database")
        //console.log(`username:${this.username}`)
        // this -> giving indicate current context variable 
        // if only printing this and it give all properties of user 
    }
}
//console.log(user.username)
//console.log(user.getuserdetail());
// if printing this in global context give empty


// constructor
const date = new Date()
// new used for making new context and it is constructr function

function userdata(username,logincount,isloggedin){
    this.username=username // left side is variable and right side is value given to left side
    this.logincount=logincount
    this.isloggedin=isloggedin

   // return this.  no need to write 
}
const userone=new userdata("kartik",12,true)
const usertwo = new userdata("abs",13,false)

console.log(userone) // if not using new usertwo override userone even if printing userone 
