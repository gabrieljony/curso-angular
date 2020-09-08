import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CursoModel } from './curso.model';
import { CrudService } from './../../shared/crud-service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Cursos2Service extends CrudService<CursoModel> {



  constructor(protected http: HttpClient) {
    super(http, `${environment.API}cursos`);
  }
}
