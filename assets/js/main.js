const counter = document.querySelectorAll(".count-animation");
const interval = 5000;

counter.forEach(e => {
    let start = 0;
    let end = e.dataset.count;
    const duration = Math.floor(interval / end);
    let co = setInterval(() => {
        start += 1;
        e.innerHTML = start;
        if (start == end) return clearInterval(co)
    }, duration);
})

$('.offer').owlCarousel({
    margin:20,
    nav:false,
    dots:true,
    autoHeight:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})

$('.hero').owlCarousel({
    loop: true,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


// close header

const close = document.querySelector("#close"),
open = document.querySelector("#burger"),
menu = document.querySelector("#menu"),
overlay = document.querySelector(".overlay");

open.addEventListener("click",()=>{
    document.body.classList.add("hide");
    setTimeout(()=>{
        menu.classList.add("show");
    },200)
    overlay.style.opacity = 1;
    overlay.style.visibility = "unset";
})

close.addEventListener("click",()=>{
    document.body.classList.remove("hide");
    menu.classList.remove("show");
    overlay.style.opacity = 0;
    overlay.style.visibility = "hidden";
})