
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



var timeout;


function circleChaptaKaro() {
    // define default scale value
    var xscale = 1;
    var yscale = 1;
  
    var xprev = 0;
    var yprev = 0;
  
    window.addEventListener("mousemove", function (dets) {
      clearTimeout(timeout); 
  
      xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
      yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);
  
      xprev = dets.clientX;
      yprev = dets.clientY;
  
      cursormove(xscale, yscale);
  
      timeout = setTimeout(function () {
        document.querySelector(
          "#cursor"
        ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
      }, 100);

    });
  }
  
  circleChaptaKaro()


function cursormove(xscale,yscale){
    
window.addEventListener("mousemove",function(dets){

    
    document.querySelector(
        "#cursor"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;



    })
}



function page1animation(){
var tl=gsap.timeline();

    tl.from("#nav",{
        y: "-10",
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
    })

    tl.from(".animatedbox h1,h2,h5",{
        y:-150,
        ease: Expo.easeInOut,
        duration: 2,
        delay:-1,
        stagger: 0.2,
    },"kp")


    tl.from("#page1footer",{
        y: -10,
      opacity: 0,
      duration: 1,
      
      
      ease: Expo.easeInOut,
    },"kp")

}
page1animation()

document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  

    elem.addEventListener("mouseenter", function(){

     

      elem.addEventListener("mousemove", function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;

        gsap.to(elem.querySelector("img"), {
          opacity: 1,
          ease: Power3,
          // transform:"translate(-50%,-50%)",
          top: diff,
          left: dets.clientX,
          rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
        });


    })
   
  
   
      
     


       elem.addEventListener("mouseleave", function () {
        gsap.to(elem.querySelector("img"), {
          opacity:0,
         
          ease: Power3,
          // transform:"translate(-50%,-50%)",
    
          
        });
      });


    });
  });
  