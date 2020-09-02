import { Component, OnInit, OnDestroy } from '@angular/core';
import { tap, takeUntil } from 'rxjs/operators';
import { EnviarValorService } from './../../enviar-valor.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-poc-take-until',
  templateUrl: './poc-take-until.component.html',
  styleUrls: ['./poc-take-until.component.less']
})
export class PocTakeUntilComponent implements OnInit, OnDestroy {

  nome = 'Componente com takeUntil';
  valor: string;

  unsub$ = new Subject();

  constructor(private service: EnviarValorService) { }

  ngOnInit(): void {
    this.service
      .getValor()
      .pipe(
        tap((v) => console.log(this.nome, v)),
        takeUntil(this.unsub$)
        )
      .subscribe((novoValor) => (this.valor = novoValor));
  }

  ngOnDestroy() {
    this.unsub$.next();
    this.unsub$.complete();
    console.log(`${this.nome} foi destruido.`);
  }

}
