import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CursosGuard } from './guards/cursos.guard';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './pages/login/auth.service';
import { LoginComponent } from './pages/login/login.component';
import { UnsubscribeRxjsModule } from './pages/unsubscribe-rxjs/unsubscribe-rxjs.module';
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
import { ListService } from './services/list.service';
import { ConsultarCepService } from './services/consultar-cep.service';
import { VerificarEmailService } from './services/verificar-email.service';
import { DataFormFullModule } from './pages/data-form-full/data-form-full.module';
import { PipeKeyvalueComponent } from './pages/pipe-keyvalue/pipe-keyvalue.component';
import { DownloadComponent } from './pages/download/download.component';
import { FileService } from './services/file.service';
import { AulaTypescriptComponent } from './pages/aula-typescript/aula-typescript.component';

@NgModule({
  declarations: [AppComponent, PipeKeyvalueComponent, DownloadComponent, AulaTypescriptComponent, LoginComponent, NotFoundComponent],
  imports: [
    BrowserModule, // O BrowserModule é usado no modulo principal(raiz), não pode ser usado no modulo de funcionalidade.
    FormsModule,
    ReactiveFormsModule,
    TemplateModule,
    TemplateFormModule,
    DataFormModule,
    DataFormFullModule,
    DataFormBuilderModule,
    HomeModule,
    UnsubscribeRxjsModule,
    AppRoutingModule, // É uma boa prática deixar o modulo de rota no final das importações.
  ],
  providers: [
    AuthGuard,
    CursosGuard,
    AuthService,
    VerificarEmailService,
    ConsultarCepService,
    ListService,
    FileService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
