import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less'],
})
export class ButtonComponent implements OnInit {
  @Input() btnType: string = 'button';
  @Input() idisabled: boolean = false;
  @Input() name: string;

  constructor() {}

  ngOnInit(): void {}
}
