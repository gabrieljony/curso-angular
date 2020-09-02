import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { EnviarValorService } from './../../enviar-valor.service';

@Component({
  selector: 'app-poc-async',
  templateUrl: './poc-async.component.html',
  styleUrls: ['./poc-async.component.less']
})
export class PocAsyncComponent implements OnInit, OnDestroy {

  nome = 'Componente com async';
  valor$: Observable<string>;

  constructor(private service: EnviarValorService) { }

  ngOnInit(): void {
    this.valor$ = this.service
      .getValor()
      .pipe(tap((v) => console.log(this.nome, v)));
  }

  ngOnDestroy() {
    console.log(`${this.nome} foi destruido.`);
  }

}
