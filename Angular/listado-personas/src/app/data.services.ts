import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
import { LoginService } from './login/login.service';

// url bd https://small-talk-fc6a6.firebaseio.com/

@Injectable()
export class DataServices {
    constructor(private httCliente: HttpClient,
        private loginService:LoginService) {
    }

    cargarPersonas(){
        const token=this.loginService.getIdToken();
        return this.httCliente.get("https://small-talk-fc6a6.firebaseio.com/datos.json?auth="+token);
    }
    //Guardar personas
    guardarPersonas(personas: Persona[]) {
        const token=this.loginService.getIdToken();
        this.httCliente.put("https://small-talk-fc6a6.firebaseio.com/datos.json?auth="+token, personas)
            .subscribe(
                response => {
                    console.log("Resultado de guardar las personas " + response);
                },
                error => console.log("Error al guardar personas:" + error)
            );
    }
    modificarPersona(index:number,persona:Persona){
        const token=this.loginService.getIdToken();
        let url:string;
        url="https://small-talk-fc6a6.firebaseio.com/datos/"+index+'.json?auth='+token;
        this.httCliente.put(url,persona)
        .subscribe(
         response=> console.log("Resultado de modificar persona "+ response)
        ,error=> console.log("Error al modificar la personas "+error)
        )
    }

    eliminarPersona(index:number){
        const token=this.loginService.getIdToken();
        let url:string;
        url="https://small-talk-fc6a6.firebaseio.com/datos/"+index+'.json?auth='+token;
        this.httCliente.delete(url)
        .subscribe(
         response=> console.log("Resultado de eliminar persona "+ response)
        ,error=> console.log("Error al eliminar la personas "+error)
        )
    }
}