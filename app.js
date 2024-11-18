const next_btn = document.querySelector('.next-btn');
const prev_btn = document.querySelector('.prev-btn');
const images = document.querySelector('.images');

const style = getComputedStyle(images);
let total = style.getPropertyValue('--total');
total = 360 / total;
console.log(total)
let rotateY = 0;

next_btn.addEventListener('click',()=>{
    rotateY += total;
    images.style.transform = `rotateY(${rotateY}deg)`;
})

prev_btn.addEventListener('click',()=>{
    rotateY -= total;
    images.style.transform = `rotateY(${rotateY}deg)`;
})