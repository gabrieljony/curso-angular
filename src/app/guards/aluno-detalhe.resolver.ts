import { AlunosService } from './../pages/cursos/alunos/alunos.service';
import { AlunoProps } from './../pages/cursos/alunos/alunos';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

//Guarda de Rotas: Resolve: carregando dados antes da rota ser ativada
@Injectable()
export class AlunoDetalheResolver implements Resolve<AlunoProps> {
  constructor(private alunosService: AlunosService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<any>|Promise<any>|any {
      console.log('AlunoDetalheResolver'); //Carregar os dados antes de carregar a inicialização do component

      let id = route.params['id']

      return this.alunosService.getAluno(id);

  }

}

