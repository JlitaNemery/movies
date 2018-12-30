import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { NgxSmartModalService } from 'ngx-smart-modal';

import { Movie } from "./movie.model";

@Injectable()
export class MovieService {

    moviesChanged = new Subject<Movie[]>();
    indexUpdate = new EventEmitter<number>();
    movies: Movie[];

    private smartModal: NgxSmartModalService;

    constructor(private httpClient: HttpClient,
                smartModalService: NgxSmartModalService){
                    this.smartModal = smartModalService;
                }

    setMovies(movies: Movie[]){
        this.movies = movies;
        this.moviesChanged.next(this.movies.slice());
    }

    getMovie(index: number){
        return this.movies[index];
    }

    getMovies(){
        return this.movies.slice();
    }

    addMovie(movie: Movie){
        for(let i = 0; i < this.movies.length; i++){
            if(this.movies[i].title === movie.title){
                this.smartModal.open('invalidTitle');
                return;
            }
        } 
        for(let i = 0; i < this.movies.length; i++){
            if(this.movies[i].id === movie.id){
                this.smartModal.open('invalidTitle');
                return;
            }
        } 
        this.movies.push(movie);
        this.moviesChanged.next(this.movies.slice());
    }

    updateMovie(index: number, newMovie: Movie){
        
        for(let i = 0; i < this.movies.length; i++){           
            if(i !== index && this.movies[i].title === newMovie.title){
                this.smartModal.open('invalidTitle');
                return;
            }
        }
  
        this.movies[index].title = newMovie.title;
        this.movies[index].year = newMovie.year;
        this.movies[index].runtime = newMovie.runtime;
        this.movies[index].genre = newMovie.genre;
        this.movies[index].director = newMovie.director;
        this.moviesChanged.next(this.movies.slice());
    }

    deleteMovie(index: number){
        this.movies.splice(index, 1);
        this.moviesChanged.next(this.movies.slice());
    }

    getMoviesBackEnd(){
        return this.httpClient.get<Movie[]>('https://movies-99712.firebaseio.com/movies.json')
        .subscribe(
            (movies: Movie[]) => {
              this.setMovies(movies);  
            }
        );
    }

}