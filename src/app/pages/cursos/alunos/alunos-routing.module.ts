import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
// Colisão de rotas, nas rotas tudo que for hardcode é avaliado primeiro para depois vim o dinâmico.
// As rotas são avaliadas de acordo como são declaradas.
const alunosRoutes: Routes = [
  {
    path: 'alunos',
    component: AlunosComponent,
    children: [
      { path: 'novo', component: AlunoFormComponent },
      { path: ':id', component: AlunoDetalheComponent },
      { path: ':id/editar', component: AlunoFormComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],// Como é um modulo de funionalidades usamos o forChild
  exports: [RouterModule],
})
export class AlunosRoutingModule {}
