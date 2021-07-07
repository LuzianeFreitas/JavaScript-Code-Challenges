class Movie {
    constructor(title, director, genre, releaseYear, rating) {
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.releaseYear = releaseYear;
        this.rating = rating;
    }

    getOverview() {
        return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`;
    }
}

movie =  new Movie('Luca','Enrico Casarosa','Comedy/Adventure',2021,86);
console.log(movie.getOverview());