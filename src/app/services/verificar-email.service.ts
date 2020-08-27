import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerificarEmailService {

  constructor(private http: HttpClient) { }

  verificarEmail(campo: string) {
    return this.http.get('/assets/dados/verificarEmail.json')
    // .pipe(
    //   delay(2000),
    //   map((dados: { emails: any[] }) => dados.emails),
    //   // tap(console.log),
    //   map((dados: { email: string }[]) => dados.filter(valor => valor.email === campo)),
    //   // tap(console.log),
    //   map((dados: any[]) => dados.length > 0),
    //   // tap(console.log),
    // );
  }
}
