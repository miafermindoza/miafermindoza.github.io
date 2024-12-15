// script.js
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'scale(1.05)';
            item.style.transition = 'transform 0.3s ease';
        });
        item.addEventListener('mouseout', () => {
            item.style.transform = 'scale(1)';
        });
    });
});
