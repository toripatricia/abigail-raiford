function openNav() {
  document.getElementById("sideNav").style.width = "250px";
}

function closeNav() {
  document.getElementById("sideNav").style.width = "0";
}


const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevArrow = document.querySelector('.prev-arrow');
const nextArrow = document.querySelector('.next-arrow');

let currentIndex = 0;
const totalItems = carouselItems.length;

function updateCarousel() {
    const width = carouselItems[0].clientWidth;
    carousel.style.transform = `translateX(${-currentIndex * width}px)`;
}

// Next arrow
nextArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
});

// Previous arrow
prevArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
});

// Automatic scroll
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
}, 3000); // Adjust the timing as needed

// Resize handler to ensure proper scaling
window.addEventListener('resize', updateCarousel);
