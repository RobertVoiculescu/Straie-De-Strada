import { Component, OnInit } from '@angular/core';
import { RegistrationUser } from '../service/registration-user';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-adminviewreg',
  templateUrl: './adminviewreg.component.html',
  styleUrls: ['./adminviewreg.component.css']
})


export class AdminviewregComponent implements OnInit {

  regusers!: RegistrationUser[];

  constructor(private adminser:AdminService){

  }
ngOnInit(): void {
  this.getUsers();
}

private getUsers(){
  this.adminser.getRegUserList().subscribe(data=>{
    this.regusers=data;
  })
}

}
