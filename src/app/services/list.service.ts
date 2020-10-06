import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { EstadoBr } from '../models/estadobr.model';
import { CidadeBr } from '../models/cidadebr.model';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor(private http: HttpClient) {}

  getEstadoBr() {
    return this.http.get<EstadoBr[]>('assets/dados/estadosbr.json');
  }
  getCidadesBr(idEstado: number) {
    return this.http
      .get<CidadeBr[]>('assets/dados/cidadesbr.json')
      .pipe(
        map((cidades: CidadeBr[]) =>
          cidades.filter((c) => c.estado == idEstado)
        )
      );
  }

  getCargos() {
    return [
      { id: 1, descricao: 'Dev Jr' },
      { id: 2, descricao: 'Dev Pl' },
      { id: 3, descricao: 'Dev Sr' },
      // { nome: 'Dev', nivel: 'Junior', descricao: 'Dev Jr' },
      // { nome: 'Dev', nivel: 'Pleno', descricao: 'Dev Pl' },
      // { nome: 'Dev', nivel: 'Senio', descricao: 'Dev Sr' },
    ];
  }

  getTecnologias() {
    return [
      { nome: 'java', descricao: 'Java' },
      { nome: 'javascript', descricao: 'Javascript' },
      { nome: 'php', descricao: 'Php' },
      { nome: 'ruby', descricao: 'Ruby' },
    ];
  }

  getNewsLetter() {
    return [
      { valor: 's', desc: 'Sim' },
      { valor: 'n', desc: 'Não' },
    ];
  }
}
