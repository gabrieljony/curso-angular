import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormControl,
  FormArray,
} from '@angular/forms';

import { map, tap, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { BaseFormComponent } from './../../shared/base-form/base-form.component';
import { ConsultarCepService } from './../../services/consultar-cep.service';
import { ListService } from './../../services/list.service';
import { CidadeBr } from './../../models/cidadebr.model';
import { EstadoBr } from './../../models/estadobr.model';
import { FormValidations } from './../../shared/validation/form-validation';
import { VerificarEmailService } from './../../services/verificar-email.service';
import { empty } from 'rxjs';

@Component({
  templateUrl: './data-form-builder.component.html',
  styleUrls: ['./data-form-builder.component.less'],
})
export class DataFormBuilderComponent
  extends BaseFormComponent
  implements OnInit {
  estados: EstadoBr[];
  cidades: CidadeBr[];

  cepInvalido: boolean = false;

  cargos: any[];
  tecnologias: any[];
  newsletterOp: any[];

  frameworks = ['Angular', 'React', 'Vue'];

  constructor(
    private formBuilder: FormBuilder,
    private listService: ListService,
    private cepService: ConsultarCepService,
    private verificarEmailService: VerificarEmailService
  ) {
    super();
  }

  ngOnInit(): void {
    // this.verificarEmailService.verificarEmail('').subscribe();
    this.listService.getEstadoBr().subscribe((dados) => (this.estados = dados));

    this.cargos = this.listService.getCargos();
    this.tecnologias = this.listService.getTecnologias();
    this.newsletterOp = this.listService.getNewsLetter();

    this.formulario = this.formBuilder.group({
      nome: [
        ,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
        ],
      ],
      email: [
        null,
        [Validators.required, Validators.email],
        [this.validarEmail.bind(this)],
      ],
      confirmarEmail: [
        null,
        [
          Validators.required,
          Validators.email,
          FormValidations.equalsTo('email'),
        ],
      ],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, FormValidations.cepValidator]],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        estado: [null, Validators.required],
        cidade: [null, Validators.required],
      }),
      cargo: [null],
      tecnologia: [null],
      newsletter: ['s'],
      termos: [null, Validators.pattern('true')],
      frameworks: this.buildFrameworks(),
    });

    this.formulario
      .get('endereco.cep')
      .statusChanges.pipe(
        distinctUntilChanged(),
        // tap((status) => console.log('status do CEP:', status)),
        switchMap((status) =>
          status === 'VALID'
            ? this.cepService.consultaCEP(
                this.formulario.get('endereco.cep').value
              )
            : empty()
        )
      )
      .subscribe((dados) => (dados ? this.populaDadosForm(dados) : {}));

    this.formulario
      .get('endereco.estado')
      .valueChanges.pipe(
        distinctUntilChanged(),
        tap((estado) => console.log('estado:', estado)),
        map((estado) => this.estados.filter((e) => e.sigla === estado)),
        map((estados) =>
          estados && estados.length > 0 ? estados[0].id : empty()
        ),
        switchMap((estadoId: number) =>
          this.listService.getCidadesBr(estadoId)
        ),
        tap(console.log)
      )
      .subscribe((cidades) => {
        this.formulario.patchValue({
          endereco: {
            cidade: null,
          },
        });
        this.cidades = cidades;
      });
  }

  buildFrameworks() {
    const values = this.frameworks.map((v) => new FormControl(false));
    return this.formBuilder.array(
      values,
      FormValidations.requireMinCheckbox(1)
    );
  }

  get formData() {
    return <FormArray>this.formulario.get('frameworks');
  }

  submit(): void {
    // console.log(this.formulario);
    let valueSubmit = Object.assign({}, this.formulario.value);

    /*
     * Vamos fazer um replace=substituir, e é dessa forma que trabalhamos com
     * imutabilidade de objetos que é uma coisa
     * que podemos utilizar para melhorar a performace do Angular  que é também
     * usado em varias bibliotecas como o redux. REDUX no Angular
     */
    valueSubmit = Object.assign(valueSubmit, {
      frameworks: valueSubmit.frameworks
        .map((v, i) => (v ? this.frameworks[i] : null))
        .filter((v) => v !== null),
    });
    console.log('valueSubmit', valueSubmit);
  }

  consultaCEP(): void {
    const cep = this.formulario.get('endereco.cep').value;

    if (cep != null && cep !== '') {
      this.cepService.consultaCEP(cep).subscribe((dados) => {
        this.populaDadosForm(dados);
      });
    }
  }

  populaDadosForm(dados): void {
    if (dados.resultado === '1') {
      this.cepInvalido = false;
      this.formulario.patchValue({
        endereco: {
          rua: dados.tipo_logradouro + ' ' + dados.logradouro,
          complemento: dados.complemento,
          bairro: dados.bairro,
          cidade: dados.cidade,
          estado: dados.uf,
        },
      });
    } else {
      this.resetaDadosForm();
      this.verificaValidCep();
    }
  }

  resetaDadosForm(): void {
    this.formulario.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null,
      },
    });
  }

  verificaValidCep(): boolean {
    return this.cepInvalido === true;
  }

  compararCargos(obj1, obj2): boolean {
    return obj1 && obj2
      ? obj1.nome === obj2.nome && obj1.nivel === obj2.nivel
      : obj1 && obj2;
  }

  validarEmail(formControl: FormControl) {
    return this.verificarEmailService
      .verificarEmail(formControl.value)
      .pipe(
        map((emailExiste) => (emailExiste ? { emailInvalido: true } : null))
      );
  }
}
