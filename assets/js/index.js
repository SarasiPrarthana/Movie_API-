const watchBtn = document.getElementById("watchBtn");
const videoModal = document.getElementById("videoModal");
const closeBtn = document.getElementById("closeBtn");
const movieVideo = document.getElementById("movieVideo iframe");

watchBtn.addEventListener("click", () =>{
    videoModal.classList.remove("hidden");
    // movieVideo.play();
});

closeBtn.addEventListener("click", () =>{
    // movieVideo.src = movieVideo.src;
    // movieVideo.pause();
    // movieVideo.currentTime = 0;
    videoModal.classList.add("hidden");
    movieIframe.src = movieIframe.src;
});

window.addEventListener("click", (e) => {
    if(e.target === videoModal){
        // movieVideo.src = movieVideo.src;
        videoModal.classList.add("hidden");
        movieIframe.src = movieIframe.src;
    }
});