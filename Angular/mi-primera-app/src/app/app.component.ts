import { Component } from '@angular/core';

//Decorador de componente
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //plantilla para este componente
  styleUrls: ['./app.component.css'] //estilo para este componente
})
export class AppComponent {
  titulo = 'hola mundo desde Angular';
}
