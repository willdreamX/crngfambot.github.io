let tg = window.Telegram.WebApp;
let user = tg.initDataUnsafe;
let ui_user = document.getElementById('user');

ui_user.innerHTML = `-> ${user.id}`
