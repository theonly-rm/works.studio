const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


function loading(){
    var tl = gsap.timeline()

tl.to("#yellow1",{
    top: "-100%",
    delay: 0.5,
    duration: 0.7,
    ease:"expo.out"
})
tl.from("#yellow2",{
    top: "100%",
    delay: 0.6,
    duration: 0.7,
    ease:"expo.out"
},"anim")
tl.to(".loader h1", {
    delay: 0.6,
    duration: 0.7,
    color: "black"
},"anim")
tl.to(".loader",{
    opacity: 0
})
tl.to(".loader",{
    display: "none"
})
}

loading();

let elems = document.querySelectorAll(".elem");

elems.forEach(function(ele){
    ele.addEventListener("mouseenter", function(){
        let bgimg = ele.getAttribute("data-img");
        document.querySelector(".part2").style.backgroundImage = `url(${bgimg})`;
        document.querySelector(".moving h5").style.opacity = "1";
    });
    ele.addEventListener("mouseleave", function() {
        document.querySelector(".part2").style.backgroundImage = 'none';
        document.querySelector(".part2").style.backgroundColor = 'black';
        document.querySelector(".moving h5").style.opacity = "0";
    });
});

elems.forEach(function(ele){
    ele.addEventListener("touchstart", function(){
        let bgimg = ele.getAttribute("data-img");
        document.querySelector(".part2").style.backgroundImage = `url(${bgimg})`;
    });
    ele.addEventListener("touchend", function() {
        document.querySelector(".part2").style.backgroundImage = 'none';
        document.querySelector(".part2").style.backgroundColor = 'black';
    });
});
    

document.querySelector(".foot-up").addEventListener("click", function(){
    scroll.scrollTo(0);
})

document.querySelector(".scroll-down").addEventListener("click", function(){
    scroll.scrollTo(740);
})


