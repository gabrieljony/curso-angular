import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.less']
})
export class ViewChildComponent implements OnInit {

  valor: number = 0;

  @ViewChild('campoInput') camoValorInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onDecrementar(){
    console.log('onDecrementar', this.camoValorInput.nativeElement)
    console.log(this.camoValorInput)
    this.camoValorInput.nativeElement.value--;
  }

  onIncrementar(){
    this.camoValorInput.nativeElement.value++;
  }

}
