const images = [
    "sebastian-pichler-lojbVPmh2TY-unsplash.jpg", 
    "srikanta-h-u-6lxoxgxdBNg-unsplash.jpg", 
    "terrence-thomas-AvXH_GIjIws-unsplash.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.classList.add("bg-image");

document.body.appendChild(bgImage);