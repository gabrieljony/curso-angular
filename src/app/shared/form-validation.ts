import { FormArray, FormControl, FormGroup } from '@angular/forms';

export class FormValidations {

  //metodo generico para comparar 2 inputs - foi usado no confirmar e-mail
  static equalsTo(otherField: string) {
    const validator = (formControl: FormControl) => {
      if (otherField == null) {
        throw new Error ('É necessário informar um campo.');
      }

      //console.log((<FormGroup>formControl.root));
      //console.log((<FormGroup>formControl.root).get(otherField));

      //formulario tem que ser renderizado
      if (!formControl.root || !(<FormGroup>formControl.root).controls) {
        return null;
      }

      //console.log((<FormGroup>formControl.root));
      //console.log((<FormGroup>formControl.root).get(otherField));

      const field = (<FormGroup>formControl.root).get(otherField);

      //se o campo não existir
      if (!field) {
        throw new Error('É necessário informar um campo válido, este campo não existe.');
      }

      //faz a comparação
      if (field.value !== formControl.value) {
        return { equalsTo: otherField };//pode retornar otherField ou true
      }

      //se o campo for igual vai retornar nulo para dizer que o campo está válido
      return null;

    };
    return validator;
  }

  static cepValidator(control: FormControl) {

    const cep = control.value;

    //verificar se o cep não é nulo
    if (cep && cep !== ''){
      const validacep = /^[0-9]{8}$/;
      return validacep.test(cep) ? null : { cepInvalido : true };
    }
    return null;
  }

}
