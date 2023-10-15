import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  constructor(private auth:CartServiceService,private router:Router){

  }

  ngOnInit(): void {
    this.CartDetails();
    this.totalamt();
  }


  getCartDetails:any=[];
  CartDetails(){
    if(localStorage.getItem('localCart')){
       this.getCartDetails = JSON.parse(localStorage.getItem('localCart')!);
       console.log(this.getCartDetails);
    }
  }

  increaseQuantity(productId:any,Quantity:any){
    for(let i=0;i<this.getCartDetails.length;i++){
       if(this.getCartDetails[i].productId===productId){
         if(Quantity!=5){
          this.getCartDetails[i].qnt=parseInt(Quantity)+1;
         }
       }
    }
    localStorage.setItem('localCart',JSON.stringify(this.getCartDetails));
    this.totalamt();
  }

  decreaseQuantity(productId:any,Quantity:any){
    for(let i=0;i<this.getCartDetails.length;i++){
       if(this.getCartDetails[i].productId===productId){
         if(Quantity!=1){
          this.getCartDetails[i].qnt=parseInt(Quantity)-1;
         }
       }
    }
    localStorage.setItem('localCart',JSON.stringify(this.getCartDetails));
    this.totalamt();
  }

  Total:number=0;
  totalamt(){
      this.getCartDetails=JSON.parse(localStorage.getItem('localCart')!);
     this.Total=this.getCartDetails.reduce(function(acc:any,val:any){
          return acc+(val.amt  * val.qnt)
      },0);
     }

     RemoveAll(){
      localStorage.removeItem('localCart');
      this.getCartDetails=[];
      this.Total=0;

     }

     rowdelete(rowdeleting:any){
        if(localStorage.getItem('localCart')){
          this.getCartDetails=JSON.parse(localStorage.getItem('localCart')!);
        for(let i=0;i<this.getCartDetails.length;i++){
          if(this.getCartDetails[i].productId === rowdeleting){
            this.getCartDetails.splice(i,1);
            localStorage.setItem('localCart',JSON.stringify(this.getCartDetails));
            this.CartDetails();
            this.totalamt();
            this.cartnumberFunc();
          }
        }
        }
     }

     cartnumber:number=0;
  cartnumberFunc(){
    var cartValue=JSON.parse(localStorage.getItem('localCart')!);
    this.cartnumber=cartValue.length;
    this.auth.cartSubject.next(this.cartnumber);
  }

  finalbooking(){
    alert("Comanda a fost înregistrată cu succes.");
    this.RemoveAll();
    this.router.navigate(['/loginsuccess']);
  }

}
