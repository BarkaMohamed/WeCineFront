import {Component, Input, OnInit} from '@angular/core';
import {MoviesService} from "@app/home/movies.service";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: any;
  isLoading = false;
  @Input() set genders(values: any) {
    this.loadMovies(values);
  }
  constructor(private moviesService: MoviesService) {
  }


  ngOnInit() {

  }

  loadMovies(genders:any = []) {
    this.isLoading = true;
    this.moviesService
      .getByGender(genders)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((movies: any) => {
        this.movies = movies;
      });
  }
}
