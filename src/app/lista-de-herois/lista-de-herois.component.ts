import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Vingador } from '../vingador';

@Component({
  selector: 'app-lista-de-herois',
  templateUrl: './lista-de-herois.component.html',
  styleUrls: ['./lista-de-herois.component.css']
})
export class ListaDeHeroisComponent implements OnInit {
  @Input()
  listaVingadores: Array<Vingador>;

  @Output()
  onEditar = new EventEmitter<Vingador>();

  @Output()
  onExcluir = new EventEmitter<Vingador>();

  constructor() { }

  ngOnInit() {
  }

  editHeroi(vingador: Vingador): void{
    this.onEditar.emit(vingador);
  }

  deleteHeroi(vingador: Vingador): void{
    this.onExcluir.emit(vingador);
  }
}
