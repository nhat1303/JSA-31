let username = document.getElementById("username1")
let password = document.getElementById("password1")
let btn = document.getElementById("btn1")
let LIST = JSON.parse(localStorage.getItem("Register_user"))
console.log(LIST)
// console.log(LIST[1].Username)
// function abc(){
//     for ( i = 0 ; i < LIST.length ; i ++){
//         if ( "uashlgasgha" == LIST[i].Username){
//             return true
//         }
//     }
    
// }

// console.log(abc())


btn.addEventListener("click", function(){
    if(CheckUser(username.value)==true && CheckPass(password.value)==true){
        alert("Login successfully")
        username.value=""
        password.value=""
    }
    else if ( username.value == ""){
        alert(" You must fill username ")
    }
    else if ( password.value == ""){

        alert( " You must fill password")
    }
    else if ( CheckUser(username.value) != true){
        alert(" Wrong username")
    }
    else if ( CheckPass( password.value) != true){
        alert(" Wrong password")
    }



})




function CheckUser(){
    
    for ( i = 0 ; i < LIST.length ; i ++){
        if ( username.value == LIST[i].Username){
            return true
        }
    }
}
console.log(CheckUser())

function CheckPass(){
    for( i = 0 ; i < LIST.length; i++){
        if( password.value == LIST[i].Password){
            return true
        }
        
    
    
    }
    }
