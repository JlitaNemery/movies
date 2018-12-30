import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})
export class NewMovieComponent implements OnInit {

    newMovieForm: FormGroup;

    constructor(private movieService: MovieService,
                private router: Router) { }

    ngOnInit() {
        this.initForm();    
    }

    private initForm(){
        let movieTitle = '';
        let id: number;
        let movieYear: number;
        let movieRuntime: number;
        let movieGenre = '';
        let movieDirector = '';

        this.newMovieForm = new FormGroup({
            'title': new FormControl(movieTitle, Validators.required),
            'id': new FormControl(id, Validators.required),
            'year': new FormControl(movieYear, [this.validYear, Validators.required]),
            'runtime': new FormControl(movieRuntime, Validators.required),
            'genre': new FormControl(movieGenre, Validators.required),
            'director': new FormControl(movieDirector, Validators.required)
        });
    }

    onSubmit(){
        this.movieService.addMovie(this.newMovieForm.value);
        this.initForm();
        this.router.navigate(['/movies']);  
    }

    private validYear(input: AbstractControl){
        if(input.value < 1800 || input.value > 2030){
            return {validYear: true}
        }
        return null;
    }
}
