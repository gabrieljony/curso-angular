import { AlunoFormComponent } from './../pages/cursos/alunos/aluno-form/aluno-form.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

// O CanDeactivate tem o sinal de <>, no java chamamos de operador de diamante Diamont e dentro do operador passamos o tipo da classe, nesse caso sera AlunoFormComponent
// É obrigatorio para essa interface
@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<AlunoFormComponent> {

  canDeactivate(
    component: AlunoFormComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean  {
    console.log('Guarda de desativação.')
    // Temos acesso ao component
    let result = component.podeMudarRota();
    return result;
  }
}
