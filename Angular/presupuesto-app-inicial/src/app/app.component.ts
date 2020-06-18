import { Component } from '@angular/core';
import { Ingreso } from './ingreso/ingreso.model';
import { Egreso } from './egreso/egreso.model';
import { IngresoServico } from './ingreso/ingreso.servicio';
import { EgresoServio } from './egreso/egreso.servicio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ingreso:Ingreso[]=[];
  egreso:Egreso[]=[];

  constructor(private _ingresoServicio:IngresoServico,
              private _egresoServicio:EgresoServio){
                this.ingreso=_ingresoServicio.ingresos;
                this.egreso=_egresoServicio.egresos;
              }

  getIngresoTotal(){
    let ingresoTotal:number=0;
    this.ingreso.forEach(ingreso =>{
      ingresoTotal+=ingreso.valor;
    })
    return ingresoTotal;
  }

  getEgresoTotal(){
    let egresoTotal:number=0;
    this.egreso.forEach(egreso=>{
      egresoTotal+=egreso.valor;
    })
    return egresoTotal;
  }
  
  getPorcentajeTotal(){
    return this.getEgresoTotal()/this.getIngresoTotal();
  }

  getPresupuestoTotal(){
    return this.getIngresoTotal()-this.getEgresoTotal();
  }
}
