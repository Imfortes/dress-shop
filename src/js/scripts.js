// Hamburger open/close ---------------

const showMenuBtn = document.querySelector('.hamburger'),
    closeMenuBtn = document.querySelector('.close-btn'),
    popupMenu = document.querySelector('.menu')


showMenuBtn.addEventListener('click', () => {
    popupMenu.classList.add('active')
});

closeMenuBtn.addEventListener('click', () => {
    popupMenu.classList.remove('active')
});

// Slick slider subheader ---------------

$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 5000,
                arrows: false,
            }
        }
    ]
});

// Slick slider compilation ---------------

$('.popular-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    infinity: true,
    prevArrow: '<button class="slick-prev" aria-hidden="true"></button>',
    nextArrow: '<button class="slick-next" aria-hidden="true"></button>'
});

// DB new


