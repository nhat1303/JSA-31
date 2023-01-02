let username = document.getElementById("username");
let password = document.getElementById("password");
let repeat_password = document.getElementById("repeat_password");
let btn = document.getElementById("btn");
let checkbox = document.getElementById("checkbox")
let data_user = []



btn.addEventListener("click", function(){

    if (username.value!="" && password.value.length>=8 && password.value== repeat_password.value && checkbox.checked==true
    
    ){
        data_user.push(username.value)
        data_user.push(password.value)

        localStorage.setItem("Register_user", JSON.stringify(data_user))
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


})