import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';

import {SharedModule} from '@shared';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {SearchComponent} from './search/search.component';
import {BestMovieComponent} from './best-movie/best-movie.component';
import {GendersComponent} from './genders/genders.component';
import {MoviesComponent} from './movies/movies.component';
import {ReactiveFormsModule} from "@angular/forms";
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieDetailsModalComponent } from './movie-details-modal/movie-details-modal.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, HttpClientModule, NgbModule, ReactiveFormsModule, AutocompleteLibModule, HomeRoutingModule],
  declarations: [HomeComponent, SearchComponent, BestMovieComponent, GendersComponent, MoviesComponent, MovieCardComponent, MovieDetailsModalComponent],
})
export class HomeModule {
}
