import { ListService } from './../../services/list.service';
import { FormValidations } from './../../shared/validation/form-validation';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { BaseFormComponent } from '../../shared/base-form/base-form.component';
import { CidadeBr } from './../../models/cidadebr.model';
import { EstadoBr } from './../../models/estadobr.model';
import { VerificarEmailService } from '../../services/verificar-email.service';
import { ConsultarCepService } from './../../services/consultar-cep.service';

@Component({
  selector: 'app-data-form-full',
  templateUrl: './data-form-full.component.html',
  styleUrls: ['./data-form-full.component.less'],
})
export class DataFormFullComponent extends BaseFormComponent implements OnInit {
  // formulario: FormGroup;
  estados: EstadoBr[];
  cidades: CidadeBr[];
  // estados: Observable<EstadoBr[]>;
  cepInvalido: boolean = false;

  cargos: any[];
  tecnologias: any[];
  newsletterOp: any[];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private cepService: ConsultarCepService,
    private listService: ListService,
    private verificaEmailService: VerificarEmailService
  ) {
    super();
  }

  //No momento da inicialização do component chama o ngOnInit
  ngOnInit() {
    // this.verificaEmailService.verificarEmail('email@email.com').subscribe();

    // this.estados = this.dropdownService.getEstadoBr();
    this.listService.getEstadoBr().subscribe((dados) => (this.estados = dados));

    this.cargos = this.listService.getCargos();
    this.tecnologias = this.listService.getTecnologias();
    this.newsletterOp = this.listService.getNewsLetter();

    // this.dropdownEstados();

    // FormGroup
    //Instanciar uma classe FormGroup e a classe recebe um objeto como parâmetro - nome e email

    // console.log('this.formulario', this.formulario);
    this.formulario = new FormGroup({
      nome: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(15),
      ]),
      email: new FormControl(
        null,
        [Validators.required, Validators.email],
        this.validarEmail.bind(this)
      ),
      confirmarEmail: new FormControl(null, [
        FormValidations.equalsTo('email'),
      ]),
      endereco: new FormGroup({
        cep: new FormControl(null, [
          Validators.required,
          FormValidations.cepValidator,
        ]),
        numero: new FormControl(null, Validators.required),
        complemento: new FormControl(null),
        rua: new FormControl(null, Validators.required),
        bairro: new FormControl(null, Validators.required),
        cidade: new FormControl(null, Validators.required),
        estado: new FormControl(null, Validators.required),
      }),
      cargo: new FormControl(null),
      tecnologia: new FormControl(null),
      newsletter: new FormControl('s'),
      termos: new FormControl(null, Validators.pattern('true')),
    });

    // USANDO FormBuilder
    //Instanciar uma classe usando o FormBuilder e a classe recebe um objeto como parâmetro

    // this.formulario = this.formBuilder.group({
    //   nome: [null, Validators.required],
    //   email: [null, [Validators.required, Validators.email]],
    //   confirmarEmail: [null, [Validators.required, Validators.email]],
    //   endereco: this.formBuilder.group({
    //     cep: [null, Validators.required],
    //     numero: [null, Validators.required],
    //     complemento: [null],
    //     rua: [null, Validators.required],
    //     bairro: [null, Validators.required],
    //     cidade: [null, Validators.required],
    //     estado: [null, Validators.required],
    //   }),
    //   cargo: [null],
    //   tecnologia: [null],
    //   newsletter: ['s'],
    //   termos: [null, Validators.pattern('true')],
    // });

    // this.formulario
    //   .get('endereco.cep')
    //   .statusChanges  .pipe(
    //   distinctUntilChanged(),
    //   tap((value) => console.log('Status do CEP: ', value)),
    //   switchMap((status) =>
    //     status === 'VALID'
    //       ? this.cepService.consultaCEP(
    //           this.formulario.get('endereco.cep').value
    //         )
    //       : empty()
    //   )
    // )
    // .subscribe((dados) => (dados ? this.populaDadosForm(dados) : {}));

    // this.formulario.get('endereco.estado').valueChanges;
    // .pipe(
    //   tap(estado => console.log('Novo estado: ', estado)),
    //   map(estado => this.estados.filter(e=>e.sigla === estado)),
    //   map(estados => estados && estados.length > 0 ? estados[0].id : empty()),
    //   switchMap((estadoId: number) => this.listService.getCidadesBr(estadoId)),
    //   tap(console.log)
    // )
    // .subscribe(cidades => this.cidades = cidades);

    // this.dropdownService.getCidadesBr(8).subscribe(console.log);
  }

  submit() {
    console.log(this.formulario);
    console.log(this.formulario.value);

    this.http
      .post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
      .subscribe(
        (dados) => {
          console.log(dados);
          console.log(this.formulario.value);
        },
        (error: any) => alert('erro')
      );
    //reseta o form
    // this.formulario.reset();
    // ou
    //this.limpar();
  }

  verificaValidCep() {
    return (this.cepInvalido = true);
  }

  consultaCEP() {
    const cep = this.formulario.get('endereco.cep').value;

    if (cep != null && cep !== '') {
      this.cepService.consultaCEP(cep).subscribe((dados) => {
        this.populaDadosForm(dados);
        // console.log(dados);
      });
    }
  }

  populaDadosForm(dados) {
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

  resetaDadosForm() {
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

  dropdownEstados() {
    // this.dropdownService.getEstadoBr()
    //   .subscribe(dados => {
    //     this.estados = dados;
    //     console.log(this.estados);
    //   });
  }

  setarCargo() {
    const cargo = { nome: 'Dev', nivel: 'Pleno', descricao: 'Dev Pl' };
    this.formulario.get('cargo').setValue(cargo);
  }

  compararCargos(obj1, obj2) {
    return obj1 && obj2
      ? obj1.nome === obj2.nome && obj1.nivel === obj2.nivel
      : obj1 && obj2;
  }

  setarTecnologias() {
    this.formulario.get('tecnologia').setValue(['java', 'javascript', 'php']);
  }

  validarEmail(formControl: FormControl) {
    return this.verificaEmailService.verificarEmail(formControl.value);
    // .pipe(map(emailExiste => emailExiste ? { emailInvalido : true } : null));
  }
}
