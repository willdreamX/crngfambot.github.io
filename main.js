let tg = window.Telegram.WebApp;
let user = tg.initDataUnsafe;
tg.expand()

window.onload = function(){
    let preloader = document.getElementById('page-preloader');
    // let wrapper = document.getElementById('.wrapper')
    
    setTimeout(() => {
        preloader.classList.toggle('load', true);
    }, 1800);
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 2800);
};

let navs = document.getElementsByClassName('navbar__item');

function ui_nav_action(event) {
    let nav = document.querySelectorAll('.navbar__item');
    let screens = document.querySelectorAll('.screen');
    let target_screen = document.getElementById(event.currentTarget.getAttribute('data-link'));

    console.log(target_screen)


    for (let i = 0; i < screens.length; i++) {
        if (screens[i].id !== target_screen.id) {
            screens[i].classList.toggle('active', false);
        }
    }
    for (let i = 0; i < nav.length; i++) {
        if (nav[i].id !== event.target.id) {
            nav[i].classList.toggle('active', false);
        }
    }
    event.currentTarget.classList.toggle('active', true);
    target_screen.classList.toggle('active', true)
}

for (let i = navs.length - 1; i >= 0; i--) {
    navs[i].onclick = function(event) {
        ui_nav_action(event);
    }
}
