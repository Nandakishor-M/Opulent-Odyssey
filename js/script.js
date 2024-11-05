


window.onload = function() {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1); // Adjust the delay as needed
};

window.addEventListener('scroll', () => {
    const heroTitle = document.querySelector('.hero-title');
    const scrollThreshold = 300; // Adjust this value to control the scroll distance
  
    if (window.scrollY >= scrollThreshold) {
      heroTitle.classList.add('vanish');
    } else {
      heroTitle.classList.remove('vanish');
    }
});

// hello

const logoImages = document.querySelectorAll('.logo-image');
const screenWidth = window.innerWidth;

console.log(screenWidth);

logoImages.forEach(logoImage => {
    logoImage.addEventListener('mouseover', () => {
        logoImages.forEach(img => {
            img.style.animationPlayState = 'paused';
        });
    });

    logoImage.addEventListener('wheel', () => {
        logoImages.forEach(img => {
            img.style.animationPlayState = 'running';
        });
    });

    logoImage.addEventListener('mouseout', () => {
        logoImages.forEach(img => {
            img.style.animationPlayState = 'running';
        });
    });
});




'use strict';

const carouselItems = document.querySelectorAll('.testimonial_card');
console.log(carouselItems)
let currentItem = document.querySelector('.main-item');
const leftBtn = document.querySelector('#leftBtn');
const rightBtn = document.querySelector('#rightBtn');


rightBtn.addEventListener('click', function() {
    currentItem = document.querySelector('.right-item');
    const leftItem = document.querySelector('.main-item');
    carouselItems.forEach((item,i) => {
        item.classList = 'testimonial_card';
    });
    currentItem.classList.add('main-item');
    leftItem.classList.add('left-item');
    const currentId = Array.from(carouselItems).indexOf(currentItem);
    const rightItem = currentId === carouselItems.length -1 ? carouselItems[0] : carouselItems[currentId +1];
    rightItem.classList.add('right-item');
});

leftBtn.addEventListener('click', function() {
    currentItem = document.querySelector('.left-item');
    const rightItem = document.querySelector('.main-item');
    carouselItems.forEach((item,i) => {
        item.classList = 'testimonial_card';
    });
    currentItem.classList.add('main-item');
    rightItem.classList.add('right-item');
    const currentId = Array.from(carouselItems).indexOf(currentItem);
    const leftItem = currentId === 0 ? carouselItems[carouselItems.length-1] : carouselItems[currentId-1];
    leftItem.classList.add('left-item');
});


const toggleButton = document.querySelector('.toggle-button');
const navbar = document.getElementById('navbar');
const navbarElements = document.querySelector('.navbar-elements');
const navbarLi = document.querySelectorAll('li');
const testimonialCard = document.querySelector(".testimonial_card");

toggleButton.addEventListener('click', () => {
    if (navbar.style.display === 'none') {
        navbar.style.display = 'block';
        navbar.classList.add('navbarMobile');
        navbarElements.classList.add('navbar-element-mobile');
        testimonialCard.style.zIndex= '-1';
        navbarLi.forEach((li)=>{
            li.style.marginTop ="20px";
            li.style.fontSize = "18px";
            li.style.borderBottom = "1px solid white";
            li.style.marginBottom = "10px";
        });

    } else {
        navbar.style.display = 'none';
    }
    navbarElements.addEventListener('click', ()=>{
        navbar.style.display = 'none';
    })
}); 

toggleButton.addEventListener('click', ()=>{
    navbar.classList.add('show');
});



const carouselLogos = document.querySelectorAll('.logos');
console.log(carouselLogos)
let currentLogo = document.querySelector('.main-logo');
const leftLogoBtn = document.querySelector('#leftLogoBtn');
const rightLogoBtn = document.querySelector('#rightLogoBtn');


rightBtn.addEventListener('click', function() {
    currentLogo = document.querySelector('.right-logo');
    const leftLogo = document.querySelector('.main-logo');
    carouselLogos.forEach((item,i) => {
        item.classList = 'logo-image';
    });
    currentLogo.classList.add('logo-image');
    leftLogo.classList.add('logo-image');
    const currentId = Array.from(carouselLogos).indexOf(currentLogo);
    const rightLogo = currentId === carouselLogos.length -1 ? carouselLogos[0] : carouselLogos[currentId +1];
    rightLogo.classList.add('logo-image');
});

leftBtn.addEventListener('click', function() {
    currentLogo = document.querySelector('.left-logo');
    const rightLogo = document.querySelector('.main-logo');
    carouselLogos.forEach((item,i) => {
        item.classList = 'logos';
    });
    currentLogo.classList.add('logo-image');
    rightLogo.classList.add('logo-image');
    const currentId = Array.from(carouselLogos).indexOf(currentLogo);
    const leftLogo = currentId === 0 ? carouselLogos[carouselLogos.length-1] : carouselLogos[currentId-1];
    leftLogo.classList.add('logo-image');
});



