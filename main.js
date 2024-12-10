function openNav() {
  document.getElementById("sideNav").style.width = "250px";
}

function closeNav() {
  document.getElementById("sideNav").style.width = "0";
}

// Function to close the sidenav when a link is clicked
function setupNavLinks() {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeNav(); // Close the sidenav when a link is clicked
    });
  });
}

// Call the function to setup event listeners once the DOM is loaded
document.addEventListener('DOMContentLoaded', setupNavLinks);



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


nextArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
});


prevArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
});


setInterval(() => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
}, 6000); 


window.addEventListener('resize', updateCarousel);


/* scroll animation */

/* scroll appear */

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in-visible");
                observer.unobserve(entry.target); // Stop observing once element is visible
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => observer.observe(element));
});

/* fade in left */

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".fade-in-left");

    elements.forEach(element => {
        element.style.opacity = "1"; // Ensure element is visible before animation
    });
});
