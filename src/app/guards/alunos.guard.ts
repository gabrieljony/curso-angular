import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './../pages/login/auth.service';

@Injectable()
export class AlunosGuard implements CanActivateChild {

  constructor(private authService: AuthService, private router: Router) { }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('state Aluno: ', state)
    console.log('route: ', route)

    // Verifica se a rota é editar ele não tem permissão.
    if(state.url.includes('editar')){
      // alert('Usuário sem acesso.');
      // return false;
    }

    if(this.authService.usuarioEstaAutenticado()){
      return true;
    }

    this.router.navigate(['/login']);
    return false
  }

}
