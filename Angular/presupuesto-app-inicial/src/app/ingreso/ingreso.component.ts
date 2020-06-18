import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoServico } from './ingreso.servicio';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  ingresos:Ingreso[]=[];
  constructor(private _ingresoServicio:IngresoServico) { }

  ngOnInit() {
    this.ingresos=this._ingresoServicio.ingresos;
  }
  eliminarRegistro(ingreso:Ingreso){
      this._ingresoServicio.eliminar(ingreso);
  }

}
