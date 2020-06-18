import { Component, OnInit, Input } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoServio } from './egreso.servicio';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {
  egresos: Egreso[] = [];
  @Input() ingresoTotal: number;
  constructor(private _egresoServicio: EgresoServio) { }

  ngOnInit() {
    this.egresos = this._egresoServicio.egresos;
  }
  eliminarEgreso(egreso: Egreso) {
    this._egresoServicio.eliminar(egreso);
  }

  calcularPorcentaje(egreso: Egreso) {
    return egreso.valor / this.ingresoTotal;
  }

}
