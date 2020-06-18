import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { configuracionServicio } from 'src/app/servicios/configuracion.service';
import { Configuracion } from 'src/app/modelo/configuracion.model';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {
  permitirRegistro: boolean = false;
  constructor(
    private router: Router,
    private configuracionServicio: configuracionServicio
  ) { }

  ngOnInit() {
    this.configuracionServicio.getConfiguracion().subscribe(
      (configuracion: Configuracion) => {
        this.permitirRegistro = configuracion.permitirRegistro;
      }
    )
  }
  guardar() {
    let configuracion = { permitirRegistro: this.permitirRegistro };
    this.configuracionServicio.modificarConfiguracion(configuracion);
    this.router.navigate(['/']);
  }
}
