document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".message-wrapper1 .message-text h2, .message-wrapper1 .message-text p ", {
        opacity: 0,
        y: 60,
        duration: 0.4,
        stagger: 0.45
    });

    gsap.registerPlugin(ScrollTrigger);

    var tl = gsap.timeline({
        scrollTrigger:{
            trigger: '.message-wrapper2',
            scroller: 'body',
            // markers: true,
            // start: "top 70%",
            // end: "top 10%",
            scrub: 2
        }
    })

    tl.from(".message-wrapper2 .message-text p", {
        y:60,
        opacity:0,
        duration:2,
        stagger: 0.45
    })

});
