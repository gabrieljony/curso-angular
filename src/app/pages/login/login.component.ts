import { Component, OnInit } from '@angular/core';

import { Usuario } from './usuario';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario()

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onLogin() {
    console.log(this.usuario);
    this.authService.login(this.usuario);
  }

}
