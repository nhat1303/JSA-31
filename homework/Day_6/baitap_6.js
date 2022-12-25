let item = document.getElementById("item")
let size = document.getElementById("size")
let button = document.getElementById("btn")
let form = document.getElementById("form")
let product_array=[];
let data = ""
form.addEventListener("submit",function (e){
    e.preventDefault()


    // if(localStorage.getItem("PRODUCT")== null){
    //     localStorage.setItem("PRODUCT", '[]')
    // }
    product_array.push(item.value)
    product_array.push(size.value)
    localStorage.setItem("PRODUCT",JSON.stringify(product_array))
    JSON.parse(localStorage.getItem("PRODUCT"))
    console.log(JSON.parse(localStorage.getItem("PRODUCT")))
    // localStorage.setItem("data",JSON.parse(localStorage.getItem("PRODUCT")))
    item.value =""
    size.value =""
}
);



let btn1 = document.getElementById("btn1").addEventListener("click", function(){
    item.value = "WORLD CUP TROPHY"
    size.value = 1
})



// var mang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,17, 18, 19, 20,22];


// function a(){
//     let tong=0;
//     for(i=0;i<mang.length;i++){
//         if(mang[i]%2==0){
//             tong+=mang[i]
//         }
//     }
//     return tong
// }
// console.log(a())

// let string=String(window.prompt("nhập"))
// let b = string.charAt(0).toUpperCase() + string.slice(1)
// console.log(b)
