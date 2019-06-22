import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EstadoBr } from '../models/estadobr.model';
import { CidadeBr } from '../models/cidadebr.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }

  getEstadoBr() {
    return this.http.get<EstadoBr[]>('assets/dados/estadosbr.json');

  }
  getCidadesBr(idEstado: number) {
    return this.http.get<CidadeBr[]>('assets/dados/cidadesbr.json')
      .pipe(
        map((cidades: CidadeBr[]) => cidades.filter(c => c.estado == idEstado))
      );

  }

  getCargos() {
    return [
      { nome: 'Dev', nivel: 'Junior', descricao: 'Dev Jr'},
      { nome: 'Dev', nivel: 'Pleno', descricao: 'Dev Pl'},
      { nome: 'Dev', nivel: 'Senio', descricao: 'Dev Sr'}
    ];
  }

  getTecnologias() {
    return [
      { nome: 'java', descricao: 'Java'},
      { nome: 'javascript', descricao: 'Javascript'},
      { nome: 'php', descricao: 'Php'},
      { nome: 'ruby', descricao: 'Ruby'}
    ];
  }

  getNewsLetter() {
    return [
      { valor: 's', desc: 'Sim'},
      { valor: 'n', desc: 'Não'}
    ];
  }
}
