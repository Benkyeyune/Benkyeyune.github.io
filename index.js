const navToggle=document.querySelector('.nav-toggle');
const navLinks =document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', ()=>{
  document.body.classList.toggle('nav-open');
});

navLinks.forEach(link=>{
  link.addEventListener('click',() =>{
    document.body.classList.remove('nav-open');
  })
})

// carousel js
let currentIndex = 1;
const items = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');

function updateCarousel() {
    items.forEach((item, index) => {
        item.classList.remove('active');
        dots[index].classList.remove('active');
    });
    
    items[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
    
    if (currentIndex === 0) {
        items[items.length - 1].classList.add('prev');
        items[currentIndex + 1].classList.add('next');
    } else if (currentIndex === items.length - 1) {
        items[currentIndex - 1].classList.add('prev');
        items[0].classList.add('next');
    } else {
        items[currentIndex - 1].classList.add('prev');
        items[currentIndex + 1].classList.add('next');
    }
}

function currentSlide(index) {
    currentIndex = index;
    updateCarousel();
}

document.addEventListener('DOMContentLoaded', () => {
    updateCarousel();
    setInterval(() => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }, 3000); // Change slide every 3 seconds
});
