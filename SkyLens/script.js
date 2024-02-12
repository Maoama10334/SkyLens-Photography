document.addEventListener('DOMContentLoaded', () => {
    // Simple script for demonstration
    console.log("Website loaded!");
});

// JavaScript to handle image click to reveal the full image
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("img01");
  const captionText = document.getElementById("caption");
  const images = document.querySelectorAll(".gallery img");

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
});

  