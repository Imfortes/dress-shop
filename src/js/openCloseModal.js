// Hamburger open/close ---------------

function toggleModal() {
    const showMenuBtn = document.querySelector('.hamburger'),
        closeMenuBtn = document.querySelector('.close-btn'),
        popupMenu = document.querySelector('.menu')



    showMenuBtn.addEventListener('click', () => {
        popupMenu.classList.add('active')
        document.body.style.overflow = 'hidden'
    });

    closeMenuBtn.addEventListener('click', () => {
        popupMenu.classList.remove('active')
        document.body.style.overflow = ''
    });
}

toggleModal();
