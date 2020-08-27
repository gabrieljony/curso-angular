import { ReactiveFormsModule } from '@angular/forms';
import { DataFormComponent } from './data-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../../shared/shared.module';

@NgModule({
  declarations: [DataFormComponent],
  exports: [DataFormComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
})
export class DataFormModule {}
