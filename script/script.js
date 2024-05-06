const header = document.querySelector(".header");
document.querySelector(".toggleBars").addEventListener("click", function () {
  header.classList.toggle("active");
  if (header.classList.contains("active")) {
    document.querySelector(".toggleBars svg").classList.add("fa-xmark");
  } else {
    document.querySelector(".toggleBars svg").classList.add("fa-bars");
  }
});

// const handle api request
const page_content = document.querySelector(".page_content");
const movieApi = "https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44"
fetch(movieApi)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const movies = data.results;
    let output = "";
    movies.forEach((movie) => {
      output += `<div class="movie  ">
      <img class="movie_poster" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
      <div class="movie_info  ">
        <h3 class="text-center">${movie.title}</h3>
        <p class=" over_view">${movie.overview}</p>
        <p class="ms-2 release_date">Release Date: ${movie.release_date}</p>
        <div class="vote  ms-2">
        <p class="text-white">${movie.vote_average}</p>
        </div>
        </div>
      </div>`;
    });
    page_content.innerHTML = output;
  }).catch((error) => console.error("Error fetching data:", error));



