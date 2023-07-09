
gsap.to("#nav h1,#nav-2 h6,#nav-3 i button,#nav-3 i,button",{
    y:30,
    duration:.11,
    stagger:.25,
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
        scroller:"body",
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
        scroller:"body",
        start:"top 40%",
        end:"top 60%",
        // markers:true,
        scrub:2
    },
    y:50,
    opacity:0,
    stagger:.25
})

let tl3 = gsap.timeline()
.from('#bar-menu ',{
scrollTrigger:{
    trigger:"#bar-menu",
    // trigger:"#bar h1,#bar p",
    scroller:"body",
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
        scroller:'body',
        star:'top 30%',
        end:'top 80%',
        // markers:true,
        scrub:5

    }
})

tl3.from("#page-3 h1",{
    scrollTrigger:{
    trigger:'#page-3 h1',
    scroller:'body',
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
        scroller:'body',
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