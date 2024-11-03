const lenis = new Lenis();

function chacha(time) {
    lenis.raf(time);
    requestAnimationFrame(chacha);
}

requestAnimationFrame(chacha);

var images = document.querySelectorAll(".images");

images.forEach(function (el) {
    var imgTag = el.querySelector("img");
    var tl = gsap.timeline();
    let xTransform = gsap.utils.random(-100, 100);

    tl
        .set(imgTag, {
            transformOrigin: `${xTransform < 0 ? 0 : "100%"}`,
        },"start")
        .to(el,{
            scale: 0,
            duration: 2,
            scrollTrigger: {
                trigger: el,
                scrub: 1,
                start: "top top-=5%",
                end: "bottom bottom",
                },
            },"start")
        .to(el,{
            xPercent:xTransform,
            scrollTrigger:{
                trigger: imgTag,
                scrub: true,                
            }
        })
        console.log(imgTag)
});
