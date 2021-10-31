import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CursosGuard } from './guards/cursos.guard';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { PipeKeyvalueComponent } from './pages/pipe-keyvalue/pipe-keyvalue.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSerializer } from '@angular/router';

import { DataFormComponent } from './pages/data-form/data-form.component';
import { TemplateFormComponent } from './pages/template-form/template-form.component';
import { DataFormBuilderComponent } from './pages/data-form-builder/data-form-builder.component';
import { DataFormFullComponent } from './pages/data-form-full/data-form-full.component';
import { HomeComponent } from './pages/home/home.component';
import { DownloadComponent } from './pages/download/download.component';

// path = é o caminho
// component = é o component a ser renderizado por aquele caminho path
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'url-invalida', component: DataFormComponent, canActivate: [AuthGuard] },
  { path: 'key-value', component: PipeKeyvalueComponent, canActivate: [AuthGuard] },
  { path: 'template-form', component: TemplateFormComponent, canActivate: [AuthGuard] },
  { path: 'data-form', component: DataFormComponent, canActivate: [AuthGuard] },
  { path: 'data-form-full', component: DataFormFullComponent, canActivate: [AuthGuard] },
  { path: 'data-form-builder', component: DataFormBuilderComponent, canActivate: [AuthGuard] },
  { path: 'download', component: DownloadComponent, canActivate: [AuthGuard] },
  // { path: 'cursos', loadChildren: './pages/cursos/cursos.module#CursosModule' },
  {
    path: 'cursos',
    loadChildren: () => import('./pages/cursos/cursos.module').then(m => m.CursosModule),
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'unsubscribe-rxjs',
    loadChildren:
      './pages/unsubscribe-rxjs/unsubscribe-rxjs.module#UnsubscribeRxjsModule',
    canActivate: [AuthGuard]
  },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      useHash: true,
      scrollPositionRestoration: 'enabled',
      malformedUriErrorHandler: (
        error: URIError,
        urlSerializer: UrlSerializer,
        url: string
      ) => {
        console.log(error);
        console.log(url); //url mal formada
        return urlSerializer.parse('/url-invalida');
      },
    }),
  ],
  exports: [RouterModule], // O RouterModule possui as diretivas de rota routerLink
})
export class AppRoutingModule {}
