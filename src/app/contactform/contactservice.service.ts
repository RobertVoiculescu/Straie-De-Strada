import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactserviceService {



  constructor(private httpclient:HttpClient) { }

  addUsers(user:User):Observable<any>{
    return this.httpclient.post("http://localhost:8090/pradeep/usercontact/users",user);
  }
}
