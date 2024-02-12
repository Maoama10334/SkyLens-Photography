// Array of image file names (you could also generate this list with a server-side script or by reading a directory if using Node.js)
const imageFilenames = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',

    // ...add all image filenames here
];

// Function to load images
function loadImages(imageFiles) {
    const galleryWrapper = document.getElementById('gallery-wrapper');

    imageFiles.forEach((filename, index) => {
        const img = document.createElement('img');
        img.src = `assets/${filename}`;
        img.alt = `Image ${index + 1}`;

        galleryWrapper.appendChild(img);
    });
}

// JavaScript to handle image click to reveal the full image
window.onload = () => {
    loadImages(imageFilenames);
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    const images = document.querySelectorAll('#gallery-wrapper img');

    images.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = "block";
            modalImg.src = img.src; // Assuming you want to show the same image; replace with high-res image if necessary
            captionText.innerHTML = img.alt;
        });
    });

    const closeSpan = document.getElementsByClassName("close")[0];
    closeSpan.onclick = function() {
        modal.style.display = "none";
    }
};