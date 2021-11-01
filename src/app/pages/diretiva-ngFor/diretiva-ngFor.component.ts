import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngFor',
  templateUrl: './diretiva-ngFor.component.html',
  styleUrls: ['./diretiva-ngFor.component.less']
})
export class DiretivaNgForComponent implements OnInit {

  cursos: string[] = ["Angular 2", "Java", "JavaScript", "React", "VueJs"]

  @ViewChild('cursoItem') cursoElement: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log('aqui')
    console.log('this.cursoElement', this.cursoElement)
    let elemento = document.getElementById('curso1');

    // elemento.checked = false;
    // elemento.disabled = false;
  }

  ngAfterViewChecked() {
    // a cada verificação de conteúdo / conteúdo filho
    // Chamado quando se muda o valor do Input()
    // console.log('ngAfterViewChecked');
  }

  isChecked(event){
    // console.log('checked', event)
    return true;
  }

  isDisabled(index, isFirst, isLast, isEven, isOdd){
    console.log('Índice: ', index + ', primeiro: ' + isFirst + ', último: ' + isLast + ', par: ' + isEven + ', ímpar: ' + isOdd)
    // console.log('this.cursoElement', this.cursoElement)
    // console.log('disabled', event)
    let elemento = document.getElementById('curso' + index);
    console.log('elemento', elemento)
    return true
  }

}
