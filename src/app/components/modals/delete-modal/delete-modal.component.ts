import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MovieService } from '../../movies/movie.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {

    id: number; 

  constructor(private movieService: MovieService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.movieService.indexUpdate.subscribe(
        (movieIndex: number) => {
           this.id = movieIndex;
        }          
      );
  }

  onDelete(){
      this.movieService.deleteMovie(this.id);
      this.router.navigate(['../'], {relativeTo: this.route})  
  }

}
