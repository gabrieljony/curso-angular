import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-keyvalue',
  templateUrl: './pipe-keyvalue.component.html',
  styleUrls: ['./pipe-keyvalue.component.less'],
})
export class PipeKeyvalueComponent implements OnInit {
  cursos = [
    { id: '1', nome: 'Angular' },
    { id: '2', nome: 'Java' },
  ];

  frameworksCss = [
    { id: 1, nome: 'Bootstrap' },
    { id: 2, nome: 'Materialize' },
    { id: 3, nome: 'Material Design' },
    { id: 4, nome: 'Prime NG' },
    { id: 5, nome: 'Bulma' },
  ];

  cursosComparator(a: any, b: any) {
    if (a.key === b.key) {
      return 0;
    }
    return a.key > b.key ? -1 : 1;
  }

  constructor() {}

  ngOnInit(): void {}
}
