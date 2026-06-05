gsap.registerPlugin(ScrollTrigger);

const grid = document.querySelector(".grid_chapitre1");

gsap.to(grid, {
    x: () => -(grid.scrollWidth - window.innerWidth),
    ease: "none",
    scrollTrigger: {
        trigger: ".chapitre1",
        pin: true,
        scrub: 1,
        end: () => "+=" + (grid.scrollWidth - window.innerWidth),
        invalidateOnRefresh: true,
    },
});