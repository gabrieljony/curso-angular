import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  //No momento da inicialização do component chama o ngOnInit
  ngOnInit() {
  //Instanciar uma classe FormGroup e a classe recebe um objeto como parâmetro - nome e email
  // this.formulario = new FormGroup({
  //   nome: new FormControl(null),
  //   email: new FormControl(null)
  // });
  //Instanciar uma classe usando o FormBuilder e a classe recebe um objeto como parâmetro
  this.formulario = this.formBuilder.group({
    nome:[null],
    email:[null]
  });


  }

}
