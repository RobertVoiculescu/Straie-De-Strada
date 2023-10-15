import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';
import { Adminuser } from '../service/adminuser';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  adminregvalues = new Adminuser();
  message='';

  constructor(private service:AdminService,
               private router:Router){}

  ngOnInit(): void {

  }

  loginUser(){
     this.service.adminlogin(this.adminregvalues).subscribe(
        data=>{
          console.log("response received"),
          confirm("Doriți să salvați parola?");
          this.router.navigate(['/admindashboard'])
        },
      error=>{
        console.log("exception occured"),
        this.message="Credențiale greșite"
        confirm("Logare eșuată")
      }
     )
  }
}
