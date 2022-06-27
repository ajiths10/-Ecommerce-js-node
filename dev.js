//side nav
const btn = document.getElementById("btn");
const nav = document.getElementById("nav");

btn.addEventListener("click", () => {
  nav.classList.toggle("active");
  btn.classList.toggle("active");
});

//Toast message notification
const toastBtn = document.getElementById("toastBtn");

toastBtn.addEventListener("click", () => {
  createNotification();
});

const createNotification = () => {
  const notify = document.createElement("div");
  notify.classList.add("toast");

  notify.innerText = "Hello world";
  container.appendChild(notify);

  setTimeout(() => {
    notify.remove();
  }, 3000);
};

//Auto writing text

const text = "Hello world !!";
let index = 0;

const writeText = () => {
  document.body.innerText = text.slice(0, index);
  index++;
  if (index > text.length - 1) {
    index = 0;
  }
}
// setInterval(writeText,100)

//popup Model
const open = document.getElementById("open");
const close = document.getElementById("close");
const popupContainer = document.getElementById("popup_container");

open.addEventListener("click", () => {
  popupContainer.classList.add("active");
});
close.addEventListener("click", () => {
  popupContainer.classList.remove("active");
});

//Toggle dark mode
const toggle = document.getElementById("toggle");

toggle.addEventListener("change", (e) => {
  document.body.classList.toggle("dark", e.target.checked);
});

//image Carousel
const img = document.getElementById('images');
let idx = 0;
const imgs = document.querySelectorAll('#images #img');
console.log(imgs.length);
const run = ()=> {
    idx++;
    if(idx > imgs.length -1 ){
        idx = 0;
    }
    img.style.transform = `translateX(${-idx * 500}px)` ;
    

}
setInterval(run, 2000 )


//Zoom image hover over
 const zoomContainer = document.getElementById('zoom-container');
 const zoomimg = document.querySelector('#zoomimg');

 zoomContainer.addEventListener('mouseover', (e) => {
  const x = e.clientX - e.target.offsetLeft;
  const y = e.clientY - e.target.offsetTop;

  zoomimg.style.transformOrigin = `${x}px ${y}px`;
  zoomimg.style.transform = "scale(2)";
 })

 zoomContainer.addEventListener("mouseleave", ()=>{
  zoomimg.style.transformOrigin = 'center center';
  zoomimg.style.transform = "scale(1)";
 })