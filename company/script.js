document.addEventListener('DOMContentLoaded', () => {
    const carouselInner = document.querySelector('.carousel-inner');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let slideIndex = 0;

    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    function showSlides() {
        carouselInner.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    prevButton.addEventListener('click', () => {
        if (slideIndex > 0) {
            slideIndex--;
        } else {
            slideIndex = totalSlides - 1;
        }
        showSlides();
    });

    nextButton.addEventListener('click', () => {
        if (slideIndex < totalSlides - 1) {
            slideIndex++;
        } else {
            slideIndex = 0;
        }
        showSlides();
    });
});
