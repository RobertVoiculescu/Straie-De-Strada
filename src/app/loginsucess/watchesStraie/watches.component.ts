import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-watches',
  templateUrl: './watches.component.html',
  styleUrls: ['./watches.component.css']
})
export class WatchesComponent implements OnInit {

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
      productId:"WATCH1",
      productname:"Ceas de mână Matol Red",
      img:"assets/Watch.jpg",
      amt: 850,
      qnt:1,
      rating:"5/5",
    },
    {
      productId:"WATCH2",
      productname:"Ceas de mână Matol Black",
      img:"assets/Watch2.jpg",
      amt: 900,
      qnt:1,
      rating:"5/5",
    },
    {
      productId:"WATCH3",
      productname:"Ceas de mână Straie White",
      img:"assets/Watch4.jpg",
      amt: 850,
      qnt:1,
      rating:"5/5",
    },
    {
      productId:"WATCH4",
      productname:"Ceas de mână Straie Red/Grey",
      img:"assets/Watch5.jpg",
      amt: 735,
      qnt:1,
      rating:"5/5",
    },
    {
      productId:"WATCH5",
      productname:"Ceas de mână Straie Dark Red",
      img:"assets/Watch3.jpg",
      amt: 850,
      qnt:1,
      rating:"4/5",
    },

  ];

}
