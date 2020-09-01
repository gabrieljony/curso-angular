import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CursoModel } from './curso.model';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  // readonly não posso atualizar essa variavel
  private readonly API = `${environment.API}cursos`;

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<CursoModel[]>(this.API);
  }
}
