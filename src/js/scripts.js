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

function getData() {
    const goodsWrapper = document.querySelector('.goods');
    fetch('http://localhost:3000/db/new.json', {

    })
        .then((response) => {
            if (response.ok) {
                console.log('responce: ', response)
                return response.json();
            } else {
                throw new Error('Данные не были получены, ошибка: ' + response.status);
            }
        })
        .then((data) => {
            console.log(data)
            return data;
        })
        .catch((err) => {
            console.warn(err);
            goodsWrapper.innerHTML = '<div style="color: red; font-size: 30px">Упс, что-то пошло не так</div>';
        });
}

function renderCards(data) {
    const goodsWrapper = document.querySelector('.goods');
    console.log(data);
    data.goods.forEach((good) => {
        console.log(good);
        const card = document.createElement('div');
        card.className = 'col-12 col-md-6 col-lg-4 col-xl-3';
        card.innerHTML = `
                <div class="card" data-category="${good.category}">
                ${good.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
                       <div class="card-img-wrapper">
                             <span class="card-img-top"
                              style="background-image: url(${good.img})"></span>
                             </div>
                            <div class="card-body justify-content-between">
                          <div class="card-price style="${good.sale ? 'color:red' : ''}">${good.price} ₽</div>
                      <h5 class="card-title">${good.title}</h5>
                    <button class="btn btn-primary">В корзину</button>
                  </div>
                </div>
        `;
        goodsWrapper.appendChild(card);
    });

}

const db = getData()
renderCards(db);
