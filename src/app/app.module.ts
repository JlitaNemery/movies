import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { HeaderComponent } from './components/header/header.component';
import { MovieEditComponent } from './components/movies/movie-edit/movie-edit.component';
import { MovieItemComponent } from './components/movies/movie-item/movie-item.component';
import { MovieListComponent } from './components/movies/movie-list/movie-list.component';
import { AppRoutingModule } from './app-routing.module';
import { MovieService } from './components/movies/movie.service';
import { MovieDetailComponent } from './components/movies/movie-detail/movie-detail.component';
import { DeleteModalComponent } from './components/modals/delete-modal/delete-modal.component';
import { MovieStartComponent } from './components/movies/movie-start/movie-start.component';
import { NewMovieComponent } from './components/movies/new-movie/new-movie.component';
import { InvalidTitleComponent } from './components/modals/invalid-title/invalid-title.component';
import { LettersPipe } from './components/shared/letters.pipe';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    HeaderComponent,
    MovieEditComponent,
    MovieItemComponent,
    MovieListComponent,
    MovieDetailComponent,
    DeleteModalComponent,
    MovieStartComponent,
    NewMovieComponent,
    InvalidTitleComponent,
    LettersPipe,
    FooterComponent, 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxSmartModalModule.forRoot(),
    HttpClientModule,
    FlexLayoutModule,
  ],
  providers: [MovieService, 
              NgxSmartModalService,
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
