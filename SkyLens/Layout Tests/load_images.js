// Array of image file names (you could also generate this list with a server-side script or by reading a directory if using Node.js)
const imageFilenames = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
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
  
  // Call the function on window load
  window.onload = () => {
    loadImages(imageFilenames);
  };
  