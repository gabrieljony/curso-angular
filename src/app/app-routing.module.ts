import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataFormComponent } from './pages/data-form/data-form.component';
import { TemplateFormComponent } from './pages/template-form/template-form.component';
import { DataFormBuilderComponent } from './pages/data-form-builder/data-form-builder.component';
import { DataFormFullComponent } from './pages/data-form-full/data-form-full.component';

const routes: Routes = [
  { path: 'template-form', component: TemplateFormComponent },
  { path: 'data-form', component: DataFormComponent },
  { path: 'data-form-full', component: DataFormFullComponent },
  { path: 'data-form-builder', component: DataFormBuilderComponent },
  { path: '', pathMatch: 'full', redirectTo: 'data-form-builder' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
