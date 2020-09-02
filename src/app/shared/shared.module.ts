import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebugFormComponent } from './debug-form/debug-form.component';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { ButtonComponent } from './button/button.component';
import { InputTextComponent } from './input-text/input-text.component';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { AlertModalComponent } from './alert-modal/alert-modal.component';

@NgModule({
  declarations: [
    DebugFormComponent,
    CampoControlErroComponent,
    ButtonComponent,
    InputTextComponent,
    InputTextComponent,
    ErrorMsgComponent,
    AlertModalComponent,
  ],
  exports: [
    DebugFormComponent,
    CampoControlErroComponent,
    ButtonComponent,
    InputTextComponent,
    ErrorMsgComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
