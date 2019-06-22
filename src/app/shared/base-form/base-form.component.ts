import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-form',
  template: '<div></div>'
})
export abstract class BaseFormComponent implements OnInit {

  formulario: FormGroup;

  constructor() { }

  ngOnInit() {
  }

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

    Object.keys(formGroup.controls).forEach(campo => {
      console.log(campo);
      const controle = formGroup.get(campo);
      console.log(controle);
      controle.markAsDirty();
      controle.markAsTouched();
      //Validação do nivel endereco
      if (controle instanceof FormGroup){
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
  verificaValidTouched(campo: string) {
    return !this.formulario.get(campo).valid &&
    (this.formulario.get(campo).touched || this.formulario.get(campo).dirty);
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
    if (campoEmail.errors){
      return campoEmail.errors['email']
    }
  }

  aplicaCssErro(campo: string) {
    return {
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
