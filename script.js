const nav = document.getElementById('navbar');
const open = document.getElementById('open');
const close = document.getElementById('close');

open.addEventListener("click", () =>{
    nav.classList.add("visible");
    
})

close.addEventListener("click", () =>{
    nav.classList.remove("visible");

})