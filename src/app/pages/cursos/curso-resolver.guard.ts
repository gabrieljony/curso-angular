import { CursosService } from './cursos.service';
import { CursoModel } from './curso.model';
import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CursoResolverGuard implements Resolve<CursoModel> {
  constructor(private cursosService: CursosService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<CursoModel> {
    if (route.params && route.params['id']) {
      return this.cursosService.findById(route.params['id']);
    }

    return of({
      id: null,
      name: null,
    });
  }
}
