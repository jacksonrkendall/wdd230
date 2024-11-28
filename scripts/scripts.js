document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    menuToggle.addEventListener('click', () => {
        if (mainNav.classList.contains('show')) {
            mainNav.classList.remove('show');
            menuToggle.textContent = '≡';
        } else {
            mainNav.classList.add('show');
            menuToggle.textContent = 'X';
        }
    });
});
