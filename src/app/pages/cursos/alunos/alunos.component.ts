import { Component, OnInit } from '@angular/core';
import { AlunosService } from './alunos.service';

interface AlunoProps {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent implements OnInit {

  alunos: AlunoProps[] = [];

  constructor(private alunosService: AlunosService) { }

  ngOnInit() {
    this.alunos = this.alunosService.getAlunos();
  }

}
