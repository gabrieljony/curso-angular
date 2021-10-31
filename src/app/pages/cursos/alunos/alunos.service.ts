import { Injectable } from '@angular/core';

interface AlunoProps {
  id: number;
  name: string;
  email: string;
}

@Injectable()
export class AlunosService {

  private alunos: AlunoProps[] = [
    { id: 1, name: 'Aluno 01', email: 'aluno01@gmail.com'},
    { id: 2, name: 'Aluno 02', email: 'aluno02@gmail.com'},
    { id: 3, name: 'Aluno 03', email: 'aluno03@gmail.com'},
    { id: 4, name: 'Aluno 04', email: 'aluno04@gmail.com'}
  ]

  constructor() { }

  getAlunos(): AlunoProps[]{
    return this.alunos;
  }

  getAluno(id: number): AlunoProps{
    for (let i=0; i<this.alunos.length; i++){
      let aluno = this.alunos[i];
      if (aluno.id == id){
        return aluno
      }
    }
    return null;
  }

}
