import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() resultadoSuma = new EventEmitter<number>()
  opernadoA: number;
  operandoB: number;
  constructor() { }


  ngOnInit() {
  }

  onSumar(): void {
    let resultado = this.opernadoA + this.operandoB;
    this.resultadoSuma.emit(resultado);
  }

}
