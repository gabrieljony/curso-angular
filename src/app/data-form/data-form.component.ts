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
  //Instanciar uma classe FormGroup e a classe recebe um objeto como parâmetro - nome e email
  // this.formulario = new FormGroup({
  //   nome: new FormControl(null),
  //   email: new FormControl(null)
  // });
  //Instanciar uma classe usando o FormBuilder e a classe recebe um objeto como parâmetro
  this.formulario = this.formBuilder.group({
    nome:[null, Validators.required],
    email:[null, [Validators.required, Validators.email]]
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
  verificaValidTouched(campo) {
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }

  aplicaCssErro(campo) {
    return {
      'is-invalid': this.verificaValidTouched(campo),
    }
  }

  aplicaCssErroLabel(campo) {
    return {
      'control-label': this.verificaValidTouched(campo),
    }
  }

}
