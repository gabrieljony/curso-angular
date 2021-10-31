import { map, switchMap, exhaustMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CursosService } from './../cursos.service';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.less'],
})
export class CursosFormComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private cursosService: CursosService,
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  // ActivatedRoute é uma classe do angular, que significa rota ativa, que pode ser injetada.
  // Para que podemos obter detalhe da rotas que está ativa no momento

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((params: any) => {
    //   const id = params['id'];
    //   console.log(id);
    //   const curso$ = this.cursosService.findById(id).subscribe((curso) => {
    //     this.updateForm(curso);
    //   });
    // });

    // this.activatedRoute.params
    //   .pipe(
    //     map((params: any) => {
    //       console.log(params['id']);
    //       return params['id'];
    //     }),
    //     switchMap(
    //       (id) => {
    //         console.log(id);
    //         return this.cursosService.findById(id);
    //       }
    //       // switchMap((curso) => this.cursosService.obterAulas(curso)),
    //     )
    //   )
    //   .subscribe((curso) => {
    //     console.log(curso);
    //     this.updateForm(curso);
    //   });

    // Caso for fazer um create, update ou um delete
    // concatMap -> A ordem da requisição importa
    // mergeMap -> A ordem da requisição Não importa *
    // exhaustMap -> Faz a requisição para obter a resposta, caso como login

    // curso que está sendo resolvido
    const curso = this.activatedRoute.snapshot.data['curso'];
    console.log('curso', curso)

    this.form = this.formBuilder.group({
      id: [curso.id],
      name: [
        curso.name,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(250),
        ],
      ],
    });
  }

  // updateForm(curso) {
  //   this.form.patchValue({
  //     id: curso.id,
  //     name: curso.name,
  //   });
  // }

  hasError() {
    return !this.form.valid;
  }

  hasErrorfield(field: string) {
    // console.log(this.form.get(field).errors);
    return this.form.get(field).errors;
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      console.log('submit');

      let msgSuccess = "Curso criado com sucesso."
      let msgError = "Erro ao criar curso, tenet novamente."
      if (this.form.value.id) {
        msgSuccess = "Curso atualizado com sucesso."
        msgError = "Erro ao atualizar curso, tenet novamente."
      }


      this.cursosService.save(this.form.value).subscribe(
        (success) => {
          console.log('success', msgSuccess);
          this.location.back();
        },
        (error) =>
          console.log('error', msgError),
        () => console.log('request completado OK')
      );
      // if (this.form.value.id) {
      //   //update
      //   this.cursosService.update(this.form.value).subscribe(
      //     (success) => {
      //       console.log('success, atualizado com sucesso', success);
      //       this.location.back();
      //     },
      //     (error) =>
      //       console.log('error ao atualizar o curso, tente novamente', error),
      //     () => console.log('request completado OK')
      //   );
      // } else {
      //   this.cursosService.create(this.form.value).subscribe(
      //     (success) => {
      //       console.log('success', success);
      //       this.location.back();
      //     },
      //     (error) => console.log('error', error),
      //     () => console.log('request completado OK')
      //   );
      // }
    }
  }
  onCancel() {
    this.submitted = false;
    this.form.reset();
    this.router.navigate(['/cursos']);
    // this.location.back();
    // console.log('onCancel');
  }
}
