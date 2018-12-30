export class Movie {
    public id: number;
    public title: string;
    public year: number;
    public runtime: number;
    public genre: string;
    public director: string;

    constructor (id: number, title: string, year: number, runtime: number, genre: string, director: string ){
        this.id = id;
        this.title = title;
        this.year = year;
        this.runtime = runtime;
        this.genre = genre;
        this.director = director;
    }
}