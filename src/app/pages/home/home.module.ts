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
    ViewChildComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
