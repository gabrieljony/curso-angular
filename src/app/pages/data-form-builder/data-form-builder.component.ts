import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormControl,
  FormArray,
} from '@angular/forms';

import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { ConsultarCepService } from './../../services/consultar-cep.service';
import { ListService } from './../../services/list.service';
import { CidadeBr } from './../../models/cidadebr.model';
import { EstadoBr } from './../../models/estadobr.model';

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
    private cepService: ConsultarCepService
  ) {
    super();
  }

  ngOnInit(): void {
    this.listService.getEstadoBr().subscribe((dados) => (this.estados = dados));

    this.cargos = this.listService.getCargos();
    this.tecnologias = this.listService.getTecnologias();
    this.newsletterOp = this.listService.getNewsLetter();

    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      confirmarEmail: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
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
  }

  buildFrameworks() {
    const values = this.frameworks.map((v) => new FormControl(false));
    return this.formBuilder.array(values);
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
    return (this.cepInvalido = true);
  }

  compararCargos(obj1, obj2): boolean {
    return obj1 && obj2
      ? obj1.nome === obj2.nome && obj1.nivel === obj2.nivel
      : obj1 && obj2;
  }
}
