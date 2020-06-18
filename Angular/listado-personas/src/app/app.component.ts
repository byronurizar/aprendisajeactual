import { Component, OnInit, Injectable } from '@angular/core';
import { Persona } from './persona.model';
import * as firebase from 'firebase'
import { LoginService } from './login/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de personas';
  personas: Persona[] = [];

  ngOnInit(): void {

  }

  constructor(private loginService: LoginService) {
    firebase.initializeApp({
      apiKey: "AIzaSyDl5gjGhbhZXyvFk0x1s_tl2RxDuCSuw3Y",
      authDomain: "small-talk-fc6a6.firebaseapp.com"
    })
  }

  isAutenticado() {
    return this.loginService.isAutenticado();
  }
  salir() {
    this.loginService.logout();
  }

}
