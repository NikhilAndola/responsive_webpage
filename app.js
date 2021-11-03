const menu  = document.getElementById("menu");
const resBar = document.getElementsByClassName("res-bar")[0];

menu.addEventListener("click",()=> {
    resBar.classList.toggle("active");
})