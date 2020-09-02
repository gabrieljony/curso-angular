import { EnviarValorService } from './../enviar-valor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unsubscribe-poc',
  templateUrl: './unsubscribe-poc.component.html',
  styleUrls: ['./unsubscribe-poc.component.less'],
})
export class UnsubscribePocComponent implements OnInit {
  mostrarComponentes = true;

  constructor(private service: EnviarValorService) {}

  ngOnInit(): void {}

  emitirValor(valor: string) {
    this.service.emitirValor(valor);
  }

  destruirComponentes() {
    this.mostrarComponentes = !this.mostrarComponentes;
  }
}
