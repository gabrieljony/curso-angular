import { tap } from 'rxjs/operators';
import { EnviarValorService } from './../../enviar-valor.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-poc-unsub',
  templateUrl: './poc-unsub.component.html',
  styleUrls: ['./poc-unsub.component.less'],
})
export class PocUnsubComponent implements OnInit, OnDestroy {
  nome = 'Componente com unsubscribe';
  valor: string;

  sub: Subscription[] = [];

  constructor(private service: EnviarValorService) {}

  ngOnInit(): void {
    this.sub.push(
      this.service
        .getValor()
        .pipe(tap((v) => console.log(this.nome, v)))
        .subscribe((novoValor) => (this.valor = novoValor))
    );
  }

  ngOnDestroy() {
    this.sub.forEach((s) => s.unsubscribe());
    console.log(`${this.nome} foi destruido.`);
  }
}
