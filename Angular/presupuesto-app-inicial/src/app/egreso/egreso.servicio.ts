import { Egreso } from './egreso.model';
import { Ingreso } from '../ingreso/ingreso.model';

export class EgresoServio {
    egresos: Egreso[] = [
        new Egreso("Renta de departamento", 900),
        new Egreso("Ropa", 200)
    ];
    eliminar(egreso: Egreso) {
        const indice: number = this.egresos.indexOf(egreso)
        this.egresos.splice(indice, 1); //(Indice, cantidad a borrar)
    }
}