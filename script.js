
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

let tl3 = gsap.timeline()
.from('#bar',{
scrollTrigger:{
    trigger:"#page-2 #bar",
    // trigger:"#bar h1,#bar p",
    scroller:"body",
    start:"top 40%",
    end:"top 60%",
    // markers:true,
    scrub:2
},
    y:60,
    opacity:0,
    stagger:.20
})
.to('#bar>#left #left #fill1',{
    scrollTrigger:{
        trigger:'#left',
        scroller:'body',
        start:"top 30%",
        start:"top 60%",
        // markers:true,
        scrub:3
    },
    width:'95%',
    backgroundColor:"#151B31",
    opacity:0,
    stagger:.10
})
.from("#page-3 h1",{
    scrollTrigger:{
        trigger:'#page-3 h1',
        scroller:"body",
        start:"top 30%",
        start:"top 50%",
        // markers:true,
        scrub:3
    },
    y:50,
    stagger:.24,
    opacity:0,
})
.from("#wrapper-2 .card",{
    scrollTrigger:{
    trigger:'#wrapper-2 .card',
    scroller:"body",
    start:"top 15%",
    start:"top 100%",
    // markers:true,
    scrub:1
    },
    y:10,
    opacity:0,
    // stagger:.15
})