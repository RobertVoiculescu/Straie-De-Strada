import { Component, OnInit } from '@angular/core';
import { ContactserviceService } from '../contactservice.service';
import { Router } from '@angular/router';
import { User } from '../User';

@Component({
  selector: 'app-sendmessage',
  templateUrl: './sendmessage.component.html',
  styleUrls: ['./sendmessage.component.css']
})
export class SendmessageComponent implements OnInit {

  user:User=new User();

  constructor(private contactservice:ContactserviceService,private router:Router){}

  ngOnInit(): void {

  }

  saveuser(){
    this.contactservice.addUsers(this.user).subscribe(data=>{
     console.log(data);
     alert("Mesaj înregistrat cu succes. Vă vom contacta curând.")
     this.gotoUserList();
    })
}
//
gotoUserList(){
  this.router.navigate(['/loginsuccess']);
}
//
onSubmit(){
 console.log(this.user);
 this.saveuser();
}
}
