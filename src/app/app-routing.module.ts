import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"

import { MoviesComponent } from "./components/movies/movies.component";
import { MovieDetailComponent } from "./components/movies/movie-detail/movie-detail.component";
import { MovieStartComponent } from "./components/movies/movie-start/movie-start.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/movies', pathMatch: 'full'},
    { path: 'movies', component: MoviesComponent, children:[
        { path: '', component: MovieStartComponent},
        { path: ':id', component: MovieDetailComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}