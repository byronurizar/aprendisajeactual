import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../personas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
@Input() persona: Persona; //Input es un decorador
@Input() indice: number;
  constructor(private _personaService: PersonasService) { }

  ngOnInit() {
  }
  emitirSaludo(){
    this._personaService.saludar.emit(this.indice);
  }
}
