document.addEventListener("DOMContentLoaded", () => {
  var tl = gsap.timeline();

  tl.from(".grid-container img", {
    opacity: 0,
    y: -50,
    duration: 1,
  });

  tl.from(
    ".contact-section h2, .contact-section p",
    {
      opacity: 0,
      y: 60,
      duration: 0.5,
      stagger: 0.2,
    },
    0
  );

  gsap.registerPlugin(ScrollTrigger);

  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".map-section",
      scroller: "body",
      // markers: true,
      // start: "top 70%",
      // end: "top 20%",
      scrub: 2,
    },
  });

  tl2.from(".map-section iframe", {
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scale: 0.5,
  });
});
