import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient) { }

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
      localizacao: this.formBuilder.group({
        bairro:[null, Validators.required],
        cidade:[null, Validators.required],
        estado:[null, Validators.required]
      })
    })
  });


  }

  onSubmit(){
    console.log(this.formulario);
    console.log(this.formulario.value);

    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
    .subscribe(dados => {
      console.log(dados);
      console.log(this.formulario.value);
    },
    (error: any) => alert('erro'));


  }

  limpar() {
    //resetar o form
    this.formulario.reset();
    console.log(this.formulario.value);
  }


  //Validação
  verificaValidTouched(campo: string) {
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
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

}
