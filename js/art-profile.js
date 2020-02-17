// here begins js for hamburger

const menuContainer = document.querySelector('.header-container');
let menuOpen = false;
menuContainer.addEventListener('click', () => {
    if(!menuOpen) {
        menuContainer.classList.add('open');
        menuOpen = true;
    } else {
        menuContainer.classList.remove('open');
        menuOpen = false;
    }
});

// <a class="links" href="#">Resume</a>

// const menuLinks = document.querySelector('.links');
// let menuOpen = false;
// menuLinks.addEventListener('click', () => {
//     if(!menuOpen) {
//         menuLinks.classList.add('open');
//         menuOpen = true;
//     } else {
//         menuLinks.classList.remove('open');
//         menuOpen = false;
//     }d
// });

// here ends js for hamburger





var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}