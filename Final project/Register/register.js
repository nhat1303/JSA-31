let username = document.getElementById("username");
let password = document.getElementById("password");
let repeat_password = document.getElementById("repeat_password");
let btn = document.getElementById("btn");
let checkbox = document.getElementById("checkbox")
let data_user = []

let check  = JSON.parse(localStorage.getItem("Register_user"))
if (check==null){
    localStorage.setItem("Register_user",JSON.stringify(data_user))
    // btn.addEventListener("click", function(){
    //     let newUser={}
    //     if(username.value!=""&& password.value != "" && password.value == repeat_password.value && checkbox.checked ==true
    //     ){
    //         newUser={
    //             Username:username.value,
    //             Password:password.value
    //         }
    //         data_user.push(newUser)
    //         localStorage.setItem("Register_user",JSON.stringify(data_user))
    //         username.value =""
    //         password.value =""
    //         repeat_password.value =""
    //         checkbox.checked=false
    //     }

    // })
}else{
    let LIST = JSON.parse(localStorage.getItem("Register_user"))
    

    btn.addEventListener("click", function(){
        let newUser ={}
    
        if (
            checkValidateUser(username.value)==true && checkPassword1(password.value)==true && password.value == repeat_password.value && checkbox.checked ==true
        ){
            newUser = {
                Username : username.value,
                Password : password.value
            }
            LIST.push(newUser)
            localStorage.setItem("Register_user", JSON.stringify(LIST))
            alert("Bạn đã đăng ký thành công")
    
            username.value =""
            password.value =""
            repeat_password.value =""
            checkbox.checked=false
            
        }
        
        else if(username.value==""|| password.value==""){
            alert("Bạn phải nhập tên đăng nhập và mật khẩu")
        }
        else if (username.value !="" && password.value !="" && password.value == repeat_password.value && checkbox.checked==false){
            alert("Bạn phải đồng ý với những điều khoản của chúng tôi")
        }
        else if ( password.value != repeat_password.value){
            alert("Mật khẩu bạn nhập không trùng khớp")
        }
        else if (password.value.length<8){
            alert("Bạn phải đặt mật khẩu dài 8 chữ trở lên")
        } 
        else if (
            abc(username.value)==true
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





// checkUsername
function checkValidateUser(username) {
    if (username.value == "") {
      alert("User empty");
      return false;
    }
    // userAccount tên user ng dùng nhập => string
  
    let LIST = JSON.parse(localStorage.getItem("listUser"));
    for (let i = 0; i < LIST.length; i++) {
      if (username.value == listUser[i].Username) {
        alert("User existed");
        return false;
      }
    }
  
    return true;
  }
  
  // checkPassword
  function checkPassword1(password) {
    if (password.value == "") {
      alert("password empty");
      return false;
    }
  
    return true;
  }