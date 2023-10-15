import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationUser } from 'src/app/service/registration-user';
import { RegistrationService } from 'src/app/service/registration.service';

@Component({
  selector: 'app-registrationpage',
  templateUrl:'./registrationpage.component.html',
  styleUrls: ['./registrationpage.component.css']
})
export class RegistrationpageComponent implements OnInit {

  reguservalues=new RegistrationUser();
  message='';

  constructor(private service:RegistrationService,private router:Router){

  }

  ngOnInit(): void {

  }

  registerbut(){
    this.service.registeruser(this.reguservalues).subscribe(
      data=>{
        console.log("response received");
        alert("Înregistrare reușită");
        this.router.navigate(['/imageslider'])
      },
      error=>{
        console.log("Exception Occurred");
        this.message=("Nume de cont deja existent");
      }

    )
  }

}
