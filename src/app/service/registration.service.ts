import { Injectable } from '@angular/core';
import { RegistrationUser } from './registration-user';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  
  

  constructor(private http:HttpClient) { }
  

  //http from server side to logindetail in spring boot using post path
    loginUserApi(reguser:RegistrationUser):Observable<any>{
    return this.http.post<any>("http://localhost:8090/pradeep/anudip/deeptech/final/project/loginuser",reguser)
  }

  //adding user through registerform into database
    
    registeruser(reguser:RegistrationUser):Observable<any>{
      return this.http.post<any>("http://localhost:8090/pradeep/anudip/deeptech/final/project/registeruser",reguser)
    }

 


}
