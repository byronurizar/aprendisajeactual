import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  email: string;
  password: string;


  constructor(private route: Router,
    private flassMessas: FlashMessagesService,
    private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.getAuth().subscribe(auth => {
      if (auth) {
        this.route.navigate(['/']);
      }
    })
  }

  registro() {
    this.loginService.registrarse(this.email, this.password)
      .then(res => {
        this.route.navigate(['/']);
      })
      .catch(error => {
        this.flassMessas.show(error.message, {
          cssClass: 'alert-danger', timeout: 4000
        })
      })
  }
}
