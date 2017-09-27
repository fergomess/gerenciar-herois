import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Vingador } from '../vingador';

@Component({
  selector: 'app-formulario-de-herois',
  templateUrl: './formulario-de-herois.component.html',
  styleUrls: ['./formulario-de-herois.component.css']
})
export class FormularioDeHeroisComponent implements OnInit {
  @Input()
  novoVingador: Vingador;

  @Output()
  onCadastrar = new EventEmitter<Vingador>();

  constructor() { }

  ngOnInit() {
  }

  cadastrar(){
     this.onCadastrar.emit(this.novoVingador);
  }

  limpar(){
    this.novoVingador = new Vingador(0, '', '', '');
}

}
