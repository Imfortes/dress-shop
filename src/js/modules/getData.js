function getData() {
    const goodsWrapper = document.querySelector('.goods');
    fetch('https://github.com/Imfortes/dress-shop/blob/master/build/db/new.json')
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
