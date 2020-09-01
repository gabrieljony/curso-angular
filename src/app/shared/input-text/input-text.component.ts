import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const INPUT_FIELD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputTextComponent),
  multi: true,
};

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.less'],
  providers:[INPUT_FIELD_VALUE_ACCESSOR]
})
export class InputTextComponent implements ControlValueAccessor {
  @Input() classeCssErroLabel;
  @Input() id: string;
  @Input() labelName: string;
  @Input() type = 'text';
  @Input() control;
  @Input() isReadOnly = false;

  private innerValue: any;

  get value() {
    return this.innerValue;
  }

  set value(valor: any) {
    if (valor !== this.innerValue) {
      this.innerValue = valor;
      //Valor foi modificado
      this.onChangeCb(valor);
    }
  }

  onChangeCb: (_: any) => void = () => {};
  onTouchedCb: (_: any) => void = () => {};

  //https://angular.io/api/forms/ControlValueAccessor
  writeValue(valor: any): void {
    this.value = valor;
  }
  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isReadOnly = isDisabled;
  }
}
