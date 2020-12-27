class UI {

    static addMovie(newMovie) {

        const movieList = document.getElementById("movies");

        movieList.innerHTML += `
             <tr>
                 <td><img src="${newMovie.url}" class="img-fluid img-thumbnail"></td>
                 <td>${newMovie.title}</td>
                 <td>${newMovie.director}</td>
                 <td><a href="#" id = "delete-movie" class = "btn btn-danger">Remove Movie</a></td>
             </tr>
       `;
    }

    static clearForm(form) {
        form.reset();
    }

    static displayMessages(message, type) {

        const div = document.createElement("div");
        div.className = `alert alert-${type}`;
        div.textContent = message;

        const cardBody = document.querySelector(".card-body");
        cardBody.appendChild(div);

        setTimeout(() => { div.remove(); }, 1000);
    }

    static loadAllMovies(movies) {
        for (const movie of movies)
            this.addMovie(movie);
    }

    static deleteMovie(element) {
        element.parentElement.parentElement.remove();
    }

    static removeAllMovies() {

        const movieList = document.getElementById("movies");

        // movieList.innerHTML = "";
        while (movieList.firstElementChild !== null)
            movieList.firstElementChild.remove();

    }
}