let hidden = document.getElementById("hidden")
let hidden_img = document.getElementById("hidden_img")
let box1 = document.getElementById("box_blur")
let box2 = document.getElementById("box_blur2")


hidden.style.display="none"


document.getElementById('btn').addEventListener("click", function(){

    if(hidden.style.display=="none"){
        hidden.style.display="block"
        box1.style.filter= "blur(5px)"
        box2.style.filter= "blur(5px)"
        
    }else{
        hidden.style.display="none"
        box1.style.filter = ""
        box2.style.filter = ""
    }
})





