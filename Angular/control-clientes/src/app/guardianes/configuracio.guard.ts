import { CanActivate, Router } from '@angular/router';
import { configuracionServicio } from '../servicios/configuracion.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ConfiguracionGuard implements CanActivate {
    constructor(private router: Router,
        private configuracionSer: configuracionServicio) { }

    canActivate(): Observable<boolean> {
        return this.configuracionSer.getConfiguracion().pipe(
            map(configuracion => {
                if (configuracion.permitirRegistro) {
                    return true;
                }
                else {
                    this.router.navigate(['/login']);
                    return false;
                }
            })
        )
    }
}