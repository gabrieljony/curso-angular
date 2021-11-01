import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  OnDestroy,
  Input} from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.scss']
})
export class LifecycleHooksComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  // É sempre de boa prática declarar as interfaces

  @Input() valorInicial: number = 10;

  constructor() {
    console.log('constructor');
  }

  ngOnChanges() {
    // Antes do OnInit e quando valor do propety-binding(Input) do component é atualizado.
    // Chamado quando se muda o valor do Input()
    console.log('ngOnChanges');
  }
  ngOnInit() {
    // quando o Component é inicializado
    // Normalmente é aqui no OnInit que fazemos a chamada ao servidor.
    console.log('ngOnInit');
  }
  ngDoCheck() {
    // a cada ciclo de verificação de mudanças
    // Chamado quando se muda o valor do Input()
    console.log('ngDoCheck');
  }
  ngAfterContentInit() {
    // depois de inserir conteúdo externo na view
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    // a cada verificação de conteúdo inserido
    // Chamado quando se muda o valor do Input()
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    // Responder após o Angular inicializar as visualizações do componente
    // e as visualizações filhas ou a visualização que contém a diretiva
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    // a cada verificação de conteúdo / conteúdo filho
    // Chamado quando se muda o valor do Input()
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy() {
    // antes da diretiva/component ser destruído
    console.log('ngOnDestroy');
  }




}
