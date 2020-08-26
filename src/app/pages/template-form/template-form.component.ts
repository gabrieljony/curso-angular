import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.less'],
})
export class TemplateFormComponent implements OnInit {
  usuario: any = {
    nome: null,
    email: null,
    cep: null,
    numero: null,
    complemento: null,
    rua: null,
    bairro: null,
    cidade: null,
    estado: null,
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onSubmit(formulario) {
    console.log(formulario.value);
    console.log(formulario);
    console.log(this.usuario);
    this.http
      .post('https://httpbin.org/post', JSON.stringify(formulario.value))
      .subscribe((dados) => {
        console.log(dados);
        formulario.form.reset();
      });
  }

  verificaValidTouched(campo) {
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo) {
    return {
      'is-invalid': this.verificaValidTouched(campo),
    };
  }

  consultaCEP(cep) {
    console.log(cep);

    //Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != '') {
      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;
      //Valida o formato do CEP.
      if (validacep.test(cep)) {
        return this.http.get(`//viacep.com.br/ws/${cep}/json`);
      }
    }
  }
}
