const showMenuBtn = document.querySelector('.hamburger'),
    closeMenuBtn = document.querySelector('.close-btn'),
    popupMenu = document.querySelector('.menu')


showMenuBtn.addEventListener('click', () => {
    popupMenu.classList.add('active')
});

closeMenuBtn.addEventListener('click', () => {
    popupMenu.classList.remove('active')
});


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
