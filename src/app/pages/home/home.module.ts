import { ManipulatingArraysComponent } from './../manipulating-arrays/manipulating-arrays.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [HomeComponent, ManipulatingArraysComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
