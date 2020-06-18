import { Component, OnInit } from '@angular/core';
import { IngresoServico } from '../ingreso/ingreso.servicio';
import { EgresoServio } from '../egreso/egreso.servicio';
import { Ingreso } from '../ingreso/ingreso.model';
import { Egreso } from '../egreso/egreso.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  tipo: String = "ingresoOperacion";
  descripcionInput: String;
  valorInput: number;
  constructor(private _ingresoServicio: IngresoServico,
    private _egresoServicio: EgresoServio) { }

  ngOnInit() {
  }

  tipoOperacion(evento) {
    this.tipo = evento.target.value;
  }
  agregarValor() {
    if (this.tipo === "ingresoOperacion") {
      this._ingresoServicio.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput));
    }
    else {
      this._egresoServicio.egresos.push(new Egreso(this.descripcionInput, this.valorInput))
    }
  }
}
