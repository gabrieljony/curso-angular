import { IFormCanDeactivate } from './../../../../guards/iform-candeactivate.guard';
import { AlunosService } from './../alunos.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent implements OnInit, OnDestroy, IFormCanDeactivate {

  aluno: any;
  alunoSubscription: Subscription;
  private formMudou: boolean = false;

  constructor(private routeActive: ActivatedRoute, private alunosService: AlunosService) { }

  ngOnInit() {
    this.alunoSubscription = this.routeActive.params.subscribe((params: any) => {
      let id = params['id'];

      this.aluno = this.alunosService.getAluno(id);
      console.log('this.aluno', this.aluno)
    });
  }

  ngOnDestroy() {
    this.alunoSubscription.unsubscribe();
  }

  onInput(){
    this.formMudou = true;
  }

  onSave(){
    console.log('aluno', this.aluno)
  }

  podeMudarRota(): boolean{
    // Teve alguma alteração no formulario e pergunta se gostaria de mudar de página/rota
    if(this.formMudou){
      return confirm('Tem certeza que deseja sair dessa página');
    }
    return true;
  }

  podeDesativar(): boolean{
    return this.podeMudarRota();
  }

}
