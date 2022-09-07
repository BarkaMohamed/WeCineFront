import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {MoviesService} from "@app/home/movies.service";
import {finalize} from "rxjs/operators";
import {SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-movie-details-modal',
  templateUrl: './movie-details-modal.component.html',
  styleUrls: ['./movie-details-modal.component.scss']
})
export class MovieDetailsModalComponent implements OnInit {
  @Input() movie: any;
  isLoading = false;
  videoUrl!: SafeResourceUrl;

  constructor(private moviesService: MoviesService, public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.moviesService
      .getVideo(this.movie.id)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((movieVideo: any) => {
        this.videoUrl = this.moviesService.generateMovieVideoUrl(movieVideo.key);
      });
  }

}
