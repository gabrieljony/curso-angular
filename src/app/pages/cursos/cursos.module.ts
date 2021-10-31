import { AlunosModule } from './alunos/alunos.module';
import { Cursos2Service } from './cursos2.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CursosService } from './cursos.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { CursosFormComponent } from './cursos-form/cursos-form.component';

@NgModule({
  declarations: [CursosListaComponent, CursosFormComponent],
  imports: [
    CommonModule, // O CommonModulo faz parte do modulo de funcionalidade, ele possui as diretivas que usamos mais no angular
    ReactiveFormsModule,
    AlunosModule,
    CursosRoutingModule
  ],
  providers: [CursosService, Cursos2Service],
})
export class CursosModule {}
