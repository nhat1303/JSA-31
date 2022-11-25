// let number= [2,11,16,7];
// let k=9;
// let a=" "
// let b=" "
// for ( let i = 0; i < number.length; i++){
//     a += number[i]
//     console.log(a)
// }


// for ( let y=0; y < number.length; y++){
//     b += number[y]
// }

// if (a + b ==9){
//     console.log("valid result")
// }else{
//     console.log("no satisfaction value exists")
// }









// let a= "abcba";
// let b= "tjkjk";

// if ( a== a.reverse() ){
//     console.log("True")

// } 



// function abc(a, b){
    
//     console.log(a + b)
// }
// abc("Quang", "Nhật")


// function xyz(){
//     console.log("Quang Nhật")
// }

// xyz()


// function mnb(a, b){
//     return a + b
// }

// console.log(mnb("Quang", "Nhật"))

let day_lon =Number(window.prompt("Độ dài đáy lớn :")) 
let day_be = Number(window.prompt("Độ dài đáy bé :"))
let chieu_cao = Number(window.prompt("Độ dài chiều cao :"))


function hinhthang(day_lon, day_be, chieu_cao){
    return 1/2*day_lon*(day_be + chieu_cao)
}


console.log("Diện tích hình thang " + hinhthang(day_lon, day_be, chieu_cao))