import { FormArray, FormControl, FormGroup } from '@angular/forms';

export class FormValidations {
  //metodo generico para comparar 2 inputs - foi usado no confirmar e-mail
  static equalsTo(otherField: string) {
    const toValidator = (formControl: FormControl) => {
      if (otherField == null) {
        throw new Error('É necessário informar um campo.');
      }

      //console.log((<FormGroup>formControl.root));
      //console.log((<FormGroup>formControl.root).get(otherField));

      //formulario tem que ser renderizado na tela
      if (!formControl.root || !(<FormGroup>formControl.root).controls) {
        return null;
      }

      //console.log((<FormGroup>formControl.root));
      //console.log((<FormGroup>formControl.root).get(otherField));

      const field = (<FormGroup>formControl.root).get(otherField);

      //se o campo não existir
      if (!field) {
        throw new Error(
          'É necessário informar um campo válido, este campo não existe.'
        );
      }

      //faz a comparação
      if (field.value !== formControl.value) {
        return { equalsTo: otherField }; //pode retornar otherField ou true
      }

      //se o campo for igual vai retornar nulo para dizer que o campo está válido
      return null;
    };
    return toValidator;
  }

  static cepValidator(control: FormControl) {
    const cep = control.value;

    //verificar se o cep não é nulo e verifica se o campo é diferente de vazio
    if (cep && cep !== '') {
      const validacep = /^[0-9]{8}$/;
      let result = validacep.test(cep) ? null : { cepInvalido: true };
      // console.log('result', result);
      return result;
    }
    return null;
  }

  // retonar a mensagem de acordo com erro
  static getErrosMsg(
    fieldName: string,
    validatorName: string,
    validatorValue?: any
  ) {
    const config = {
      required: `${fieldName} é obrigatório.`,
      minlength: `${fieldName} precisa ter no mínimo ${validatorValue.requiredLength} caracteres.`,
      maxlength: `${fieldName} precisa ter no máximo ${validatorValue.requiredLength} caracteres.`,
      cepInvalido: 'CEP é inválido.',
    };

    return config[validatorName];
  }

  static requireMinCheckbox(min = 1) {
    const toValidator = (formArray: FormArray) => {
      /* A Validação Customizada pode ser feita com a programação estruturada:
       * const values = formArray.controls;
       * let totalChecked = 0;
       * for(let i=0; i < values.length; i++){
       *    if(values[i].value){
       *     totalChecked += 1
       *    }
       * }
       * return totalChecked >= min ? null : { required: true }
       */

      // Programação mais funcional
      const values = formArray.controls
        .map((v) => v.value)
        .reduce((total, current) => (current ? total + current : total), 0);
      return values >= min ? null : { required: true };
    };
    return toValidator;
  }
}
