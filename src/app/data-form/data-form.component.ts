import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ConsultarCepService } from '../shared/services/consultar-cep.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private cepService: ConsultarCepService) { }

  //No momento da inicialização do component chama o ngOnInit
  ngOnInit() {

  // FormGroup
  //Instanciar uma classe FormGroup e a classe recebe um objeto como parâmetro - nome e email

  // this.formulario = new FormGroup({
  //   nome: new FormControl(null),
  //   email: new FormControl(null),
  //   endereco: new FormGroup({
  //     cep: new FormControl(null),
  //     numero: new FormControl(null),
  //     complemento: new FormControl(null),
  //     rua: new FormControl(null),
  //     bairro: new FormControl(null),
  //     cidade: new FormControl(null),
  //     estado: new FormControl(null)
  //   })
  // });

  // FormBuilder
  //Instanciar uma classe usando o FormBuilder e a classe recebe um objeto como parâmetro

  this.formulario = this.formBuilder.group({
    nome:[null, Validators.required],
    email:[null, [Validators.required, Validators.email]],
    endereco: this.formBuilder.group({
      cep:[null, Validators.required],
      numero:[null, Validators.required],
      complemento:[null],
      rua:[null, Validators.required],
      bairro:[null, Validators.required],
      cidade:[null, Validators.required],
      estado:[null, Validators.required]
    })
  });


  }

  onSubmit(){
    console.log(this.formulario);
    console.log(this.formulario.value);

    if (this.formulario.valid) {
      this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
      .subscribe(dados => {
        console.log(dados);
        console.log(this.formulario.value);
      },
      (error: any) => alert('erro'));
      //reseta o form
      // this.formulario.reset();
      // ou
      //this.limpar();

    } else {
      console.log('formulário invalido');
      this.verificaValidacoesForm(this.formulario);
    }
  }

  verificaValidacoesForm(formGroup: FormGroup) {

    Object.keys(formGroup.controls).forEach(campo => {
      console.log(campo);
      const controle = formGroup.get(campo);
      console.log(controle);
      controle.markAsDirty();
      //Validação do nivel endereco
      if (controle instanceof FormGroup){
        this.verificaValidacoesForm(controle);
      }
    })

  }

  limpar() {
    //resetar o form
    this.formulario.reset();
    console.log(this.formulario.value);
  }


  //Validação
  verificaValidTouched(campo: string) {
    return !this.formulario.get(campo).valid && (this.formulario.get(campo).touched || this.formulario.get(campo).dirty);
  }

  verificaValidEmailInvalido() {
    const campoEmail = this.formulario.get('email');
    if (campoEmail.errors){
      return campoEmail.errors['email']
    }
  }

  aplicaCssErro(campo: string) {
    return {
      'is-invalid': this.verificaValidTouched(campo),
    }
  }

  aplicaCssErroLabel(campo: string) {
    return {
      'control-label': this.verificaValidTouched(campo),
    }
  }

  consultaCEP() {

    const cep = this.formulario.get('endereco.cep').value;

    if (cep != null && cep !== '') {
      this.cepService.consultaCEP(cep)
      .subscribe(dados => this.populaDadosForm(dados));
    }

  }

  populaDadosForm(dados){

    this.formulario.patchValue({
      endereco: {
        rua: dados.logradouro,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf,
      }
    });
  }

  resetaDadosForm(){
    this.formulario.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null,
      }
    });
  }



}
