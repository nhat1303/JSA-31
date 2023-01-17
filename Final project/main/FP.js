let btn = document.getElementById("btn")
let hidden = document.getElementById("hidden")
let logo = document.getElementById("logo")




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