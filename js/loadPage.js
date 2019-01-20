function loadPage(){
    $("#navPlaceholder").load("./HtmlCode/nav.html");
    $("#footerPlaceholder").load("./HtmlCode/footer.html");
   //   $("#navPlaceholder").load("http://localhost:8000/HtmlCode/nav.html");
  //  $("#footerPlaceholder").load("http://localhost:8000/HtmlCode/footer.html");
}



var slideIndex = 0;

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2500); // Change image every 2 seconds
}

var slideIndexN = 0;
function plusSlides(n) {
  showSlides(slideIndexN += n);
}

function currentSlide(n) {
  showSlides(slideIndexN = n);
}

// function showSlidesN(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndexN = 1}
//   if (n < 1) {slideIndexN = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndexN-1].style.display = "block";
//   dots[slideIndexN-1].className += " active";
//  setTimeout(showSlidesN(n+1), 2500); // Change image every 2 seconds

// }