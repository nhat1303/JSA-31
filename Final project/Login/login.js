let username = document.getElementById("username1")
let password = document.getElementById("password1")
let btn = document.getElementById("btn1")
let LIST = JSON.parse(localStorage.getItem("Register_user"))




btn.addEventListener("click", function(){
    if(CheckUser(username.value)==true && CheckPass(password.value)==true){
        alert("Login successfully")
        username.value=""
        password.value=""
    }
    else if (username.value ==""){
        alert("Username must be filled")
    }
    else if (password.value==""){
        alert("Password must be filled")
    }
    else if (CheckUser(username.value)== false){
        alert("Wrong username")
    }
    else if (CheckUser(password.value)== false){
        alert("Wrong password")
    }
    



})




function CheckUser(){
    
for(i=0;i<=LIST.length;i++){
    if( username.value == LIST[i].Username){
        return true
        // console.log("kasdhj;gha")
    }else if( username.value !=LIST[i].Username){
        
        return false
    }



}
}
CheckUser()

function CheckPass(){
    for(i=0;i<=LIST.length;i++){
        if( password.value == LIST[i].Password){
            return true
        }
        else if( password.value != LIST[1].Password){
         return false  
        }
    
    
    }
    }
