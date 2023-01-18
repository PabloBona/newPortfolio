const iconMenu = document.querySelector(".bx-menu");
const menu = document.querySelector(".menu");
const darkMode = document.querySelector(".switch");
iconMenu.addEventListener("click", function () {
    console.log(menu.classList.toggle("menu-show"));
});



 

darkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    darkMode.classList.toggle("active");
})

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

//Two Faces
VanillaTilt.init(document.querySelector("#image-comparison-slider"), { // Tilt Effect - vanilla-tilt.js (https://micku7zu.github.io/vanilla-tilt.js/) is required for this
    max: 5, // max tilt rotation (degrees (deg))
    speed: 800, // speed (transition-duration) of the enter/exit transition (milliseconds (ms))
    scale: 1.02 // transform scale - 2 = 200%, 1.5 = 150%, etc..
  });
  
  const slider = document.querySelector("#image-comparison-slider");
  const sliderImgWrapper = document.querySelector("#image-comparison-slider .img-wrapper");
  const sliderHandle = document.querySelector("#image-comparison-slider .handle");
  
  slider.addEventListener("mousemove", sliderMouseMove);
  slider.addEventListener("touchmove", sliderMouseMove);
  
  function sliderMouseMove(event) {
  
    if(isSliderLocked) return;
  
    const sliderLeftX = slider.offsetLeft;
    const sliderWidth = slider.clientWidth;
    const sliderHandleWidth = sliderHandle.clientWidth;
  
    let mouseX = (event.clientX || event.touches[0].clientX) - sliderLeftX;
    if(mouseX < 0) mouseX = 0;
    else if(mouseX > sliderWidth) mouseX = sliderWidth;
  
    sliderImgWrapper.style.width = `${((1 - mouseX/sliderWidth) * 100).toFixed(4)}%`;
    sliderHandle.style.left = `calc(${((mouseX/sliderWidth) * 100).toFixed(4)}% - ${sliderHandleWidth/2}px)`;
  }
  
  let isSliderLocked = false;
  
  slider.addEventListener("mousedown", sliderMouseDown);
  slider.addEventListener("touchstart", sliderMouseDown);
  slider.addEventListener("mouseup", sliderMouseUp);
  slider.addEventListener("touchend", sliderMouseUp);
  slider.addEventListener("mouseleave", sliderMouseLeave);
  
  function sliderMouseDown(event) {
    if(isSliderLocked) isSliderLocked = false;
    sliderMouseMove(event);
  }
  
  function sliderMouseUp() {
    if(!isSliderLocked) isSliderLocked = true;
  }
  
  function sliderMouseLeave() {
    if(isSliderLocked) isSliderLocked = false;
  }

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i]  = dots[i].replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1]  += " active";
}

/* Small Pic SlideShow */
