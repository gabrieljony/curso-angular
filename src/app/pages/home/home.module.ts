import { NovidadesTypescriptComponent } from './../novidades-typescript/novidades-typescript.component';
import { DiretivaNgForComponent } from './../diretiva-ngFor/diretiva-ngFor.component';
import { ViewChildComponent } from './../view-child/view-child.component';
import { LifecycleHooksComponent } from './../lifecycle-hooks/lifecycle-hooks.component';
import { ManipulatingArraysComponent } from './../manipulating-arrays/manipulating-arrays.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent,
    ManipulatingArraysComponent,
    LifecycleHooksComponent,
    ViewChildComponent,
    DiretivaNgForComponent,
    NovidadesTypescriptComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
