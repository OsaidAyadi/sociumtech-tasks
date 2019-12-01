// let clicks = 1;
// function burgerMenu() {
//     let burgerlist = document.getElementById('burgerlist');
//     let navBar = document.getElementById('nav_items');
//      // console.log(window.matchMedia("(max-width: 990px)"))
//     var windowMatch = window.matchMedia("(max-width: 990px)");
//     if (windowMatch.matches){
//         console.log(navBar)
//         if (clicks%2!=0){
//         navBar.classList.add("itemsJS");
//         clicks++;
//         }else{
//         navBar.classList.remove("itemsJS");
//         // alert("Hello")
//         clicks++;}
//         // console.log(clicks);

//     }else
//     return;
// }

window.addEventListener('DOMContentLoaded', (event) => {
    const hamburger = document.getElementsByClassName('hamburger')[0];
    const headerMenu = document.querySelectorAll('.navBar__items')[0];
    const mainList = document.getElementsByClassName('Main')[0];
    const dropDown = document.getElementsByClassName('main-options')[0];
    console.log(dropDown)
    hamburger.addEventListener('click', (event) => {
        if (window.innerWidth <= 900 && !headerMenu.className.includes('header-menu-active')) {
            headerMenu.classList.add('header-menu-active')
        } else {
            headerMenu.classList.remove('header-menu-active');
        }
    });

    mainList.addEventListener('click' , (event) => {
        if (window.innerWidth <= 900 && !dropDown.className.includes('mainList')){
            dropDown.classList.add('mainList');
        }else{
            dropDown.classList.remove('mainList');
        }

    });

});