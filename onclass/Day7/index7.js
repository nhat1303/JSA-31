








// let person_list=[]
// let check = JSON.parse(localStorage.getItem("listUser"))
// if(check==null){
//    localStorage.setItem("listUser", JSON.stringify(person_list))
//    window.location.reload
// }
// else{

// let list= JSON.parse(localStorage.getItem("listUser"))
// let btn = document.getElementById("btn")
// btn.addEventListener("click", function (){
//     let USER_ID= []
//     let usernameIP = document.getElementById("username").value;
//     let passwordIP = document.getElementById("password").value;

//     USER_ID ={
//         username : usernameIP,
//         password : passwordIP
//     }
    

//     localStorage.setItem("listUser",JSON.stringify(USER_ID) )


//     // if(check.length<1){
//     //     list.push(USER_ID)
//     //     localStorage.setItem("listUser",JSON.stringify(list) )
//     //     alert("CREATE SUCCESSFUL")

//     // }
//     // else if(checkValiduser==false){
//     //     list.push(USER_ID)
//     //     localStorage.setItem("listUser",JSON.stringify(list))
//     //     alert('CREATE SUCCESSFUL')
//     // }
//     // else{
//     //     alert("CREATE UNSUCCESSFUL")
//     // }


//     usernameIP =""
//     passwordIP =""

// })





// function checkValiduser(){
//     let array_User = JSON.parse(localStorage.getItem("list_User"))
//     let username = document.getElementById('username').value;

//     for (i=0; i<array_User.length;i++){
//         if( array_User[i].username == username){
//             return false
//         }
//     }
//     return true

// }

// }

let list_person_object = [];
let t = JSON.parse(localStorage.getItem("listUser"));
if (t == null) {
  localStorage.setItem("listUser", JSON.stringify(list_person_object));
  window.location.reload();
} else {
  let list = JSON.parse(localStorage.getItem("listUser"));

  let btn = document.querySelector(".form button");
  btn.addEventListener("click", function () {
    let newUser = {};
    let usernameInput = document.getElementById("username").value;
    let passwordInput = document.getElementById("password").value;

    newUser = {
      username: usernameInput,
      password: passwordInput,
    };

    if (list.length < 1) {
      list.push(newUser);
      localStorage.setItem("listUser", JSON.stringify(list));
      alert("Create successful");
    } else {
      if (checkValidUser() == true) {
        list.push(newUser);
        localStorage.setItem("listUser", JSON.stringify(list));
        alert("Create successful");
      } else {
        alert("User existed");
        window.location.reload();
      }
    }

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  });
}



function checkValidUser() {
  let user = document.getElementById("username").value;
  console.log(user);
  let arrayUsers = JSON.parse(localStorage.getItem("listUser"));
  for (let i = 0; i < arrayUsers.length; i++) {
    if (arrayUsers[i].username !== user) {
      console.log(arrayUsers[i].username);
      return true;
    } else {
      return false;
    }
  }
  return false;
}