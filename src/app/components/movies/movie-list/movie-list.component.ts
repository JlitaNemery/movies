import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgxSmartModalService } from 'ngx-smart-modal';

import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, OnDestroy {

    movies: Movie[];
    subscription: Subscription;

  constructor(private movieService: MovieService,
              public ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
    this.movieService.getMoviesBackEnd();
    this.subscription = this.movieService.moviesChanged
    .subscribe(
        (movies: Movie[]) => {
            this.movies = movies;
        }
    );
  }

  ngOnDestroy(){
      this.subscription.unsubscribe();
  }

}
