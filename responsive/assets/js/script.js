// let load = document.getElementById(load)
// onload = () =>{
//     setTimeout(() =>{
//         load.style.display='none'
//     }, 2500)
// }
/*=============== SHOW MENU ===============*/
let navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close'),
    header = document.getElementById('header');
const navLink = document.querySelectorAll('.nav__link');
/*===== MENU SHOW =====*/

/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', function navToggle() {
        navMenu.classList.add('show-menu')
    })
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', function navClose() {
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*  =======change background header======= */
function scrollHeader() {
    // when the scroll is greater than 50 viewport height,add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}
navLink.forEach(n => n.addEventListener('click', scrollHeader))

/* ====== MIXITUP FILTER PRODUCTS ===== */
let mixerProducts = mixitup('.products__content', {
    selectors: {
        target: '.products__card'
    },
    animation: {
        duration: 300
    }
});
/*  default filter products */
mixerProducts.filter('.delicacies')


/* link active products */
let linkProducts = document.querySelectorAll('.products__item')
function activeProducts() {
    linkProducts.forEach(user => user.classList.remove('active-product'))
    this.classList.add('active-product')
}
linkProducts.forEach(user => user.addEventListener('click', activeProducts))
/* ========= SCROLL SECTIONS ACTIVE LINK ======== */
function scrollUp() {
    let scrollUp = document.getElementById('scroll-up');

    // When the scroll is higher then 350 viewport height, add
    // the show-scroll class to the a tage with rhe scroll-top class
    if (this.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll')
    }

}
window.addEventListener('scroll', scrollUp)

/* ====== show scroll up ======*/
// === scroll section active link
let sections=document.querySelectorAll('section[id]')

function scrollActive(){
    let scrollY = window.pageYOffset
    sections.forEach(item =>{
        let setionHeight = item.offsetHeight,
        sectionTop = item.offsetTop - 58,
        sectionId = item.getAttribute('id')
        if(scrollY > sectionTop && scrollY <= sectionTop + setionHeight){
            document.querySelector('.nav__menu a[href*='+sectionId+']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*='+sectionId+']').classList.remove('active-link')

        }
    })
}

window.addEventListener('scroll', scrollActive
)