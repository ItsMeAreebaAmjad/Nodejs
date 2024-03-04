//Local Modules

const register=function(username){
    console.log(`User ${username} has been registered`)
}

module.exports=register

//you cannot export two things at a same time..
//so in this situatin you create a object..

const login=function(username,password){
    console.log(`User ${username} is logged in`)
}

module.exports={

    //when the key and value is same you dont nee to write this two times

    // register:register,
    // login:login
    register,
    login
}


//Core Modules