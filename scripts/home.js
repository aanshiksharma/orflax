document.addEventListener("DOMContentLoaded", function() {

    gsap.registerPlugin(ScrollTrigger);

    // Function to add animations if screen width is more than 768px
    function setupAnimations() {
        if (window.innerWidth >= 768) {
            
            // Featured section animation
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
    
            // Industries section animation
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
            });
        }
    }
    setupAnimations();
    window.addEventListener('resize', function() {
        
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        
        setupAnimations();
    });

});
