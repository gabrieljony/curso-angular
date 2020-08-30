import { SharedModule } from './../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DataFormBuilderComponent } from './data-form-builder.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [DataFormBuilderComponent],
  exports: [DataFormBuilderComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class DataFormBuilderModule { }
