window.addEventListener('DOMContentLoaded', (event) => {
    const hamburger = document.getElementsByClassName('hamburger')[0];
    const headerMenu = document.querySelectorAll('.navBar__items')[0];
    const mainList = document.getElementsByClassName('Main')[0];
    const dropDown = document.getElementsByClassName('main-options')[0];

    function toggleMenu(element, className) {
        if (window.innerWidth <= 900 && !element.className.includes(className)) {
            element.classList.add(className)
        } else {
            element.classList.remove(className);
        }
    }

    hamburger.addEventListener('click', () => {
        toggleMenu(headerMenu, 'header-menu-active');
    });

    mainList.addEventListener('click', () => {
        toggleMenu(dropDown, 'mainList');
    });
});
