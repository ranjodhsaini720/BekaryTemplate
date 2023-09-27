var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        100: {
            slidesPerView: 1,
            spaceBetween: 24,
            resistanceRatio: 0.85
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 24,
            resistanceRatio: 0.85
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 28,
            resistanceRatio: 0.85
        },
        980: {
            slidesPerView: 4,
            spaceBetween: 19,
            resistanceRatio: 0.85
        },
        1280: {
            slidesPerView: 5,
            spaceBetween: 32,
            resistanceRatio: 0
        }
    }
});

//  
//  

var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
    },
});

//
//

// window.onscroll = function () { scroll() };
// function scroll () {
//     if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
//         document.getElementById("nav").style.backgroundColor="#00091dac";
//         document.getElementById("nav").style.color="white";
//     }
//     else{
//         document.getElementById('nav').style.backgroundColor="white"
//     }
// }