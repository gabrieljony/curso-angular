import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.less'],
})
export class AlertModalComponent implements OnInit {
  @Input() message: string;
  @Input() type: string;

  constructor() {}

  ngOnInit(): void {}
}
