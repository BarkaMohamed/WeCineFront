import {Component, OnInit} from '@angular/core';
import {concatMap, finalize} from "rxjs/operators";
import {MoviesService} from "@app/home/movies.service";
import {SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-best-movie',
  templateUrl: './best-movie.component.html',
  styleUrls: ['./best-movie.component.scss']
})
export class BestMovieComponent implements OnInit {
  isLoading = false;
  videoUrl!: SafeResourceUrl;

  constructor(private moviesService: MoviesService) {

  }

  ngOnInit(): void {

    this.isLoading = true;
    this.moviesService.getBest().pipe(
      concatMap((bestMovie: any) => {
        return this.moviesService.getVideo(bestMovie.id)
      }),
      finalize(() => {
        this.isLoading = false;
      })
    ).subscribe((movieVideo: any) => {
      this.videoUrl = this.moviesService.generateMovieVideoUrl(movieVideo.key);
    });

  }

}
