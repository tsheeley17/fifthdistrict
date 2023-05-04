const menuBtn = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav');
const menuItem = document.querySelectorAll('.mobile-nav a');

// Add event listener to hamburger menu icon
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
});

// Add event listener to mobile navigation links
menuItem.forEach(item => {
    item.addEventListener('click', () => {
        menuBtn.classList.remove('is-active');
        mobileMenu.classList.remove('is-active');
    });
});

