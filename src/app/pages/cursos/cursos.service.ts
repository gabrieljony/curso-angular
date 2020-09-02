import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, take } from 'rxjs/operators';
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
    return this.http.get<CursoModel[]>(this.API).pipe(delay(3000));
  }

  create(curso) {
    return this.http.post(this.API, curso).pipe(take(1));
  }
}
