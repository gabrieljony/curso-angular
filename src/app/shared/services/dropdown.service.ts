import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EstadoBr } from '../models/estadobr.model';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }

  getEstadoBr() {
    return this.http.get<EstadoBr[]>('assets/dados/estadosbr.json');

  }

  getCargos() {
    return [
      { nome: 'Dev', nivel: 'Junior', descricao: 'Dev Jr'},
      { nome: 'Dev', nivel: 'Pleno', descricao: 'Dev Pl'},
      { nome: 'Dev', nivel: 'Senio', descricao: 'Dev Sr'}
    ];
  }
}
