gsap.registerPlugin(ScrollTrigger);
const sections=gsap.utils.toArray(".container .panel"),
    container=document.querySelector(".container");
gsap.to(sections,{
    xPercent:-100*(sections.length - 1),
    ease:"none",
    scrollTrigger: {
        trigger:".container",
        pin:true,
        scrub:1,
        snap:1 / (sections.length - 1),
        end:()=>"+="+container.offsetWidth,
    },
});
let tl=gsap.timeline({
    scrollTrigger:{
        trigger:'.animated-element',
        start:'top center',
        en:'bottom center',
        scrub:true,
        markers:false,
        toggleActions:'play reverse play reverse'

    }
    
})
tl.to('.animated-element',{x:800,duration:.3})
const lenis = new Lenis()

    lenis.on('scroll', (e) => {
    console.log(e)
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)