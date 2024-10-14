let menu = document.querySelector("#menu-icon");
let nav = document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    nav.classList.remove('active');
}
const header = document.querySelector("header")
window.addEventListener("scroll",function () {
    header.classList.toggle("sticky",window.scrollY>0);
})
const sr = ScrollReveal({
    distance:'45px',
    duration:2700,
    reset:true  
})

sr.reveal('.home-text',{delay:250, origin:'left'})
sr.reveal('.home-img',{delay:250, origin:'right'})
sr.reveal('.sub-service,.about,.service,.contact,.cta,.gallery,.contact-details',{delay:250, origin:'bottom'})

// email code
const form = document.querySelector(".contact_form");
const message = document.getElementById("message");
const name = document.getElementById("name");
const email = document.getElementById("email");
const submit = document.getElementById("submit")

submit.addEventListener('click',() => {
    var totalname = "Name: " + name;


})
