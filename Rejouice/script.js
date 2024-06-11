var page1 = document.querySelector(".top");

var cursor = document.querySelector(".cursor")


page1.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,

    })
})



const openMenu = document.querySelector(".menu")
const closemenu = document.querySelector(".closemenu")

const navbar = document.querySelector(".navbar")

openMenu.addEventListener("click",()=>{
    navbar.style.top="0%"
})
closemenu.addEventListener("click",()=>{
    navbar.style.top="-50%"
})



gsap.from(".hero-heading h1 span",{
    y:"100",
    opacity:0,
    stagger:.2,
})