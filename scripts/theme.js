const SWITCH = document.querySelector(".switch_inp")

SWITCH.addEventListener("change", function(){
    if(this.checked){
        document.body.classList.add("dark_theme")
    }
    else{
        document.body.classList.remove("dark_theme")
    }
})