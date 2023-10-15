import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboardheader',
  templateUrl: './admindashboardheader.component.html',
  styleUrls: ['./admindashboardheader.component.css']
})
export class AdmindashboardheaderComponent implements OnInit {
   
  constructor(private router:Router){

  }
  ngOnInit(): void {
    
  }

  logout(){
    sessionStorage.clear()
    this.router.navigate(['adminlogin'])
  }
}
