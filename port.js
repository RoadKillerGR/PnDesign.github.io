// Gallery Lightbox
function openModal() {
  document.getElementById("myModal_port_gall").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal_port_gall").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");

  // Handle keyboard arrow and escape key navigation
  document.onkeydown = function (event) {
    event = event || window.event;
    if (event.keyCode == 37) {
      plusSlides(-1); // Left arrow key
    } else if (event.keyCode == 39) {
      plusSlides(1); // Right arrow key
    } else if (event.keyCode == 27) {
      closeModal(); // Escape key
    }
  };

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
        
// Top Button
let mybutton = document.getElementsByClassName("top_btn");

window.onscroll = function() {scrollFunction()};   
function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
mybutton.style.display = "block";
} else {
mybutton.style.display = "none";
}}

function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}