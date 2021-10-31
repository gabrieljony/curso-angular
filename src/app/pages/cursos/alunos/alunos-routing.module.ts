import { AlunosDeactivateGuard } from './../../../guards/alunos-deactivate.guard';
import { AlunoDetalheResolver } from './../../../guards/aluno-detalhe.resolver';
import { AlunosGuard } from './../../../guards/alunos.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
// Colisão de rotas, nas rotas tudo que for hardcode é avaliado primeiro para depois vim o dinâmico.
// As rotas são avaliadas de acordo como são declaradas.
const alunosRoutes: Routes = [
  {
    path: '',
    component: AlunosComponent,
    canActivateChild: [AlunosGuard],
    children: [
      { path: 'novo', component: AlunoFormComponent},
      { path: ':id', component: AlunoDetalheComponent, resolve: { aluno: AlunoDetalheResolver }},
      { path: ':id/editar', component: AlunoFormComponent, canDeactivate: [AlunosDeactivateGuard]},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],// Como é um modulo de funionalidades usamos o forChild
  exports: [RouterModule],
})
export class AlunosRoutingModule {}
