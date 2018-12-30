import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router} from '@angular/router';
import { Subscription } from 'rxjs';

import { MovieService } from '../movie.service';


@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit, OnDestroy {

    id: number;
    movieForm: FormGroup;
    subscription: Subscription;

    constructor(private movieService: MovieService,
                private router: Router) { }

    ngOnInit() {
        this.initForm();
        this.subscription = this.movieService.indexUpdate.subscribe(
            (movieIndex: number) => {
               this.id = movieIndex;
               this.initForm();
            }          
          );
    }
    
    onSubmit(){
        this.movieService.updateMovie(this.id, this.movieForm.value);
        this.router.navigate(['/movies']);        
    }

    private initForm(){
        let movieTitle = '';
        let movieYear: number;
        let movieRuntime: number;
        let movieGenre = '';
        let movieDirector = '';

     if(this.id != null){
        const movie = this.movieService.getMovie(this.id);
        movieTitle = movie.title;
        movieYear = movie.year;
        movieRuntime = movie.runtime;
        movieGenre = movie.genre;
        movieDirector = movie.director;
     }

         this.movieForm = new FormGroup({
            'title': new FormControl(movieTitle, Validators.required),
            'year': new FormControl(movieYear, [Validators.required, this.validYear]),
            'runtime': new FormControl(movieRuntime, Validators.required),
            'genre': new FormControl(movieGenre, Validators.required),
            'director': new FormControl(movieDirector, Validators.required)
        });
    }

    private validYear(input: AbstractControl){
        if(input.value < 1800 || input.value > 2030){
            return {validYear: true}
        }
        return null;
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}
