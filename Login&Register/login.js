let username = document.getElementById("username1")
let password = document.getElementById("password1")
let btn = document.getElementById("btn1")
let data =[]

btn.addEventListener("click", function(){
    if(username.value!="" && password.value!=""){
        data.push(username.value)
        data.push(password.value)
        alert("Bạn đã đăng nhập thành công")
        localStorage.setItem("Lgin_user",JSON.stringify(data) )
        username.value=""
        password.value=""
        
    }
    
    else if(username.value==""|| password.value ==""){
        alert("You must enter username and password")
    }
    
    
    
    

    
})
