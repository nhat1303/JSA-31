let radio1= document.getElementById("radio1")
let radio2= document.getElementById("radio2")
let radio3= document.getElementById("radio3")
let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")
let img3 = document.getElementById("img3")


// img3.style.display="none"

// radio1.checked = true
// if (radio2.checked = true){
//     img3.style.display="none"
//     img1.style.display="none"
// }
// else if(radio1.checked=true){
//     img1.style.display="none"
//     img2.style.display="none"
//     console.log("dkashgla")
// }

radio1.addEventListener("click", function(){
    img1.style.display="none"
    img2.style.display="none"
    // img3.style.display="none"
    img3.style.display="block"
})

radio2.addEventListener("click", function(){
    img3.style.display='none'
    img2.style.display='block'
    img1.style.display='none'
})

radio3.addEventListener("click", function(){
    img2.style.display="none"
    img1.style.display="block"
    img3.style.display="none"
})


let btn = document.getElementById("btn")
let hidden = document.getElementById("hidden")
let logo = document.getElementById("logo")
let box = document.getElementById("box")



hidden.style.display="none"
btn.addEventListener("click",function(){
    if(hidden.style.display=="none"){
        hidden.style.display="block"
        box.style.filter= "blur(5px)"
        
    }else{
        hidden.style.display="none"
        box.style.filter = ""
    }
})