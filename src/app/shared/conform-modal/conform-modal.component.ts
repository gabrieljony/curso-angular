import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-conform-modal',
  templateUrl: './conform-modal.component.html',
  styleUrls: ['./conform-modal.component.less'],
})
export class ConformModalComponent implements OnInit {
  @Input() titleModel: string;
  @Input() msg: string;
  @Input() btnCancel: string = 'Cancelar';
  @Input() btnConfirm: string = 'Confirmar';

  confirmResult: Subject<boolean>;

  constructor() {}

  ngOnInit(): void {
    this.confirmResult =  new Subject();
  }

  onClose() {}

  onConfirm() {}
}
