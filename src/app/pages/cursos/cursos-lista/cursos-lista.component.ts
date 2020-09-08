import { Component, OnInit } from '@angular/core';
import { Observable, empty, Subject } from 'rxjs';

import { CursoModel } from './../curso.model';
import { CursosService } from './../cursos.service';
import { catchError, switchMap, tap, map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.less'],
})
export class CursosListaComponent implements OnInit {
  // cursos: CursoModel[];
  cursos$: Observable<CursoModel[]>;
  error$ = new Subject<boolean>();

  constructor(
    private cursosService: CursosService,
    private router: Router,
    private routeActive: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.cursosService.list().subscribe((dados) => {
    //   this.cursos = dados;
    // });

    this.onRefresh();
  }

  onRefresh() {
    this.cursos$ = this.cursosService.list().pipe(
      // map((v) => console.log(v)),
      // tap(),
      // switchMap((valor) => console.log(valor)),
      catchError((error) => {
        console.error(error);
        this.error$.next(true);
        return empty();
      })
    );
  }

  onEdit(id) {
    this.router.navigate(['editar', id], { relativeTo: this.routeActive });
  }

  onDelete(curso) {
    this.cursosService.remove(curso.id).subscribe(
      (success) => {
        console.log('Curso deletado com sucesso.');
        this.onRefresh();
      },
      (error) => {
        console.log('error', error);
        console.log('Error ao deletar o curso.');
      },
      () => console.log('request delete completado OK')
    );
  }
}
