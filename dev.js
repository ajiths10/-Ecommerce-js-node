//side nav
const btn = document.getElementById('btn')
const nav = document.getElementById('nav')

btn.addEventListener('click', () => {
    nav.classList.toggle('active');
    btn.classList.toggle('active');
});

//Toast message notification
const toastBtn = document.getElementById('toastBtn');

toastBtn.addEventListener('click', ()=> {
    createNotification();
});

function createNotification() {
    const notify = document.createElement('div');
    notify.classList.add('toast');

    notify.innerText = "Hello world"
    container.appendChild(notify);

    setTimeout(() => {
        notify.remove();
    }, 3000);
}