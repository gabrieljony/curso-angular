import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manipulating-arrays',
  templateUrl: './manipulating-arrays.component.html',
  styleUrls: ['./manipulating-arrays.component.scss']
})
export class ManipulatingArraysComponent implements OnInit {

  arrayExample: number[] = [1, 2, 3, 4, 5, 6, 7];
  arrayExampleNew: number[] = [];
  arrayExampleFind;

  constructor() { }

  ngOnInit() {
  }

  onMap() {
    console.log('onMap')
    this.arrayExampleNew = this.arrayExample.map((element) => { return element * 2 });
  }

  onFilter() {
    console.log('onFilter')
    let example = [1, 1, 1, 3, 4, 1];
    this.arrayExampleNew = example.filter((element) => { return element === 1 });
  }

  onFind() {
    console.log('onFind')
    let example = [1, 1, 1, 3, 4, 1];
    this.arrayExampleFind = example.find((element) => { return element == 1 });
    console.log('this.arrayExampleFind', this.arrayExampleFind)
  }

  onFindIndex() {
    console.log('onFindIndex')
    let example = [1, 4, 1, 3, 4, 1];
    this.arrayExampleFind = example.findIndex((element) => { return element === 5 });
    console.log('this.arrayExampleFind', this.arrayExampleFind)
  }

  onFill() {
    console.log('onFill')
    let example = [1, 4, 1, 3, 4, 1];
    this.arrayExampleFind = example.fill(1, 3);
    console.log('this.arrayExampleFind', this.arrayExampleFind)

    let array1 = [1, 2, 3, 4, 5, 6, 7];
    // preencher com 0 da posição 2 até a posição ultima posição
    console.log(array1.fill(0, 2, array1.length));
    // output: [1, 2, 0, 0]

    // preencher com 5 da posição 1 do array
    console.log(array1.fill(5, 1));
    // output: [1, 5, 5, 5]

    // preencher com 6
    console.log(array1.fill(6));
    // output: [6, 6, 6, 6]
  }

  onSome() {
    console.log('onSome')
    const array = [1, 2, 3, 4, 5];

    // verifica se um elemento do array é par
    const even = array.some((element) => element % 2 === 0);

    console.log(even);
    // output: true

    this.arrayExampleFind = even;
  }

  onEvery() {
    console.log('onEvery')
    const array1 = [1, 30, 39, 29, 10, 13];


    const isBelowThreshold = (currentValue) => currentValue < 40;
    console.log(array1.every(isBelowThreshold));
    // output: true


    const isBelowThresholdThirty = (currentValue) => currentValue < 30;
    console.log(array1.every(isBelowThresholdThirty));
    // output: false - nesse caso não passou no teste pois tem pelo menos um elemento que não é menor que 30

  }

  onPush() {
    console.log('onPush')

    let latas = ['Coca-cola', 'Fanta', 'Guarana']
    console.log('latas: ', latas)
    latas.push('Pepsi')
    console.log('latas depois do push(): ', latas)

  }

  onIncludes() {
    console.log('onIncludes')
    let latas = ['Coca-cola', 'Fanta', 'Guarana']
    console.log('retorno true: ', latas.includes('Fanta'))

    console.log('retorno false: ', latas.includes('Pepsi'))
  }

  onSlice() {
    console.log('onSlice')
    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

    console.log(animals.slice(2));
    // output: Array ["camel", "duck", "elephant"]

    console.log(animals.slice(2, 4));
    // output: Array ["camel", "duck"]

    console.log(animals.slice(1, 5));
    // output: Array ["bison", "camel", "duck", "elephant"]

    console.log(animals.slice(-2));
    // output: Array ["duck", "elephant"]

    console.log(animals.slice(2, -1));
    // output: Array ["camel", "duck"]
  }

}
