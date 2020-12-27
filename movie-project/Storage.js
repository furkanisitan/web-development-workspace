class Storage {

    keyMovies = "movies"

    static addMovie(newMovie) {

        const movies = this.getMovies();
        movies.push(newMovie);
        localStorage.setItem(this.keyMovies, JSON.stringify(movies));
    }

    static getMovies() {

        const movies = localStorage.getItem(this.keyMovies);
        return movies === null ? [] : JSON.parse(movies);
    }

    static deleteMovie(movieTitle) {

        const movies = this.getMovies();
        movies.forEach((movie, index) => { if (movie.title === movieTitle) movies.splice(index, 1); });
        localStorage.setItem(this.keyMovies, JSON.stringify(movies));
    }

    static removeAllMovies() {
        localStorage.removeItem(this.keyMovies);
    }

}