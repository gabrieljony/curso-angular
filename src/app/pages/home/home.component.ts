import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  valorI: number = 20;
  mostrar: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  mudarValor(){
    this.valorI++;
  }

  deletar(){
    this.mostrar = false;
  }

}
