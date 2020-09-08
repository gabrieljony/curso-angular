import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlertModelService {
  constructor() {}

  showCorfirm(titleModal: string, msg: string, okTxt?: string, cancelTxt?: string) {
  }
}
