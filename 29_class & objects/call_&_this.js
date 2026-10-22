function setusername(username){
    this.username=username
}
function createuser(username,email,password){
    setusername.call(this,username)
    this.email=email
    this.password=password
}
const user1= new createuser("kartik","abc.@gmail.com","2394")
console.log(user1)