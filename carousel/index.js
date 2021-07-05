const slides = document.getElementsByClassName("carousel-item")
let slidePosition = 0
const totalSlides = slides.length

const nextSlide = document.getElementById("carousel-btn-next")
const prevSlide = document.getElementById("carousel-btn-prev")

nextSlide.addEventListener("click", moveToNextSlide )
prevSlide.addEventListener("click", moveToPrevSlide )


function moveToNextSlide() {
    hideAllSlides()
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0
    } else {
        slidePosition ++
    }

    slides[slidePosition].classList.add("carousel-item-visible")
}

function moveToPrevSlide() {
    hideAllSlides()
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1
    } else {
        slidePosition --
    }

    slides[slidePosition].classList.add("carousel-item-visible")
}

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove("carousel-item-visible")
        slide.classList.add("carousel-item-hidden")
    }
}
