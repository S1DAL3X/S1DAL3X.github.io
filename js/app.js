const sliderMain = new Swiper('.slider__main', {
    freeMode: true,
    centeredSlides: true,
    mousewheel: true,
    parallax: true,
    breakpoints: {
        0: {
            slidesPerView: 1.5,
            spaceBetween: 20
        },
        680: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1400: {
            slidesPerView: 3.5,
            spaceBetween: 60
        }
    }
})

const sliderBg= new Swiper('.slider__bg', {
    centeredSlides: true,
    parallax: true,
    spaceBetween: 60,
    slidesPerView: 3.5
})

sliderMain.controller.control = sliderBg;

document.querySelectorAll('.slider__item').forEach(item => {
    item.addEventListener('click', event => {
        /* Добавление класса при клике и удаление его при втором клике */
        item.classList.toggle('opened');
    });
});


let desc = document.querySelector('.description');

sliderMain.on('slideChange', e => {
    /* Упрощенная форма записи if - else */
    sliderMain.activeIndex > 0 ? desc.classList.add("hidden") : desc.classList.remove("hidden");
});