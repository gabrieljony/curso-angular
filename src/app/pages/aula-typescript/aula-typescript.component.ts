import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aula-typescript',
  templateUrl: './aula-typescript.component.html',
  styleUrls: ['./aula-typescript.component.less'],
})
export class AulaTypescriptComponent implements OnInit {
  // Babel é um transpiler porque traduz JavaScript ES6 para JavaScript ES5.
  // https://babeljs.io/
  // https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2%2Cenv&prettier=false&targets=&version=7.12.0&externalPlugins=
  constructor() {}

  ngOnInit(): void {
    // Recomendo esse site:
    // http://es6-features.org/#Constants
    // ES 6 ou ES 2015
    let num = 2;
    const PI = 3.14;
  }

  arrowFunctions() {
    let numeros = [1, 2, 3, 4, 5];
    // A forma antiga de fazer
    // numeros.map(function(valor) {
    //   return valor * 2;
    // });
    numeros.map((valor) => valor * 2); // ES 2015
  }
}
