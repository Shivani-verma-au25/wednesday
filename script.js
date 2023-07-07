gsap.from("#nav h1,#nav-2 h6,#nav-3 i button,#nav-3 i,button",{
    y:50,
    duration:.5,
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
.from("#inner-container",{
    scrollTrigger:{
        trigger:"#page-2 h2,#page-2 p",
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