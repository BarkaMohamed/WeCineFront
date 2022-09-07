import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LoaderComponent } from './component/loader/loader.component';
import {RouterModule} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ShellComponent} from "@shared/component/shell/shell.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [TranslateModule, CommonModule, RouterModule,NgbModule,HttpClientModule],
  declarations: [LoaderComponent,ShellComponent],
  exports: [LoaderComponent,ShellComponent],
})
export class SharedModule {}
