import { FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

import { FormValidations } from './../validation/form-validation';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.less'],
})
export class ErrorMsgComponent implements OnInit {
  // @Input() mostrarErro: boolean;
  // @Input() msgErro: string;

  @Input() control: FormControl;
  @Input() label: string;

  constructor() {}

  ngOnInit() {}

  /* Não podemos atribuir um valor.
  *  Mas podemos obter o valor.
  */
  get errorMessage() {
    for (const propertyName in this.control.errors) {
      if (
        this.control.errors.hasOwnProperty(propertyName) &&
        this.control.touched
      ) {
        return FormValidations.getErrosMsg(
          this.label,
          propertyName,
          this.control.errors[propertyName]
        );
      }
    }

    return null;
  }
}
