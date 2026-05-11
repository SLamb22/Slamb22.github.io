

// List your images here (just drop new file names in later)
const images = [
    "images/photo1.png",
    "images/photo2.png",
    "images/photo3.png",
    "images/photo4.png",
    "images/photo5.png",
    "images/photo6.png",
    "images/photo7.png",
    "images/photo8.png"
];

const gallery = document.getElementById("gallery");

// Load images dynamically
images.forEach(file => {
    const img = document.createElement("img");
    img.src = file;
    img.alt = "Gallery Image";

    img.addEventListener("click", () => {
        openLightbox(img.src);
    });

    gallery.appendChild(img);
});

// Lightbox functions
function openLightbox(src) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = src;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}