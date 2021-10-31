import { FormsModule } from '@angular/forms';
import { AlunosDeactivateGuard } from './../../../guards/alunos-deactivate.guard';
import { AlunosGuard } from './../../../guards/alunos.guard';
import { AlunosService } from './alunos.service';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosComponent } from './alunos.component';
import { AlunosRoutingModule } from './alunos-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AlunosRoutingModule
  ],
  declarations: [
    AlunosComponent,
    AlunoFormComponent,
    AlunoDetalheComponent
  ],
  providers: [AlunosService, AlunosGuard, AlunosDeactivateGuard]
})
export class AlunosModule { }
