import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataFormComponent } from './pages/data-form/data-form.component';
import { TemplateModule } from './template/template.module';
import { TemplateFormModule } from './pages/template-form/template-form.module';

@NgModule({
  declarations: [AppComponent, DataFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TemplateModule,
    TemplateFormModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
