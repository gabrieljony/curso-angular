import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngFor',
  templateUrl: './diretiva-ngFor.component.html',
  styleUrls: ['./diretiva-ngFor.component.less']
})
export class DiretivaNgForComponent implements OnInit {

  cursos: string[] = ["Angular 2", "Java", "JavaScript", "React", "VueJs"]

  constructor() { }

  ngOnInit() {
  }

}
