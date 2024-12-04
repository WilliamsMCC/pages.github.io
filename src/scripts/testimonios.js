document.addEventListener("DOMContentLoaded", () => {
    const list = document.querySelector(".testimonios__list"); 
    const items = document.querySelectorAll(".testimonios__item"); 
    const totalItems = items.length; 

    let currentIndex = 0; 
    const itemWidth = 320; 
    function moveRight() {
        currentIndex++;
        if (currentIndex >= 3) {
            currentIndex = 0;
        }
        updateSlider();
    }
    function moveLeft() {
        currentIndex--;
        if (currentIndex < 4) {
            currentIndex = totalItems - 3; 
        }
        updateSlider();
    }
    function updateSlider() {
        const offset = -currentIndex * itemWidth;
        list.style.transition = "transform 0.5s ease";
        list.style.transform = `translateX(${offset}px)`;
    }

    function startContinuousMovement() {
        setInterval(() => {
            moveRight(); 
        },2000); 
    }

    updateSlider();

    startContinuousMovement();
});
