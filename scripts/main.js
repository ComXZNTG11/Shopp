let buyf = true

function buy(){
    if(buyf == true){
        document.getElementById("btn").style.background = "green"
        document.getElementById("btn").innerText = "В корзине"
        buyf = false
    }
    else{
        document.getElementById("btn").style.background = "#CE7205"
        document.getElementById("btn").innerText = "В корзину"
        buyf = true
    }
}

let btnTheme = document.querySelector(".theme")
btnTheme.addEventListener("click", function(){
    document.body.classList.toggle("dark_theme")
})

window.addEventListener("DOMContentLoaded", function(){
    document.querySelector("#btn-menu").addEventListener("click", function(){
        document.querySelector("#menu").classList.toggle("IsActive")
    })
})