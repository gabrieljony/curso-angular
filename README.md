# CursoAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## RequestsHttp

json-server --watch src/assets/dados/db.json

## Introdução
## Ambiente de Desenvolvimento
## TypeScript
## Módulos
## Data binding
## Ciclo de Vida do componente
## Angular CLI
## Diretivas
## Serviços
## Pipes(Filtros)
## Formulários
## Formulários Reativos (data-driven)
## Http
## Depuração / Debug

### Debug com Augury(Extensão no Google Chrome ou Firefox)
[Angular Augury](https://augury.rangle.io/)

### Debug com VS Code
No icone de Run and DEbug realizar a configuração do VS Code para depuração
arquivo `launch.json`
Extensão já vem instalada no VS Code [JavaScript Debugger](https://github.com/microsoft/vscode-js-debug)
"type": "pwa-chrome",
Renomeia o nome do Debug
"name": "Debug Angular", 
Alterar a URL
"url": "http://localhost:4200",

## Build e Deploy
[Build versão 10 do Angular](https://v10.angular.io/cli/build)
"build": "ng build --configuration=production",
`npm run build`
Execute `npm run build` para construir o projeto. Os artefatos de construção serão armazenados no diretório `dist/`. Use o sinalizador `--prod` para uma construção de produção.
`--configuration=production`
Um destino de compilação nomeado, conforme especificado na seção "configurations" do arquivo angular.json. Cada destino nomeado é acompanhado por uma configuração de opções padrão para esse destino. 
*Definir isso substitui explicitamente o sinalizador `--prod`
### Deploy em Produção (Firebase Hosting)
instale o firebase globalmente `npm install -g firebase-tools` para verificar a documentação [clique aqui](https://firebase.google.com/docs/cli?hl=en&authuser=0#mac-linux-npm)
Após a instalação realize o login através do comando `firebase login` no prompt de comando. Vai permitir acesso através de uma conta da google e dar as permissões, ao final será apresentado uma mensagem Firebase CLI Login Successful.

Ao concluir com sucesso, volta na tela do firebase e Criar um novo projeto. Nesse caso coloquei o nome do projeto curso-angular-gabriel, lembrando que tem que ser único.

Verifique as condições gratuitas para o plano do firebase [clique aqui](https://firebase.google.com/pricing?authuser=0) para saber mais do plano free.

Para iniciar as configurações do projeto `firebase init`

Realizar as configurações do Firebase Hosting

Implantar no Firebase Hosting `firebase deploy`

Link do site em produção [acesse aqui](https://curso-angular-gabriel-31958.web.app)


### Deploy em Produção com ng deploy (Firebase)

Link da documentação [clique aqui](https://angular.io/guide/deployment)

Instale a dependencia abaixo:
`ng add @angular/fire`

Depois faz o `ng deploy` que vai gerar o build novo das alterações e o deploy em produção.
`ng deploy`




## Rotas
### Performance: Carregamento sob demanda (lazy loading)

main.js ou main.bundle.js é o arquivo que contem todo código da nossa aplicação que desenvolveu
nesse arquivo quando fazemos o build de produção esse arquivo main é minificado e ofuscado e diminui bastante.
Sendo que isso tudo está sendo carregado ao mesmo tempo.
A primeira coisa quando chamamos a rota da nossa aplicação pelo browser é que ele vai buscar o codigo no servidor para fazer o download.
Logico que quanto maior, mais tempo demorado de carregar e fazer a renderização da aplicação.
A ideia é ter um ganho de performace enquanto a isso. Pois o carregamento sobre demanda do que eu quero.
Segurança = quando estou em uma tela de login não preciso saber o que tem nas outras telas.
Passos para configuração do lazy loading:
1. Separar em Modulos a aplicação, em modulos de funcionalidades.
2. Declarar o Modulo apenas na chamada da rota com o caminho(path) da rota e a informação do arquivo do modulo loadChildren:
3. Deleta qualquer outra informação onde esteja declarado o Modulo ele só pode está importado na sua classe de roteamento routing.
{ path: 'cursos', loadChildren: () => import('./pages/cursos/cursos.module').then(m => m.CursosModule)},
4. O caminho principal que é declarado o caminho da rota do modulo e que chama o component pricipal é declarado vazio
{ path: '', component: CursosListaComponent },

### Estilo de url: HTML5 ou usando #(hash)
Não utilizar o hash é o padrão de roteamento do html5.
Quando trabalhamos com a conexão com o servidor backend, pode ser que a linguagem que for trabalhar no backend, não aceite esse padrão que é sugerido pelo HTML5 e o container não vai reconhecer o link e também não vai saber quando vc está tentando acessar um roteamento ou quando vc está tentando acessar uma url pra poder fazer uma chamada ajax, por esse motivo, o Angular tambem oferece a opção de utilizar a hash # no projeto, é incluir useHash: true. Para configurar:
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      useHash: true,
      ...
