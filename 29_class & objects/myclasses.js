class user{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }
    encryptedpassword(){
        return `${this.password}abc`
    }
}
const user1= new user("kartik","abc.@gmail.com","2394")
console.log(user1.encryptedpassword())

// for inherit use extends keyword