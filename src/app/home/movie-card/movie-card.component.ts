import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {MovieDetailsModalComponent} from "@app/home/movie-details-modal/movie-details-modal.component";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() movie: any;
   imgUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer,private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.imgUrl= this.sanitizer.bypassSecurityTrustResourceUrl("https://image.tmdb.org/t/p/w600_and_h900_bestv2/"+this.movie.poster_path);

  }
  showDetails() {
    const modalRef = this.modalService.open(MovieDetailsModalComponent,{ size: 'lg' }
    );
    modalRef.componentInstance.movie = this.movie;
  }
}
