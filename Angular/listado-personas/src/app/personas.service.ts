import { Persona } from './persona.model';
import { Injectable, EventEmitter } from '@angular/core';
import { logginServie } from './logginServie.service';
import { DataServices } from './data.services';

@Injectable()//decorador
export class PersonasService {
    personas: Persona[] = [];

    // personas: Persona[] = [
    //     // new Persona("Juan", "Perez"),
    //     // new Persona("Laura", "Juarez")
    // ];

    saludar = new EventEmitter<number>();
    constructor(private _logginServie: logginServie,
        private dataservie: DataServices) {

    }

    setPersonas(personas:Persona[]){
        this.personas=personas;
    }
    obtenerPersonas(){
        return this.dataservie.cargarPersonas();
    }
    agregarPersona(persona: Persona) {
        this._logginServie.enviarMensajeConsola("Agregar persona" + persona.nombre);
        this.personas.push(persona);
        this.dataservie.guardarPersonas(this.personas);

    }
    encontrarPersona(index: number) {
        let persona: Persona = this.personas[index];
        return persona;
    }

    modificarPersona(index: number, persona: Persona) {
        let persona1 = this.personas[index];
        persona1.nombre = persona.nombre;
        persona1.apellido = persona.apellido;

        this.dataservie.modificarPersona(index,persona);
    }

    eliminarPersona(index: number) {
        this.personas.splice(index, 1);
        this.dataservie.eliminarPersona(index);
        //Cargar nuevamente el arreglo para que se regeneren todos los indieces

        this.modifcarPersonas();
    }

    modifcarPersonas(){
        if(this.personas!=null){
            this.dataservie.guardarPersonas(this.personas);
        }
    }
}