import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { TemplateFormModule } from './pages/template-form/template-form.module';
import { DataFormModule } from './pages/data-form/data-form.module';
import { DataFormBuilderModule } from './pages/data-form-builder/data-form-builder.module';
import { HomeModule } from './pages/home/home.module';
import { CursosModule } from './pages/cursos/cursos.module';
import { ListService } from './services/list.service';
import { ConsultarCepService } from './services/consultar-cep.service';
import { VerificarEmailService } from './services/verificar-email.service';
import { DataFormFullModule } from './pages/data-form-full/data-form-full.module';
import { PipeKeyvalueComponent } from './pages/pipe-keyvalue/pipe-keyvalue.component';

@NgModule({
  declarations: [AppComponent, PipeKeyvalueComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TemplateModule,
    TemplateFormModule,
    DataFormModule,
    DataFormFullModule,
    DataFormBuilderModule,
    CursosModule,
    HomeModule
  ],
  providers: [VerificarEmailService, ConsultarCepService, ListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
