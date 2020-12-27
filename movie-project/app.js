const form = document.getElementById("movie-form");
const inpTitle = document.querySelector("#title");
const inpDirector = document.querySelector("#director");
const inpUrl = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const btnClearMovies = document.getElementById("clear-movies");


eventListeners();

function eventListeners() {

    form.addEventListener("submit", addMovie);
    cardBody.addEventListener("click", deleteMovie);
    btnClearMovies.addEventListener("click", clearAllMovies);
    document.addEventListener("DOMContentLoaded", () => {
        const movies = Storage.getMovies();
        UI.loadAllMovies(movies);
    });
}

function addMovie(e) {

    e.preventDefault();

    const title = inpTitle.value;
    const director = inpDirector.value;
    const url = inpUrl.value;

    // Error 
    if (title === "" || director === "" || url === "")
        UI.displayMessages("Please enter all fields!", "danger");
    else {
        const newMovie = new Movie(title, director, url);
        UI.addMovie(newMovie);
        Storage.addMovie(newMovie);
        UI.displayMessages("The movie was successfully added.", "success");
    }

    UI.clearForm(form);
}

function deleteMovie(e) {

    if (e.target.id === "delete-movie") {
        UI.deleteMovie(e.target);
        Storage.deleteMovie(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessages("The movie was successfully removed.", "success");
    }

}
function clearAllMovies() {

    if (confirm("Are you sure you want to delete all movies?")) {
        UI.removeAllMovies();
        Storage.removeAllMovies();
    }
}