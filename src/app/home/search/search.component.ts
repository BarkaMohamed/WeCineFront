import {Component, OnInit} from '@angular/core';
import {finalize} from "rxjs/operators";
import {MoviesService} from "@app/home/movies.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  movies: any = [];
  keyword = 'title';

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.moviesService
      .getByGender([])
      .subscribe((movies: any) => {
        this.movies = movies;
      });
  }


  selectEvent(item: any) {
    // do something with selected item
  }

  onChangeSearch(query: string) {

    this.moviesService
      .getByQuery(query)
      .subscribe((movies: any) => {
        this.movies = movies;
      });
  }

}
