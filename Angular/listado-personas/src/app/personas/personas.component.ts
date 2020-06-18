import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';
import { logginServie } from '../logginServie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  personas: Persona[] = [];

  ngOnInit(): void {
    // this.personas = this.personasService.personas;
    this.personasService.obtenerPersonas()
      .subscribe(
        (personas: Persona[]) => {
          this.personas = personas;
          this.personasService.setPersonas(personas);
        }
      );

  }

  constructor(private logginServie: logginServie,
    private personasService: PersonasService,
    private router: Router) {

  }
  agregar() {
    this.router.navigate(['personas/agregar']);
  }

}
