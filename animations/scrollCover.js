gsap.registerPlugin(ScrollTrigger, ScrollSmoother, RoughEase, ExpoScaleEase, SlowMo);

const tlAccueil = gsap.timeline({
    scrollTrigger: {
        trigger: ".cover", //quel élement trigger
        // markers: true, //aide au développement
        start: "top bottom",
        end: "center center+=100px", //position de fin du scroll
        scrub: true, //déroulé se retrouve dans barre d'avancement'
        invalidateOnRefresh: true
    }
})

const tlBeforeVisible = gsap.timeline({
    scrollTrigger: {
        trigger: ".cover", //quel élement trigger
        //markers: true, //aide au développement
        start: "top center",
        end: "center top", //position de fin du scroll
        scrub: true, //déroulé se retrouve dans barre d'avancement'
        //pin: true, //stick à la position
        invalidateOnRefresh: true
    }
})

const tlCenter = gsap.timeline({
    scrollTrigger: {
        trigger: ".cover", //quel élement trigger
        //markers: true, //aide au développement
        start: "center center",
        end: "bottom top", //position de fin du scroll
        scrub: true, //déroulé se retrouve dans barre d'avancement'
        pin: true, //stick à la position
        invalidateOnRefresh: true
    }
})

tlAccueil
    .to(".accueil", {opacity: 0, duration: 1.5})

tlBeforeVisible
    .add("step0")
    .to(".cropped_cover", {width : '60vw', duration : 2}, "step0")
    .to(".fade_scroll", {width: "60vw", duration: 2}, "step0")

tlCenter
    .add("basic")
    .to(".cropped_cover", {width: "60vw"}, "basic")
    .to(".fade_scroll", {width: "60vw"}, "basic")
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
