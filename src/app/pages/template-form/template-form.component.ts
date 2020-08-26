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

  //https://resttesttest.com/
  onSubmit(formulario) {
    this.http
      .post('https://httpbin.org/post', JSON.stringify(formulario.value))
      .subscribe((dados) => {
        formulario.form.reset();
      });
  }

  aplicaCssErro(campo) {
    return {
      'is-invalid': this.verificaValidTouched(campo),
    };
  }

  verificaValidTouched(campo) {
    return !campo.valid && campo.touched;
  }

  consultaCEP(cep, form) {
    //Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != '') {
      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;
      //Valida o formato do CEP.
      if (validacep.test(cep)) {
        this.resetaDadosForm(form);
        return this.http
          .get(`//viacep.com.br/ws/${cep}/json`)
          .subscribe((dados) => {
            this.populaDaodsForm(dados, form);
          });
      }
    }
  }

  populaDaodsForm(dados, formulario) {
    formulario.form.patchValue({
      endereco: {
        cep: dados.cep,
        complemento: dados.complemento,
        rua: dados.logradouro,
        localizacao: {
          bairro: dados.bairro,
          cidade: dados.localidade,
          estado: dados.uf,
        },
      },
    });
    // formulario.setValue({
    //   nome: formulario.value.nome,
    //   email: formulario.value.email,
    //   endereco: {
    //     cep: dados.cep,
    //     numero: '',
    //     complemento: dados.complemento,
    //     rua: dados.logradouro,
    //     localizacao: {
    //       bairro: dados.bairro,
    //       cidade: dados.localidade,
    //       estado: dados.uf,
    //     },
    //   },
    // });
  }

  resetaDadosForm(formulario) {
    formulario.form.patchValue({
      endereco: {
        complemento: null,
        rua: null,
        localizacao: {
          bairro: null,
          cidade: null,
          estado: null,
        },
      },
    });
  }
}
