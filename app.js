document.addEventListener('DOMContentLoaded', () => {
    const thumbnail = document.querySelector('.row');

    // Toggle zoomed-in class on click
    thumbnail.addEventListener('click', () => {
        thumbnail.classList.toggle('zoomed');
    });
});
