let currentImageIndex = 0;
const images = [
    "pictures/virat-kohli_i1.webp",
    "pictures/rohit_i2.webp",
    "pictures/image_3.jpeg",
    "pictures/image_4.jpg",
    "pictures/image_5.jpg",
    "pictures/image_6.jpeg",
    "pictures/image_7.png"
];

let slideshowInterval;
let isSlideshowActive = false;

function changeImage(index) {
    const displayedImage = document.getElementById('displayedImage');
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    thumbnails[index].classList.add('active');

    displayedImage.classList.remove('swipe-right', 'swipe-left');
    if (index > currentImageIndex) {
        displayedImage.classList.add('swipe-left');
    } else {
        displayedImage.classList.add('swipe-right');
    }
    
    setTimeout(() => {
        displayedImage.src = images[index];
        displayedImage.classList.remove('swipe-left', 'swipe-right');
    }, 500);

    currentImageIndex = index;
}

function nextImage(event) {
    if (event) event.stopPropagation(); 
    currentImageIndex = (currentImageIndex + 1) % images.length;
    changeImage(currentImageIndex);
}

function prevImage(event) {
    if (event) event.stopPropagation(); 
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    changeImage(currentImageIndex);
}

function toggleFullscreen() {
    const imageElement = document.getElementById('displayedImage');
    if (imageElement.requestFullscreen) {
        imageElement.requestFullscreen();
    }
}

function toggleSlideshow() {
    const slideshowButton = document.getElementById('slideshowBtn');
    if (isSlideshowActive) {
        clearInterval(slideshowInterval);
        slideshowButton.textContent = "Start Slideshow";
    } else {
        slideshowInterval = setInterval(() => {
            nextImage(); 
        }, 2500); 
        slideshowButton.textContent = "Stop Slideshow";
    }
    isSlideshowActive = !isSlideshowActive;
}

window.onload = function() {
    changeImage(currentImageIndex); 
};
