import {Component, OnInit} from '@angular/core';
import {finalize} from 'rxjs/operators';

import {MoviesService} from "@app/home/movies.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  genders: any = [];

  constructor() {
  }

  ngOnInit() {
  }

  onGendersChange(genders: any) {
    this.genders = genders;
  }
}
