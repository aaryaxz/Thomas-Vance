// Lenis
const lenis = new Lenis();

function chacha(time) {
  lenis.raf(time);
  requestAnimationFrame(chacha);
}
requestAnimationFrame(chacha);

// document.addEventListener("contextmenu", (e) => {
//   e.preventDefault();
// });

// Create Images

function createImage(){
  var container = document.querySelector(".elem")
  var colValue = [5, 2, 7, 4, 1, 3, 6, 8, 2, 5, 7, 4, 6, 1, 2, 8, 2, 5, 7, 4,5, 2, 7, 4, 1, 3, 6, 8, 2, 5, 7, 4, 6, 1, 2, 8, 2, 5, 7, 4]
  var imageCounter = 1
  var imgs = colValue.map(function(col,index){
      if(imageCounter>21){
        imageCounter=1
      }
      const html = `<div class= "images  img-${imageCounter} row-[${index}] col-[${col}]">
                  <img src="Assets/Images/img${imageCounter}.webp" alt="" class="mix-blend-difference"></img>
                </div>`
      imageCounter++;
      return html
  })
  container.innerHTML = imgs.join("")
  
}               
createImage() 
// Image Animation
var images = document.querySelectorAll(".images");
images.forEach(function (el) {
  var imgTag = el.querySelector("img");
  var tl = gsap.timeline();
  let xTransform = gsap.utils.random(-300, 300);

  tl.set(
    imgTag,
    {
      transformOrigin: `${xTransform < 0 ? 0 : "100%"}`,
    },
    "start"
  )
    .to(
      el,
      {
        scale: 0,
        duration: 2,
        scrollTrigger: {
          trigger: el,
          scrub: 1,
          start: "top top-=5%",
          end: "bottom bottom",
        },
      },
      "start"
    )
    .to(el, {
      xPercent: xTransform,
      scrollTrigger: {
        trigger: imgTag,
        scrub: true,
      },
    });
  console.log(imgTag);
});
