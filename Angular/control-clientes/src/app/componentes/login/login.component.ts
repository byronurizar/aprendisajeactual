import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { LoginService } from 'src/app/servicios/login.service';
import { auth } from 'firebase';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;


  constructor(private route: Router,
    private flassMessas: FlashMessagesService,
    private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.getAuth().subscribe(auth=>{
      if(auth){
        this.route.navigate(['/']);
      }
    })
  }

  login() {
    this.loginService.login(this.email, this.password)
      .then(res => {
        this.route.navigate(['/']);
      })
      .catch(error => {
        this.flassMessas.show(error.messages, {
          cssClass: 'alert-danger', timeout: 4000
        })
      });
  }
}
