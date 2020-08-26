import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebugFormComponent } from './debug-form/debug-form.component';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    DebugFormComponent,
    CampoControlErroComponent,
    ButtonComponent,
  ],
  exports: [DebugFormComponent, CampoControlErroComponent, ButtonComponent],
  imports: [CommonModule],
})
export class SharedModule {}
