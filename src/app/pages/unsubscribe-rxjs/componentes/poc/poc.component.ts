import { Component, OnInit, OnDestroy } from '@angular/core';
import { tap } from 'rxjs/operators';
import { EnviarValorService } from './../../enviar-valor.service';

@Component({
  selector: 'app-poc',
  templateUrl: './poc.component.html',
  styleUrls: ['./poc.component.less'],
})
export class PocComponent implements OnInit, OnDestroy {
  nome = 'Componente sem unsubscribe';
  valor: string;

  constructor(private service: EnviarValorService) {}

  ngOnInit(): void {
    this.service
      .getValor()
      .pipe(tap((v) => console.log(this.nome, v)))
      .subscribe((novoValor) => (this.valor = novoValor));
  }

  ngOnDestroy() {
    console.log(`${this.nome} foi destruido.`);
  }
}
