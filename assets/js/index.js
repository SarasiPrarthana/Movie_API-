const watchBtn = document.getElementById("watchBtn");
const videoModal = document.getElementById("videoModal");
const closeBtn = document.getElementById("closeBtn");
const movieVideo = document.getElementById("movieIframe"); // this was null earlier


watchBtn.addEventListener("click", () => {
    videoModal.classList.remove("hidden");
    //  movieVideo.play();
});

closeBtn.addEventListener("click", () => {
    // movieVideo.src = movieVideo.src;
    // movieVideo.pause();
    // movieVideo.currentTime = 0;
    videoModal.classList.add("hidden");
    movieIframe.src = movieIframe.src;
});

window.addEventListener("click", (e) => {
    if (e.target === videoModal) {
        // movieVideo.src = movieVideo.src;
        videoModal.classList.add("hidden");
        movieIframe.src = movieIframe.src;
    }
});

const watchBtn1 = document.getElementById("watchBtn1");
const videoModal1 = document.getElementById("videoModal1");
const closeBtn1 = document.getElementById("closeBtn1");
const movieIframe1 = document.getElementById("movieIframe1"); // use same name
movieIframe1.src = movieIframe1.src;



watchBtn1.addEventListener("click", () => {
    videoModal1.classList.remove("hidden");
    // movieVideo.play();
});

closeBtn1.addEventListener("click", () => {
    // movieVideo.src = movieVideo.src;
    // movieVideo.pause();
    // movieVideo.currentTime = 0;
    videoModal1.classList.add("hidden");
    movieIframe1.src = movieIframe1.src;
});

window.addEventListener("click", (e) => {
    if (e.target === videoModal1) {
        // movieVideo.src = movieVideo.src;
        videoModal1.classList.add("hidden");
        movieIframe1.src = movieIframe1.src;
    }
});

function openModal(id) {
    document.getElementById(id).style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

window.onclick = function (event) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}

// const apiKey = "http://www.omdbapi.com/?i=tt3896198&apikey=d8a59534";

// async function searchMovies() {
//     const query = document.querySelector
// }

