// Lococmotive code start
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();





// Lococmotive code end

// gsap or scrollTrigger
gsap.to("#nav h1,#nav h6,#nav h4,#nav h3,#nav #btn1,#nav #btn2",{
    y:10,
    duration:.1,
    stagger:.2,
    opcity:0
})

let tz = gsap.timeline()

tz.from("#center h2,#center h1,#center p",{
    y:100,
    opacity:0,
    stagger:.25
})
.from("#first",{
    y:100,
    opacity:0,
    stagger:.25
})

// second page-2
let tz2 = gsap.timeline()
tz2.from("#page-2 h2,#page-2 p",{
    scrollTrigger:{
        trigger:"#page-2 h2,#page-2 p",
        scroller:"#main",
        start:"top 40%",
        end:"top 60%",
        // markers:true,
        scrub:2
    },
    y:100,
    opacity:0,
    stagger:.25
})
.from("#inner-container .elem",{
    scrollTrigger:{
        trigger:"#inner-container .elem",
        scroller:"#main",
        start:"top 40%",
        end:"top 60%",
        // markers:true,
        scrub:1
    },
    y:100,
    opacity:0,
    // stagger:0.5
})

let tl3 = gsap.timeline()
.from('#bar-menu ',{
scrollTrigger:{
    trigger:"#bar-menu",
    // trigger:"#bar h1,#bar p",
    scroller:"#main",
    start:"top 50%",
    end:"top 80%",
    // markers:true,
    scrub:2
},
    y:50,
    opacity:0,
    duration:1,
    stagger:.2
})
tl3.from('.fill',{
    x:-100,
    // innerWidth:'100%',
    duration:2,
    opacity:0,
    stagger:.21,
    scrollTrigger:{
        trigger:'.fill',
        scroller:'#main',
        star:'top 30%',
        end:'top 80%',
        // markers:true,
        scrub:5

    }
})

tl3.from("#page-3 h1",{
    scrollTrigger:{
    trigger:'#page-3 h1',
    scroller:'#main',
    start:'top 20%',
    end:'top 30%',
    // markers:true,
    scrub:2
    },
    y:30,
    opacity:0,
    durtion:1,
    stagger:.10
})
tl3.from(".card",{
    scrollTrigger:{
        trigger:'.card',
        scroller:'#main',
        start:"top 30%",
        end:"top 100%",
        // markers:true,
        scrub:5
    },
    y:30,
    opacity:0,
    stagger:0.25,
    duration:1.2
})

// page-4
tl3.from('#page-4 h2',{
    x:-1000,
    y:150,
    duration:.1,
    opacity:0,
    stagger:.25,
    scrollTrigger:{
        trigger:'#page-4 h2',
        scroller:'#main',
        start:"top 20%",
        end:"top 70%",
        scrub:5
    }
})
tl3.from('#page-4 p',{
    x:1000,
    y:150,
    duration:1,
    // scale:0,
    opacity:0,
    stagger:.25,
    color:"#FF5858",
    scrollTrigger:{
        trigger:'#page-4 p',
        scroller:'#main',
        start:"top 50%",
        end:"top 70%",
        scrub:4
    }
})

tl3.from('#wrapper-3 ',{
    y:200,
    duration:1,
    opacity:0,
    stagger:.2,
    scrollTrigger:{
        trigger:'#wrapper-3 .card-3',
        scroller:'#main',
        start:"top 50%",
        end:"top 90%",
        scrub:3,
        // markers:true
    }
})
tl3.from('#page-5',{
    y:200,
    dutation:1.2,
    opacity:0,
    scrollTrigger:{
        trigger:'#page-5',
        scroller:'#main',
        // markers:true,
        start:'top 50%',
        end:'top 30%',
        scrub:4
    }
})

// card

let card = document.querySelector('h3 ')
let shop_card = document.querySelector('#shop-card')
console.log(shop_card);
let flag = 0

card.addEventListener('click',function(e){
    if (flag == 0) {
        shop_card.style.display = 'initial'
        card.innerHTML = '<i class="ri-close-line"></i>'
        flag = 1
    } else {
        shop_card.style.display = 'none'
        card.innerHTML = '<i class="ri-shopping-cart-fill"></i>'
        flag = 0
    }
})

// slide menu
let menu = document.querySelector('#nav-3 h4')
let slide = document.querySelector('#slide-menu')
console.log(slide);
let flag1 = 0

menu.addEventListener('click',function(e){
    if (flag1 == 0) {
        slide.style.left = 0
        menu.innerHTML = '<i class="ri-close-circle-fill"></i>'
        flag1 = 1
    } else {
        slide.style.left = '-100%'
        menu.innerHTML = '<i id="menu" class="ri-menu-fold-fill"></i>'
        flag1 = 0
    }
})

// cursor
let cur = document.querySelector('#cursor')
let main = document.querySelector('#main')

main.addEventListener('mousemove',function(dets){
    // console.log(dets.x);
    cur.style.left = `${dets.x}px`
    cur.style.top = `${dets.y}px`
})


// nav hover effect
// console.log(nav);
let nav = document.querySelectorAll('#nav #nav-2 h6')
nav.forEach(function(item){
    item.addEventListener('mouseenter',function(){
        item.style.color = '#FF5858'
    })
    item.addEventListener('mouseleave',function(){
        item.style.color = '#151B31'
    })
})
// nav.addEventListener('mouseenter',function(e){
//     nav.style.color = 'yellow'
// })


