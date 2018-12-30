import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgxSmartModalService } from 'ngx-smart-modal';

import { MovieService } from '../movie.service';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

    movie: Movie;
    id: number;

  constructor(public ngxSmartModalService: NgxSmartModalService,
              private movieService: MovieService,
              private route: ActivatedRoute) {}

  ngOnInit() {
      this.route.params.subscribe(
        (params: Params) => {
            this.id = +params['id'];
            this.movie = this.movieService.getMovie(this.id);
            this.movieService.indexUpdate.emit(this.id);
        }
      );
  }

}
