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
  { path: 'home', component: HomeComponent },
  { path: 'url-invalida', component: DataFormComponent },
  { path: 'key-value', component: PipeKeyvalueComponent },
  { path: 'template-form', component: TemplateFormComponent },
  { path: 'data-form', component: DataFormComponent },
  { path: 'data-form-full', component: DataFormFullComponent },
  { path: 'data-form-builder', component: DataFormBuilderComponent },
  { path: 'download', component: DownloadComponent },
  { path: 'cursos', loadChildren: './pages/cursos/cursos.module#CursosModule' },
  {
    path: 'unsubscribe-rxjs',
    loadChildren:
      './pages/unsubscribe-rxjs/unsubscribe-rxjs.module#UnsubscribeRxjsModule',
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
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
