import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebugFormComponent } from './debug-form/debug-form.component';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';



@NgModule({
  declarations: [DebugFormComponent, CampoControlErroComponent],
  exports:[
    DebugFormComponent,
    CampoControlErroComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
