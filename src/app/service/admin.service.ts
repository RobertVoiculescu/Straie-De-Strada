import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Adminuser } from './adminuser';
import { Observable } from 'rxjs';
import { RegistrationUser } from './registration-user';
import { User } from '../contactform/User';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  private getregurl="http://localhost:8090/pradeep/admin/regusers";

  private getmesgQuery="http://localhost:8090/pradeep/admin/regusermessage";

  adminlogin(adminreg:Adminuser):Observable<any>{
     return this.http.post<any>("http://localhost:8090/pradeep/admin/loginadmin",adminreg);
  }

    //reg users to adminview
    getRegUserList():Observable<RegistrationUser[]>{
    return this.http.get<RegistrationUser[]>(`${this.getregurl}`);
    }

    getMesgQuery():Observable<User[]>{
      return  this.http.get<User[]>(`${this.getmesgQuery}`);
    }

}
