const apiKey = "28b2effb";
const SearchForm = document.getElementById("searchForm");
const SearchInputText = document.getElementById("searchbar");
const MovieResults = document.getElementById("movieResults");
const RandomButtom = document.getElementById("randombutton");
// -----------add random movie list
const RandomMovieList = ["Titanic", "Avengers", "Joker", "Frozen", "Spider-Man", "Interstellar"];
// ---set fetch movie title
async function getMovieByTitle(title) {
    const res = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${title}`);
    const data = await res.json();
    if (data.Response === "True") {
        displayMovieDetails(data);
    } else {
        MovieResults.innerHTML = `<p class="text-danger">Movie not found</p>`;
    }
}

// -----fetch movie keyword(list)
async function getMovieByKeyWord(keyword) {
    const res = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${keyword}`);
  const data = await res.json();
    if (data.Response === "True") {
        displayMovieList(data.Search);
    } else {
       MovieResults.innerHTML = `<p class="text-danger">Movie not found</p>`;
    }
}
// -----fetch movie IMDB ID
async function getMovieById(id) {
const res = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`);
  const data = await res.json();
    if (data.Response === "True") {
        displayMovieDetails(data);
    }
}
//=-----Display movie details
function displayMovieDetails(movie) {
    MovieResults.innerHTML = ` <div class="col-12 col-md-8 mx-auto">
      <div class="card shadow-lg p-3">
        <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title}">
        <div class="card-body">
          <h4 class="card-title">${movie.Title} (${movie.Year})</h4>
          <p><b>Genre:</b> ${movie.Genre}</p>
          <p><b>Director:</b> ${movie.Director}</p>
          <p><b>Actors:</b> ${movie.Actors}</p>
          <p><b>Plot:</b> ${movie.Plot}</p>
          <p><b>IMDb Rating:</b> ⭐ ${movie.imdbRating}</p>
        </div>
      </div>
    </div>`;

}
//disply multiple movies
function displayMovieList(movies) {
    MovieResults.innerHTML = movies.map(movie => ` <div class="col-12 col-sm-6 col-md-4">
      <div class="card h-100 shadow-sm">
        <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title}">
        <div class="card-body">
          <h5 class="card-title">${movie.Title}</h5>
          <p class="text-muted">${movie.Year}</p>
          <button class="btn btn-info w-100" onclick="getMovieById('${movie.imdbID}')">View Details</button>
        </div>
      </div>
    </div>`
    ).join("");
}
//search form
SearchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = SearchInputText.value.trim();
    if (query) {
        getMovieByKeyWord(query);
    }
});
//random movie
RandomButtom.addEventListener("click", () => {
    const randomTitle = RandomMovieList[Math.floor(Math.random() * RandomMovieList.length)];
    getMovieByTitle(randomTitle);
});
//load default movies
const TopRated = ["tt1375666", "tt4154796", "tt0816692"]; // Inception, Endgame, Interstellar
TopRated.forEach(id => getMovieById(id));

const watchBtn = document.getElementById("watchBtn");
const videoModal = document.getElementById("videoModal");
const closeBtn = document.getElementById("closeBtn");
const movieVideo = document.getElementById("movieIframe");

watchBtn.addEventListener("click", () => {
    videoModal.classList.remove("hidden");
    // movieVideo.play();
});

closeBtn.addEventListener("click", () => {
    // movieVideo.src = movieVideo.src;
    // movieVideo.pause();
    // movieVideo.currentTime = 0;
    videoModal.classList.add("hidden");
    movieVideo.src = movieVideo.src;
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
const movieVideo1 = document.getElementById("movieIframe1");

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

