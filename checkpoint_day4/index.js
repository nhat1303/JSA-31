// let number = Number(window.prompt("Nhập 1 số bất kì từ 4-20: "))
// let day_so = []
// function findEven(number,day_so){
//     for (i=0; i<=number ; i++){
//         if(i%2==0 & i <= number){
//             return "các số chẵn" +  day_so.push(i)
//         }
//     }
// }
// console.log(findEven(day_so))

//     let rows=5;
//     for (i=1; i<=rows;i++){
//         let str =' ';
//         for(let j=1; j<=i ;j++){
//             str += "1"
//         }
//         console.log(str)
//     }

// let a= [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// let number = Number(window.prompt("Nhập số từ 4-->20"))

// function findNumber(number,a){
//     for(i=0;i<=a.length;i++){
//         if(a[i]%2==0 & a[i]<=number){
//             console.log(a[i])
//         }
//     }
// }

// console.log(findNumber(number,a))



let number = Number(window.prompt("Nhập số 4-20"));
function Findnumber(){
    for(i=4;i<=number;i++){
        if(i%2==0){
            console.log(i)
        }
    }
}



console.log(Findnumber())

let color = document.querySelector(".color");
color.addEventListener("mouseover",function(){
    color.style.backgroundColor = "orange"
})

color.addEventListener("mouseout", function b(){
    color.style.backgroundColor = "yellow"
})

