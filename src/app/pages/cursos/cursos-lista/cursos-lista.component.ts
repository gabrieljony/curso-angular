import { Component, OnInit } from '@angular/core';
import { CursoModel } from './../curso.model';
import { CursosService } from './../cursos.service';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.less'],
})
export class CursosListaComponent implements OnInit {
  cursos: CursoModel[];

  constructor(private cursosService: CursosService) {}

  ngOnInit(): void {
    this.cursosService.list().subscribe((dados) => {
      this.cursos = dados;
    });
  }
}
