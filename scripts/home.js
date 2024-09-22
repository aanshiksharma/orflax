document.addEventListener("DOMContentLoaded", function() {

    gsap.registerPlugin(ScrollTrigger);

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.featured',
            scroller: 'body',
            // markers: true,
            // start: "top 9.5%",
            // end: "top -80%",
            scrub: 1.5,
            pin: true
        }
    });

    tl.to('.featured .container', {
        transform: "translate(-118%)"
    });

    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.industries',
            scroller: 'body',
            // markers: true,
            // start: "top 9.5%",
            // end: "top -80%",
            scrub: 1.5,
            pin: true
        }
    });
    
    tl2.to('.industries .container', {
        transform: "translate(-41%)"
    })

});

