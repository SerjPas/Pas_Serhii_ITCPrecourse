const GITHUB_URL = "https://api.github.com/users/IsraelTechChallengeITC";

fetch(GITHUB_URL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        const profileImage = document.getElementById("profile-image");
        profileImage.src = data.avatar_url;
    });




const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentlySelected = 0;
const AllGalleryImages = document.querySelectorAll(".gallery-map");

function previous() {
    nextBtn.hidden = false;
    AllGalleryImages[currentlySelected].classList.remove("active");
    currentlySelected--;
    AllGalleryImages[currentlySelected].classList.add("active");

    if (currentlySelected === 0) {
        prevBtn.hidden = true;
    }
}

function next() {
    prevBtn.hidden = false;
    AllGalleryImages[currentlySelected].classList.remove("active");
    currentlySelected++;
    AllGalleryImages[currentlySelected].classList.add("active");

    if (currentlySelected + 1 === AllGalleryImages.length) {
        nextBtn.hidden = true;
    }
}

function init() {
    prevBtn.addEventListener("click", function () {
        previous();
    });

    nextBtn.addEventListener("click", function (e) {
        next();
    });
}

init();