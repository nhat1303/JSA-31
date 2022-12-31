// let btn_delete = document.createElement("button")
// let btn=document.getElementById("btn")
// let input = document.getElementById("todolist")
// let things_to_do =[]

// function AddItem(){
//     if(input.value!=""){
//         let btn_delete = document.createElement("button")
//         btn_delete.innerHTML="DELETE"

//         let content = document.createElement("h3");
//         let div = document.getElementById("item")
//         content=document.createTextNode(input.value)


//         div.appendChild(content)
//         div.appendChild(btn_delete)
    
//         document.getElementById("container").appendChild(div)
    
    
//         btn_delete.style.backgroundColor="red"
//         btn_delete.style.color="white"




//         things_to_do.push(input.value)
//         localStorage.setItem("TO_DO_LIST",JSON.stringify(things_to_do)  )
    
//         input.value =""
//     }
//    else{
//     alert("WRITE SOMETHING")
//    }
    
// }

// btn_delete.addEventListener("click",function(){
//     btn_delete.parentElement.remove()
// })



// btn.addEventListener("click",function(){
//     if(input.value==""){
//         alert("WRITE SOMETHING")
        
//     }
//     else{
        
//     }
   

// })



let btn_delete= document.getElementById("delete_btn ")
let btn=document.getElementById("btn");
let content =["DO HOMEWORK"]
localStorage.setItem("THINGS_TO_DO", JSON.stringify(content))

btn.addEventListener("click",function AddItem(){
    let input = document.getElementById("todolist")

    if(input.value !=""){
    
        let div=document.createElement("div")
        let btn_delete = document.createElement("button")
        div.className="item"
        btn_delete.innerHTML="Delete"
        btn_delete.className="delete_btn"
        let h3 =document.createElement("h3")
    
        h3.innerHTML= input.value
        // h3 = document.createTextNode(input.value)

    
        div.appendChild(h3)
        div.appendChild(btn_delete)
    
        // document.getElementById("item").appendChild(div)
        content.push(input.value)
        localStorage.setItem("THINGS_TO_DO", JSON.stringify(content))

        document.querySelector("#container").appendChild(div)
        input.value =""
      
      
        let delete_buttonlist= document.querySelectorAll(".delete_btn");
        console.log(delete_buttonlist)
        for(let i=0; i<delete_buttonlist.length; i++){

        delete_buttonlist[i].addEventListener("click", function(){
        console.log("Delete success")
        delete_buttonlist[i].parentElement.remove()


    })
}
    }
    
    else if(localStorage.getItem("Things_to_do"!=null)){
        content.push(input.value)
        localStorage.setItem("THINGS_TO_DO", JSON.stringify(content))
    }
    
    else{
        alert("You need to write something")
    }
})




// let delete_btn = document.getElementById("delete_btn")


// delete_btn.addEventListener("click",function(){
//     delete_btn.parentElement.remove()
    
// })

// let delete_buttonlist= document.querySelectorAll(".delete_btn");
// console.log(delete_buttonlist)
// for(let i=0; i<delete_buttonlist.length; i++){

//     delete_buttonlist[i].addEventListener("click", function(){
//         console.log("Delete success")
//         delete_buttonlist[i].parentElement.remove()
//     })
// }

