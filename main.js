const icons = document.querySelector(".container-all .links .icon")
const ulelement = document.querySelector(".container-all ul")

icons.addEventListener("click",function() {
    if(ulelement.classList.contains("displayNone")){
        ulelement.classList.remove("displayNone")
    }else{
        ulelement.classList.add("displayNone")
    }
})
// if(ulelement.classList.contains("displayNone")){
//     icons.addEventListener("click",function(){
//         ulelement.classList.remove("displayNone")
// ulelement.classList.add("displayblock")
//     });
    // if(ulelement.classList.contains("displayblock")){
    //     icons.onclick = function () {
    //         ulelement.classList.remove("displayblock")
    //         ulelement.classList.add("displayNone")
    //         } 
    // }
// }else{
//     icons.addEventListener("click", function(){
//         ulelement.classList.add("displayNone")
//         ulelement.classList.remove("displayblock")
//     })
//     }

// let button = document.querySelector("btn")

// button.addEventListener("click", function(){
//     console.log("hello")

// })
