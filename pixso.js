const API_KEY = "https://products-api-2ttf.onrender.com/api/products";

document.addEventListener("DOMContentLoaded", () => {
  fetchImages();
});

function fetchImages() {
  const container = document.getElementById("image-container");
  container.innerHTML = ""; // Clear previous images

  // Fetch images from Pixso API
  fetch(`https://products-api-2ttf.onrender.com/api/products`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch images");
      }
      return response.json();
    })
    .then((data) => {
      data.forEach((image) => {
        const img = document.createElement("img");
        img.src = image.url;
        img.alt = image.alt_text;
        container.appendChild(img);
      });
    })
    .catch((error) => {
      console.error("Error fetching images:", error);
    });
}
