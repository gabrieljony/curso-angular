import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novidades-typescript',
  templateUrl: './novidades-typescript.component.html',
  styleUrls: ['./novidades-typescript.component.scss']
})
export class NovidadesTypescriptComponent implements OnInit {

  tarefa: any = {
    desc: 'Descrição da tarefa',
    responsavel: {
      usuario: null
    }
    // responsavel: { nome: 'Gabriel'}
  }

  valorPadrao = 'Gabriel'

  constructor() { }

  ngOnInit() {
  }

  upperCase(){
    // Antes
    if(this.tarefa && this.tarefa.responsavel && this.tarefa.responsavel.usuario){
      this.tarefa.responsavel.usuario.toUpperCAse();
    }
    // this.tarefa.responsavel.usuario.toUpperCAse();
    // Agora
    const user = this.tarefa?.responsavel?.usuario?.toUpperCAse() ?? this.valorPadrao;

    return user;
  }

}
