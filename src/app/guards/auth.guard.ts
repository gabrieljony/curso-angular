import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './../pages/login/auth.service';
// O que faz essa Classe ser um guarda de rotas é ela implementar a interface CanActivate
// Na interface a gente apenas define o comportamento que a classe precisa ter, apenas tem a assinatura do metodo
// Quando implementa a interface precisamos implementar a assinatura da interface
@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    // console.log('state: ', state)
    // console.log('route: ', route)
    return this.verificarAcesso();
  }

  private verificarAcesso(): boolean{
    if(this.authService.usuarioEstaAutenticado()){
      return true;
    }

    this.router.navigate(['/login']);
    return false
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log('canLoad: Verificando se usuário pode carregar o codigo do módulo')

    return this.verificarAcesso();
  }

}
