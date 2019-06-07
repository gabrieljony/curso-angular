import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultarCepService {

  constructor(private http: HttpClient) { }


  consultaCEP(cep: string) {

    console.log(cep);

    // Nova variável "cep" somente com dígitos vai validar.
    cep = cep.replace(/\D/g, '');

    // Verifica se campo cep possui valor, ser diferente de vazio.
    if (cep !== '') {
      // Expressão regular para validar o CEP.
      const validacep = /^[0-9]{8}$/;

      // Valida o formato do CEP.
      if (validacep.test(cep)) {
        // return this.http.get(`//viacep.com.br/ws/${cep}/json`);
        return this.http.get('http://cep.republicavirtual.com.br/web_cep.php?cep=' + cep + '&formato=json');
      }
    }

    return of({});
  }


}
