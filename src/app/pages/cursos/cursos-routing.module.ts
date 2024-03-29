import { CursoResolverGuard } from './curso-resolver.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { CursosFormComponent } from './cursos-form/cursos-form.component';

const appRoutes: Routes = [
  {
    path: '',
    component: CursosListaComponent,
  },
  {
    path: 'novo',
    component: CursosFormComponent,
    resolve: {
      curso: CursoResolverGuard,
    },
  },
  {
    path: 'editar/:id',
    component: CursosFormComponent,
    resolve: {
      curso: CursoResolverGuard,
    },
  },
  // { path: 'alunos', loadChildren: './alunos/alunos.module#AlunosModule' },
  { path: 'alunos', loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule)},
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],// Como é um modulo de funionalidades usamos o forChild
  exports: [RouterModule],
})
export class CursosRoutingModule {}
