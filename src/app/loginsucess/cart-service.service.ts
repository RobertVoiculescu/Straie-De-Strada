import { Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService{

  constructor() { }
 
  cartSubject = new Subject<any>();

}
