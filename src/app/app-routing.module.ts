import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataFormComponent } from './pages/data-form/data-form.component';
import { TemplateFormComponent } from './pages/template-form/template-form.component';
import { DataFormBuilderComponent } from './pages/data-form-builder/data-form-builder.component';
import { DataFormFullComponent } from './pages/data-form-full/data-form-full.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'template-form', component: TemplateFormComponent },
  { path: 'data-form', component: DataFormComponent },
  { path: 'data-form-full', component: DataFormFullComponent },
  { path: 'data-form-builder', component: DataFormBuilderComponent },
  { path: 'cursos', loadChildren: './pages/cursos/cursos.module#CursosModule' },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
