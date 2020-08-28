import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { DataFormFullComponent } from './data-form-full.component';


@NgModule({
  declarations: [DataFormFullComponent],
  exports: [DataFormFullComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class DataFormFullModule { }
