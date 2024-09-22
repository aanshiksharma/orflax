document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".about-us h1, .text h2, .text p", {
        opacity: 0,
        y: 60,
        duration: 0.4,
        stagger: 0.45
    });

    gsap.registerPlugin(ScrollTrigger);

    var tl = gsap.timeline({
        scrollTrigger:{
            trigger: '.lower_column',
            scroller: 'body',
            // markers: true,
            // start: "top 40%",
            // end: "top 20%",
            scrub: 2
        }
    })

    tl.from(".lower_column .text", {
        y:90,
        opacity:0,
        duration:0.5,
    })

    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger: '.commitment',
            scroller: 'body',
            // markers: true,
            // start: "top 70%",
            // end: "top 20%",
            scrub: 2
        }
        
    })
        tl2.from(".commitment", {
            y:90,
            opacity:0,
            duration:.8,
        })


});