// let username = document.getElementById("username");
// let password = document.getElementById("password");


// document.getElementById("btn").addEventListener("click",function(e){
//     e.preventDefault()
//     localStorage.setItem("username", username.value)
//     localStorage.setItem("password", password.value)

//     username.value = " "
//     password.value = " "
// })


let username = document.getElementById("username");
let password = document.getElementById("password");
let form = document.getElementById('form');
let clear= " "


form.addEventListener("submit",function(e){
    e.preventDefault()
    localStorage.setItem("username", username.value)
    localStorage.setItem("password", password.value)
    username.value = " "
    password.value = " "
})

document.getElementById("clear").addEventListener("click", function(e){
    e.preventDefault()
    localStorage.setItem("username", clear)
    localStorage.setItem("password", clear)
})

// let t = setInterval(function () {
//     console.log(1);
//   }, 1000);
//   setTimeout(function () {
//   console.log(3);
// }, 3000);
setInterval(function (){
    let lyrics = setTimeout(function a(){
        console.log("You are a good soldier")
        
    },1000)
    let lyrics1 = setTimeout(function a(){
        console.log(" Choosing your battles")
    },2000)
    let lyrics2 = setTimeout(function a(){
        console.log(" Pick yourself up    ")
    },3000)
    let lyrics3 = setTimeout(function a(){
        console.log(" And dust yourself off    ")
    },4000)
    let lyrics4 = setTimeout(function a(){
        console.log(" Get back in the saddle    ")
    },5000)
    let song = setInterval(function (){
        clearInterval(lyrics)
    },6000)
},5000)


    


