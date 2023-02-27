let btn = document.getElementById("btn")
let hidden = document.getElementById("hidden")
let logo = document.getElementById("logo")
let log_out = document.getElementById("log-out-box")



hidden.style.display="none"
btn.addEventListener("click",function(){
    if(hidden.style.display=="none"){
        hidden.style.display="block"
        logo.style.filter= "blur(5px)"
        
    }else{
        hidden.style.display="none"
        logo.style.filter = ""
    }
})



let user = document.getElementById("user")
let current_user = localStorage.getItem("Current-login")
console.log(current_user)

user.innerHTML= current_user




user.addEventListener("click", function(){
    if( log_out.style.display=="none"){
        log_out.style.display="block"

    }
    else {
        log_out.style.display="none"
    }
})

log_out.addEventListener("click", function(){
    
    location.reload()
    user.innerHTML=""
    log_out.style.display="none"
    localStorage.setItem("Current-login","")
})