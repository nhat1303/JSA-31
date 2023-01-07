

let input = document.getElementById("input")
let btn = document.getElementById("btn")
let menu = ["rau xào", "thịt luộc", "gà rán"]

if (localStorage.getItem("Menu")==null){
    localStorage.setItem("Menu", JSON.stringify(menu))
}

    btn.addEventListener('click', function MAIN_FUNCTION(){
    if (input.value != "C"&& input.value !="R" && input.value != "U" && input.value != "D"){
         
            alert("Bạn cần nhập C, R, U, hoặc D")
        
        }
        
    

        localStorage.setItem("Menu", JSON.stringify(menu))
        // if (input.value!="C"|| input.value !="R" || input.value!="U" || input.value !="D"){
        //     alert("You must type C,R,U or D")
         if (input.value=="C"){
            Create()
            
        } else if ( input.value=="R"){
            Read()
        } else if (input.value =="U"){
            Update()
        } else if (input.value =="D"){
            Delete()
        }
    
    
        input.value=""


        
    })


    


function Create(){
    
        let a = window.prompt("Mời người dùng nhập thêm món ăn vào menu")
        menu.push(a)
        localStorage.setItem("Menu",JSON.stringify(menu) )



}

function Read(){
     alert(menu.join(", "))
}

function Update(){
    let old_food = window.prompt("Nhập món muốn update: ")
    for (i=0; i<=menu.length; i++){
        if( menu[i]== old_food){
            let new_food =  window.prompt("Nhập món mới : ")
            menu.splice(i,1,new_food)
            localStorage.setItem("Menu", JSON.stringify(menu))

            //  menu.push(new_food)
            // let delete_item = menu.indexOf(old_food)
            // delete menu[delete_item]

        }
    
    }
    
}


function Delete(){
    let delete_food = window.prompt("Nhập món muốn xoá : ")
    for (i=0; i<=menu.length; i++){
        if( delete_food == menu[i]){
            menu.splice(i,1)
            localStorage.setItem("Menu", JSON.stringify(menu))
            
        }
    }

}







