import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '' }
];

@NgModule({
  exports: [],
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
