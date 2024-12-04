document.addEventListener("DOMContentLoaded", function() {
    const carouselTrack = document.querySelector('.carousel-track');
    const carouselItems = document.querySelectorAll('.hero');
    const totalItems = carouselItems.length;
    let currentIndex = 0;

    function moveToSlide(index) {
        const offset = -index * 100; 
        carouselTrack.style.transform = `translateX(${offset}%)`;
    }
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems; 
        moveToSlide(currentIndex);
    }
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems; 
        moveToSlide(currentIndex);
    }

    setInterval(nextSlide, 5000); 

    const prevButton = document.querySelector('#prevButton');
    const nextButton = document.querySelector('#nextButton');

    if (prevButton) {
        prevButton.addEventListener('click', prevSlide);
    }

    if (nextButton) {
        nextButton.addEventListener('click', nextSlide);
    }

    
    moveToSlide(currentIndex);
});
