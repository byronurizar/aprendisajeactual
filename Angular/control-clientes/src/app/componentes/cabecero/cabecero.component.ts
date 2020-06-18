import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';
import { Router } from '@angular/router';
import { configuracionServicio } from 'src/app/servicios/configuracion.service';


@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {

  logeado: boolean;
  usuarioLogeado: string;
  permitirRegistro: boolean;
  constructor(private loginService: LoginService,
    private router: Router,
    private configuracionServicio: configuracionServicio) { }

  ngOnInit() {
    this.loginService.getAuth().subscribe(auth => {
      if (auth) {
        this.logeado = true;
        this.usuarioLogeado = auth.email;
      }
      else {
        this.logeado = false;
      }
    });

    this.configuracionServicio.getConfiguracion().subscribe(configuracion => {
      this.permitirRegistro = configuracion.permitirRegistro;
    })

  }

  logout() {
    this.loginService.logout();
    this.logeado = false;
    this.router.navigate(['/login']);
  }

}
