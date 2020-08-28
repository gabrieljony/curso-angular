import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.less'],
})
export abstract class BaseFormComponent {
  formulario: FormGroup;

  constructor() {}

  abstract submit();

  onSubmit() {
    if (this.formulario.valid) {
      this.submit();
    } else {
      console.log('formulário invalido');
      this.verificaValidacoesForm(this.formulario);
    }
  }

  verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((campo) => {
      console.log(campo);
      const controle = formGroup.get(campo);
      console.log(controle);
      controle.markAsDirty();
      controle.markAsTouched();
      //Validação do nivel endereco
      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    });
  }

  limpar() {
    //resetar o form
    this.formulario.reset();
    console.log(this.formulario.value);
  }

  //Validação
  verificaValidTouched(campo: string): boolean {
    return (
      this.formulario.get(campo) &&
      !this.formulario.get(campo).valid &&
      (this.formulario.get(campo).touched || this.formulario.get(campo).dirty)
    );
  }

  //Validação Required
  verificaValidRequired(campo: string) {
    return (
      this.formulario.get(campo).hasError('required') &&
      (this.formulario.get(campo).touched || this.formulario.get(campo).dirty)
    );
  }

  verificaValidEmailInvalido() {
    const campoEmail = this.formulario.get('email');
    if (campoEmail.errors) {
      return campoEmail.errors['email'];
    }
  }

  aplicaCssValid(campo: string) {
    return this.formulario.get(campo).status === 'VALID';
  }

  aplicaCssErro(campo: string) {
    return {
      'is-valid': this.aplicaCssValid(campo),
      'is-invalid': this.verificaValidTouched(campo),
    };
  }

  aplicaCssErroLabel(campo: string) {
    return {
      'control-label': this.verificaValidTouched(campo),
    };
  }

  getCampo(campo: string) {
    return this.formulario.get(campo);
  }
}
