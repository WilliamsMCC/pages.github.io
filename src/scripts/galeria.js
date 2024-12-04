document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.querySelector('.gallery');
    const images = gallery.querySelectorAll('.image-container img');

    const modal = document.createElement('div');
    modal.classList.add('modal');
    const modalImg = document.createElement('img');
    modal.appendChild(modalImg);
    document.body.appendChild(modal);

    images.forEach((img) => {
        img.addEventListener('click', () => {
            modalImg.src = img.src;
            modal.style.display = 'flex';
        });
    });

    modal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});