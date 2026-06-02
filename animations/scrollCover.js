gsap.registerPlugin(ScrollTrigger, ScrollSmoother, RoughEase, ExpoScaleEase, SlowMo);

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".cover", //quel élement trigger
        // markers: true, //aide au développement
        start: "bottom bottom",
        end: "+=1000px", //position de fin du scroll
        scrub: true, //déroulé se retrouve dans barre d'avancement'
        pin: true, //stick à la position
        invalidateOnRefresh: true
    }
})

tl
    .add("step1")
    .to(".cropped_cover", {width: "100vw", duration: 5}, "step1")
    .to(".fade_scroll", {width: "95%", duration: 5}, "step1")
    .add("step2")
    .to(".fade_scroll", {opacity: 0, duration : 1}, "step2")
    .to(".cropped_cover", {height: "80vh", duration: 2}, "step2")
    .add("step3")
    .to(".fade_scroll", {display: "none"})
    .to(".cropped_cover", {height: "100vh", duration: 2}, "step3")
    .to( ".accueil", {position: "relative"} )
