import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CursoModel } from './curso.model';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  // readonly não posso atualizar essa variavel
  private readonly API = 'http://localhost:3000/cursos';

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<CursoModel[]>(this.API);
  }
}
