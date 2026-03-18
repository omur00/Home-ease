document.addEventListener("DOMContentLoaded", function () {
    generateImages();
});

function generateImages() {
    const gallery = document.getElementById("imageGallery");
    for (let i = 1; i <= 26; i++) {
        let img = document.createElement("img");
        img.src = `assets/${i}.jpg`;
        img.alt = `App Screenshot ${i}`;
        img.classList.add("zoom-in");
        gallery.appendChild(img);
    }
}
