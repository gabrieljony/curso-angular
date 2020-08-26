import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataFormComponent } from './pages/data-form/data-form.component';
import { TemplateFormComponent } from './pages/template-form/template-form.component';

const routes: Routes = [
  { path: 'template-form', component: TemplateFormComponent },
  { path: 'data-form', component: DataFormComponent },
  { path: '', pathMatch: 'full', redirectTo: 'template-form' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
