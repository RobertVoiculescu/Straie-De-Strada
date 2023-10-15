import { Component,OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationUser } from 'src/app/service/registration-user';
import { RegistrationService } from 'src/app/service/registration.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  reguservalues = new RegistrationUser();
  message='';

  constructor(private service:RegistrationService,
               private router:Router){}

  ngOnInit(): void {

  }

  loginUser(){
     this.service.loginUserApi(this.reguservalues).subscribe(
        data=>{
          console.log("response received"),
          confirm("Logare reușită");
          this.router.navigate(['/loginsuccess'])
        },
      error=>{
        console.log("exception occured"),
        this.message="Credențiale incorecte. Introduceți datele de cont valide"

        confirm("Logare nepermisă. Verificați emailul și parola")
      }
     )
  }
}
