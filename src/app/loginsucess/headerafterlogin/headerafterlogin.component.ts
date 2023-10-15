import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-headerafterlogin',
  templateUrl: './headerafterlogin.component.html',
  styleUrls: ['./headerafterlogin.component.css']
})
export class HeaderafterloginComponent  implements OnInit {
   
  constructor(private auth:CartServiceService){
    this.auth.cartSubject.subscribe((data)=>{
      this.cartItem =data;
     });
  }
  ngOnInit(): void {
    this.cartItemFun();
  }
  cartItem:number=0;

    cartItemFun(){
       if(localStorage.getItem('localCart')!=null){
        var cartCount=JSON.parse(localStorage.getItem('localCart')!)
        this.cartItem=cartCount.length;
       }
    }
}
