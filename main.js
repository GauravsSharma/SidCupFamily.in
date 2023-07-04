let crsr = document.querySelector("#cursor")
let crsr2 = document.querySelector("#cursor-blur")
let allh4 = document.querySelectorAll("#nav li")
allh4.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    crsr.style.scale = 3
    crsr.style.border = "1px solid white"
    crsr.style.backgroundColor = "transparent"
  })
  elem.addEventListener("mouseleave",function(){
    crsr.style.scale = 1
    crsr.style.border = "none"
    crsr.style.backgroundColor = "#95c11e"
  })
})
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+30+"px"
    crsr.style.top = dets.y+"px"
    crsr2.style.left = dets.x - 250 + "px"
    crsr2.style.top = dets.y - 250 + "px"
})

gsap.to("#nav",{
    backgroundColor :"#000",
    duration:0.5,
    height:"80px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})
gsap.to("#main", {
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -40%",
        end:"top -80%",
        scrub:2
    }
})
gsap.from("#about-us img , #about-text",{
  y:50,
  opacity:0,
  duration:1,
  // stagger:0.4,
  scrollTrigger:{
    trigger:"#about-us",
    scroller:"body",
    start:"top 70%",
    end:"top 65%",
    scrub:3
  }
})
gsap.from(".card",{
  scale:0.8,
  y:50,
  opacity:0,
  duration:1,
  stagger:0.1,
  scrollTrigger:{
    trigger:".card",
    scroller:"body",
    start:"top 70%",
    end:"top 65%",
    scrub:2
  }
})
gsap.from("#colon1",{
 y:-70,
 x:-70,
  scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    start:"top 60%",
    end:"top 47%",
    scrub:3
  }
})
gsap.from("#colon2",{
 y:70,
 x:70,
  scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    start:"top 60%",
    end:"top 47%",
    scrub:3
  }
})
gsap.from("#page4 h1",{
 y:50,
  scrollTrigger:{
    trigger:"#page4 h1",
    scroller:"body",
    start:"top 75%",
    end:"top 70%",
    scrub:2
  }
})

let opennav = document.getElementById("opennav");
let closenav = document.getElementById("closenav");
let menu = document.getElementById("sidemenu");

opennav.addEventListener("click",function(){
    menu.style.right = "0px";
})
closenav.addEventListener("click",function(){
    menu.style.right = "-100%";
})