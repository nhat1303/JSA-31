// let name = window.prompt("Name: ")


// let age = window.prompt("Age: ")
// if (age%1==age){
//     window.alert("Tuổi nhập số")
// }

// console.log("Tên : " + name +"\n"+ "Tuổi: " + age);


// const person = {
//     name: "Nhat",
//      age: 12,
//      action: function abc(){
//         return "lam toan"
//      }
     
// }

// console.log(person)


// const Person ={
//     name: "Vu",
//     age: 17,
//     behave: "comic",
//     Dohomework : function(a,b) {
//     //   console.log("toi luoi lam bai tap")
    
//     return a+ ": "+ this.name+ ", " + b + ": " + this.age
//     }
    
//   } ;
//   console.log(Person)
//   console.log(Person.Dohomework("Name", "Age"))


// for (i=0; i<=150; i++){
//     // document.getElementById("text").innerHTML= i
//     document.write(i + " ")
// }

let acc = document.getElementById("acc").value
let pass = document.getElementById("pass").value
let form = document.getElementById("form")


form.addEventListener("click", function(e){
    e.preventDefault()
    let newUser = {
        username: acc,
        password: pass
    }
})