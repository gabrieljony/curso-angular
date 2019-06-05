import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
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
    estado: null
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form.value);
    console.log(form);
    console.log(this.usuario);
  }

  verificaValidTouched(campo) {
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo) {
    return {
      'is-invalid': this.verificaValidTouched(campo),
    }
  }

  consultaCEP(cep) {
    console.log(cep);
    //Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');
    //Verifica se campo cep possui valor informado.
    if (cep != "") {
      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;
      //Valida o formato do CEP.
      if(validacep.test(cep)) {
        return this.http.get(`//viacep.com.br/ws/${cep}/json`);
      }
    
    }
  }

}
