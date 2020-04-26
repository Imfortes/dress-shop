

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

// Render Product Item

function renderCards(data) {
    const goodsWrapper = document.querySelector('.products');
    console.log(goodsWrapper.parentElement)
    data.goods.forEach((good) => {
        const card = document.createElement('div');
        card.className = 'products__item';
        card.setAttribute('data-category', good.category);
        card.setAttribute('data-id', good.id);

        if (goodsWrapper.parentElement.classList[1] === good.category || goodsWrapper.parentElement.classList[1] === good.new){
            card.innerHTML = `

            <figure class="products__item-img">
                <img src="${good.image}" alt="">
            </figure>
                             
            <div class="products__item-text">

                <div class="products__item-text-price ">
                    <span style="${good.sale ? 'color:red' : ''}" class="products__item-text-price-new">${good.new ? good.newPrice = good.oldPrice : good.newPrice} ₽ </span>
                    <span style="${good.new ? 'display:none' : ''}" class="products__item-text-price-old">${good.oldPrice} ₽ </span>
                </div>
                
                <div class="products__item-text-description">
                    <h5 class="products__item-text-title">${good.title}</h5>
                    <h5 class="products__item-text-size">Размер ${good.size}</h5>
                </div>
                
                <button class="products__item-btn">Купить</button>

                </div>
                
            </div>
        `;
        }
        else {
            card.style.display = 'none'
        }




        goodsWrapper.appendChild(card);
    });
}

renderCards(newDB)


// Search

function search() {
    const cards = document.querySelectorAll('.products__item');

    const goods = document.querySelector('.goods');
    const min = document.getElementById('min');
    const max = document.getElementById('max');

    const search = document.querySelector('.header__main-search-input');





    // поиск
    search.addEventListener('input', (e) => {
        console.log(e)
        const searchText = new RegExp(search.value.trim(), 'i');
        console.log(searchText)
        cards.forEach((card) => {
            const title = card.querySelector('.products__item-text-title');
            if (searchText.test(title.textContent)) {
                card.parentNode.parentNode.parentNode.style.display = 'none';
            } else {
                card.parentNode.parentNode.parentNode.style.display = '';
            }
        });
        search.value = '';
    })
}

search()
