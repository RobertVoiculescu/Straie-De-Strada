import { Component, OnInit } from '@angular/core';
import { User } from '../contactform/User';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-adminviewregmesg',
  templateUrl: './adminviewregmesg.component.html',
  styleUrls: ['./adminviewregmesg.component.css']
})
export class AdminviewregmesgComponent implements OnInit {
   
  usersmesg!: User[];

  constructor(private adminser:AdminService){

  }
  
  ngOnInit(): void {
    this.getUserMesg();
  }

  private getUserMesg(){
    this.adminser.getMesgQuery().subscribe(data=>{
      this.usersmesg=data;
    })
  }
}
