Dobar dan!

Herein this file is a brief description of this work-in-progress site.
My passion for a long time has been art, and during my time at
Codeup (full-time web development), I thought: why not combine
art and coding? So, I created this site to showcase some of my drawn
art, and a bit of my creativity via coding.

There is a quirky and abstract hamburger which contains links to additional
info:

![image](https://user-images.githubusercontent.com/56378424/85232847-f516d700-b3c7-11ea-90a5-365b0dffa982.png)

The code for the hamburger is below: 

```
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
```

The right-hand side of the burger shifts in color to indicate clicking on it
and also has cursor:pointer affiliated to it. Once clicked, the burger will
slide open and the below will be available:

![image](https://user-images.githubusercontent.com/56378424/85232879-47f08e80-b3c8-11ea-942a-5f666c7b058c.png)

EXP = Experience (LinkedIn)
RES = Resume (PDF)
GIT = GitHub (profile)

On the other side is a CSS-constructed set of divs which change in rotation speed upon hover

![image](https://user-images.githubusercontent.com/56378424/85233862-36f74b80-b3cf-11ea-95a9-a119419172b3.png)

Further down on the page is a slide-show container created with JS; below is its code:

```
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
```

All of the movement on the page outside of the JS is achieved via CSS keyframe animations.

If you have any questions, or wish to collaborate on any type of project together, please
let me know:  sinisa.tesic210@gmail.com