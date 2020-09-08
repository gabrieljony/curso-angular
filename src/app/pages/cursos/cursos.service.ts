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

  findById(id) {
    console.log(id);
    return this.http.get<CursoModel>(`${this.API}/${id}`).pipe(take(1));
  }

  private create(curso) {
    return this.http.post(this.API, curso).pipe(take(1));
  }

  private update(curso) {
    return this.http.put(`${this.API}/${curso.id}`, curso).pipe(take(1));
  }

  save(curso) {
    if (curso.id) {
      return this.update(curso);
    }

    return this.create(curso);
  }

  remove(id) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
