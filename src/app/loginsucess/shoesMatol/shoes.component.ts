import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit {

  constructor(private auth:CartServiceService){

  }
  ngOnInit(): void {

  }

  plus(prod: any){
    //console.log(prod.qnt);
    if(prod.qnt!=5){
     prod.qnt=prod.qnt+1;
    }

 }

 minus(prod :any) {
   if(prod.qnt!=1){
     prod.qnt =prod.qnt-1;
    }
 }

  itemCart:any=[];

  addcart(category :any){
    let cartDataNull=localStorage.getItem('localCart');
    if(cartDataNull==null){
      let storeDataGet:any=[];
      storeDataGet.push(category);
      localStorage.setItem('localCart',JSON.stringify(storeDataGet));
    }
    else{
      var id=category.productId;
      let index : number= -1;
      this.itemCart=JSON.parse(localStorage.getItem('localCart')!);

      for(let i=0;i<this.itemCart.length;i++){
         if(parseInt(id) === parseInt(this.itemCart[i].productId)){
           this.itemCart[i].qnt=category.qnt;
           index=i;
           break;
         }
      }
      if(index==-1){
        this.itemCart.push(category);
        localStorage.setItem('localCart',JSON.stringify(this.itemCart));
      }
      else{
        localStorage.setItem('localCart',JSON.stringify(this.itemCart))
      }
    }
    this.cartnumberFunc();
  }

  cartnumber:number=0;
  cartnumberFunc(){
    var cartValue=JSON.parse(localStorage.getItem('localCart')!);
    this.cartnumber=cartValue.length;
    this.auth.cartSubject.next(this.cartnumber);
  }

  productArray = [
    {
      productId:"PANTOF1",
      productname:"Pantofi Sport Straie Negru (45)",
      img:"assets/Shoe1.jpg",
      amt: 320,
      qnt:1,
      rating:"5/5",
    },
    {
      productId:"PANTOF2",
      productname:"Pantofi Sport Matol Negru (40)",
      img:"assets/Shoe4.jpg",
      amt: 425,
      qnt:1,
      rating:"4/5",
    },{
      productId:"PANTOF3",
      productname:"Pantofi Sport Straie Roșu (38)",
      img:"assets/Shoe2.jpg",
      amt: 250,
      qnt:1,
      rating:"4.5/5",
    },
    {
      productId:"PANTOF4",
      productname:"Pantofi Sport Matol Alb (45)",
      img:"assets/Shoe6.jpg",
      amt: 329,
      qnt:1,
      rating:"3.5/5",
    },
    {
      productId:"PANTOF5",
      productname:"Pantofi Sport Straie Alb (45)",
      img:"assets/Shoe3.jpg",
      amt: 530,
      qnt:1,
      rating:"3.5/5",
    },
    {
      productId:"PANTOF6",
      productname:"Pantofi Sport Matol Rosu (39)",
      img:"assets/Shoe5.jpg",
      amt: 340,
      qnt:1,
      rating:"3.5/5",
    },
  ];
}
