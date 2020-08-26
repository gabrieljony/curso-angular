import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebugFormComponent } from './debug-form/debug-form.component';



@NgModule({
  declarations: [DebugFormComponent],
  exports:[
    DebugFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
