import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {finalize} from "rxjs/operators";
import {MoviesService} from "@app/home/movies.service";
import {FormBuilder, FormGroup, FormArray, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-genders',
  templateUrl: './genders.component.html',
  styleUrls: ['./genders.component.scss']
})
export class GendersComponent implements OnInit {
  genders: any;
  isLoading = false;
  form!: FormGroup;
  @Output() gendersChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(private moviesService: MoviesService, private fb: FormBuilder) {
    this.initForm();
  }

  ngOnInit() {
    this.isLoading = true;
    this.moviesService
      .getGenders()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((genders: any) => {
        this.genders = genders;
      });
  }

  onCheckboxChange(e: any) {
    const gendersFormArray: FormArray = this.form.get('genders') as FormArray;
    if (e.target.checked) {
      gendersFormArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      gendersFormArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          gendersFormArray.removeAt(i);
          return;
        }
        i++;
      });
    }
    this.gendersChange.emit(this.form.value.genders)
  }

  initForm() {
    this.form = this.fb.group({
      genders: this.fb.array([])
    })
  }
}
