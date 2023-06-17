/*const userOne = {
    username: 'zinny',
    email:'emmanuelanu170@gmail.com',
    login(){
        console.log('this user logged in')
    },
    logout(){
        console.log('this user logged out')
    }
};

console.log(userOne.email, userOne.username)
userOne.login();

const userTne = {
    username: 'Emmanuella',
    email:'emmanuelanu129@gmail.com',
    login(){
        console.log('this user logged in')
    },
    logout(){
        console.log('this user logged out')
    }
};
console.log(userTne.email, userTne.username)
userTne.login();

//classes
//a class is like a blueprint for an object (it describes how
//one should be made)


//class constructor

class User{
    constructor(username, email, password){
        //set properties
        this.username = username;
        this.password = password
        this.email = email;
        this.score = 0

    }
    login(){
        console.log(`${this.username} just logged in`)
        return this;
    }
    logout(){
        console.log(`${this.username} just logged out`)
        return this;
    }
    inscore(){
        this.score += 1;
        console.log(`${this.username} has a score of ${this.score}`)
        return this;   
    }
}

class Admin extends User{
    constructor(username, email, password, title){
        //super()
        super(username, email, password)
        this.title = title

    }
    DeleteUser(user){
     users = users.filter(u => u.username !== user.username)
    } 

}



const userOne = new User('zinny', 'emmanuelanu129@gmail.com', 22234);
const userTwo = new User('luigi', 'zinella970@gmail.com', 573838);
const userthree = new Admin('emmanuel', 'emmanuelanu170@gmail.com', 457454, 'black-belt-champion');

let users = [userOne, userTwo, userthree]

userTwo.login();

userOne.login().inscore().inscore().logout();
console.log(userOne, userTwo, userthree);
console.log(userthree)

userthree.DeleteUser(userTwo)
console.log(users)

console.log(userthree)
//the 'new' keyword
//1- it creates a new empty object {}
//2- it binds the value of 'this' to the new empty object
//3- it calls the constructor function to 'bulid' the object

//class method and chaining


//function constructor 
function Users(username, email){
this.username = username
this.email = email
}


Users.prototype.logout = function(){
    console.log(`${this.username} has logged out`)
    return this
}

Users.prototype.login = function(){
    console.log(`${this.username} has logged in`)
    return this
}

function Admins(username, email, title){
Users.call(this, username, email)
this.title = title
}

Admins.prototype = Object.create(Users.prototype)
Admins.prototype.deleteUse = function(){

}

const userone = new Users('zinny', 'emmanuelanu170@gmail.com')
const usertwo = new Users('Emmanuella', 'emmanuelanu129@gmail.com')
const useThree = new Admins('sam', 'zinella970@gmail.com', 'black-belt-champ')
console.log(userone, usertwo, useThree)
userone.login().logout();

usertwo.logout();


//what is prototype
//every object in js has a prototype
//prototype contain all the methods for that object type


*/



