import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-pants',
  templateUrl: './pants.component.html',
  styleUrls: ['./pants.component.css']
})
export class PantsComponent implements OnInit {

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
      productId:"PANTS1",
      productname:"Blugi Blue (XXL)",
      img:"assets/Pants6.jpg",
      amt:400,
      qnt:1,
      rating:"3/5",
    },
    {
      productId:"PANTS2",
      productname:"Cargo Straie Red (XXXL)",
      img:"assets/Pants4.jpg",
      amt: 520,
      qnt:1,
      rating:"4/5",
    },{
      productId:"PANTS3",
      productname:"Cargo Straie Black (L)",
      img:"assets/Pants2.jpg",
      amt: 350,
      qnt:1,
      rating:"4.5/5",
    },
    {
      productId:"PANTS4",
      productname:"Blugi Black (XL)",
      img:"assets/Pants5.jpg",
      amt: 420,
      qnt:1,
      rating:"4/5",
    },
    {
      productId:"PANTS5",
      productname:"Cargo Matol Red (L)",
      img:"assets/Pants3.jpg",
      amt: 520,
      qnt:1,
      rating:"3.5/5",
    },
    {
      productId:"PANTS6",
      productname:"Cargo Matol Black (L)",
      img:"assets/Pants1.jpg",
      amt: 350,
      qnt:1,
      rating:"3.5/5",
    },

  ];
}
