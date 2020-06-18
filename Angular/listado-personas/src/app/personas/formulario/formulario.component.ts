import { Component, OnInit } from '@angular/core';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../personas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  nombreInput: string;
  apellidoInput: string;
  index: number;
  modoEdicion: number;
  constructor(
    private _personaService: PersonasService,
    private router: Router, //para el enrutamiento
    private route: ActivatedRoute) { //para poder obtener el parametro
    this._personaService.saludar.subscribe(
      (indice: number) => alert("El indice es:" + indice)
    );
  } //Dependenci inyection

  ngOnInit() {
    this.index = this.route.snapshot.params['id'];
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion']; //el + lo convirte a tipo entero
    if (this.modoEdicion != null && this.modoEdicion == 1) {
      let persona = this._personaService.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }

  onGuardarPersonas() {
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    if (this.modoEdicion != null && this.modoEdicion == 1) {
      this._personaService.modificarPersona(this.index, persona1);
    } else {
      this._personaService.agregarPersona(persona1);
    }
    this.router.navigate(['personas']);

  }

  eliminarPersonas() {
    if (this.index != null) {
      this._personaService.eliminarPersona(this.index);
    }
    this.router.navigate(['personas']);
  }

}
