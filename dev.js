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

const createNotification= () => {
    const notify = document.createElement('div');
    notify.classList.add('toast');

    notify.innerText = "Hello world"
    container.appendChild(notify);

    setTimeout(() => {
        notify.remove();
    }, 3000);
}

//Auto writing text

const text = 'Hello world !!';
let index = 0;

function writeText() {
    document.body.innerText = text.slice(0, index);
    index++;
    if(index > text.length - 1){
        index = 0;
    }
}

setInterval(writeText,100)