let username = document.getElementById("username");
let password = document.getElementById("password");
let repeat_password = document.getElementById("repeat_password");
let btn = document.getElementById("btn");
let checkbox = document.getElementById("checkbox")
let data_user = []

let check  = JSON.parse(localStorage.getItem("Register_user"))
if (check==null){
    localStorage.setItem("Register_user",JSON.stringify(data_user))
    btn.addEventListener("click", function(){
        let newUser={}
        if(username.value!=""&& password.value != "" && password.value == repeat_password.value && checkbox.checked ==true
        ){
            newUser={
                Username:username.value,
                Password:password.value
            }
            data_user.push(newUser)
            localStorage.setItem("Register_user",JSON.stringify(data_user))
            username.value =""
            password.value =""
            repeat_password.value =""
            checkbox.checked=false
        }

    })
}else{
    let LIST = JSON.parse(localStorage.getItem("Register_user"))
    

    btn.addEventListener("click", function(){
        let newUser ={}
    
        if (
            CheckUser() == true && password.value != "" && password.value == repeat_password.value && checkbox.checked ==true
        ){
            newUser = {
                Username : username.value,
                Password : password.value
            }
            LIST.push(newUser)
            localStorage.setItem("Register_user", JSON.stringify(LIST))
            alert("Register successfully")
    
            username.value =""
            password.value =""
            repeat_password.value =""
            checkbox.checked=false
            
        }
        
        else if(username.value==""|| password.value==""){
            alert("You must fill username and password")
        }
        else if (username.value !="" && password.value !="" && password.value == repeat_password.value && checkbox.checked==false){
            alert("You must accept our policy")
        }
        else if ( password.value != repeat_password.value){
            alert("Your repeat password is incorrect")
        }
        
        else if (
            CheckUser() == false
        ){
            alert("Username existed")
        }
        
        
    })

}


// function abc(){
//     let LIST = JSON.parse(localStorage.getItem("Register_user"))
//     for(i=0; i<LIST.length; i++){
//         if ( username.value == LIST[i].Username){
//             console.log('nhatdeptrai')
//             return true
//         }else {
//             console.log("asdga")
//             return false
//         }
//     }
// }
// abc()



let LIST = JSON.parse(localStorage.getItem("Register_user"))

// checkUsername
function CheckUser() {
    
    for ( i = 0 ; i < LIST.length ; i ++){
        if ( username.value != LIST[i].Username){
            return true
        }else{
            return false
        }
    }
}
console.log(CheckUser())


  // checkPassword
//   function checkPassword1() {
//   }