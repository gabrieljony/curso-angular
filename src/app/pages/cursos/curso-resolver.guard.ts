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
    console.log('state', state);
    if (route.params && route.params['id']) {
      return this.cursosService.findById(route.params['id']);
    }

    // Criar um curso novo, retorna um observable
    return of({
      id: null,
      name: null,
    });
  }
}
