import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './../../shared/shared.module';
import { TemplateFormComponent } from './template-form.component';

@NgModule({
  declarations: [TemplateFormComponent],
  exports: [TemplateFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ]
})
export class TemplateFormModule { }
