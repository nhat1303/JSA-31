let number = Number(window.prompt("Nhập 1 số bất kì từ 4-20: "))
let day_so = [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
function findEven(number,day_so){
    for (i=0; i<=day_so.length; i++){
        if(day_so[i]%2==0 & day_so[i] <= number){
            return "các số chẵn" +day_so[i] 
        }
    }
}
console.log(findEven(number,day_so))

    let rows=5;
    for (i=1; i<=rows;i++){
        let str =' ';
        for(let j=1; j<=i ;j++){
            str += "1"
        }
        console.log(str)
    }









