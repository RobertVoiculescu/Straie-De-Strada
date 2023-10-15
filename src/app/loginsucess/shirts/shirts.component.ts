import { Component,OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';


@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.css']
})
export class ShirtsComponent implements OnInit  {

  constructor(private auth:CartServiceService){}
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
      productId:"TRISTR1",
      productname:"Tricou Symbol Alb (XL)",
      img:"assets/TricouStraie1.jpg",
      amt: 50,
      qnt:1,
      rating:"5/5",
    },
    {
      productId:"TRISTR2",
      productname:"Tricou Symbol Negru (XL)",
      img:"assets/TricouStraie4.jpg",
      amt: 50,
      qnt:1,
      rating:"5/5",
    },
    {
      productId:"TRISTR3",
      productname:"Tricou Straie Alb (XXL)",
      img:"assets/TricouStraie3.jpg",
      amt: 35,
      qnt:1,
      rating:"5/5",
    },
    {
      productId:"TRISTR4",
      productname:"Tricou Straie Negru (XXL)",
      img:"assets/TricouStraie5.jpg",
      amt: 35,
      qnt:1,
      rating:"4/5",
    },
    {
      productId:"TRISTR5",
      productname:"Tricou Straie Traditional Alb (S)",
      img:"assets/TricouStraie2.jpg",
      amt: 40,
      qnt:1,
      rating:"3.5/5",
    },
    {
      productId:"TRISTR6",
      productname:"Tricou Straie Traditional Negru (S)",
      img:"assets/TricouStraie6.jpg",
      amt: 40,
      qnt:1,
      rating:"4/5",
    },

    {
      productId:"TRIMTL1",
      productname:"Tricou Multiply Matol Megru (L)",
      img:"assets/TricouMatol1.jpg",
      amt: 50,
      qnt:1,
      rating:"3.5/5",
    },
    {
      productId:"TRIMTL2",
      productname:"Tricou Multiply Matol Alb (L)",
      img:"assets/TricouMatol5.jpg",
      amt: 50,
      qnt:1,
      rating:"4/5",
    },
    {
      productId:"TRIMTL3",
      productname:"Tricou Tambalau Negru (M)",
      img:"assets/TricouMatol3.jpg",
      amt: 55,
      qnt:1,
      rating:"4.5/5",
    },
    {
      productId:"TRIMTL4",
      productname:"Tricou Tambalau Alb (M)",
      img:"assets/TricouMatol4.jpg",
      amt: 55,
      qnt:1,
      rating:"5/5",
    },
    {
      productId:"TRIMTL5",
      productname:"Tricou Matol (XXL)",
      img:"assets/TricouMatol2.jpg",
      amt: 40,
      qnt:1,
      rating:"5/5",
    },

    {
      productId:"HANSTR1",
      productname:"Hanorac Straie Alb (XXL)",
      img:"assets/HanoracStraie2.jpg",
      amt: 150,
      qnt:1,
      rating:"5/5",
    },
    {
      productId:"HANSTR2",
      productname:"Hanorac Straie Alb (L)",
      img:"assets/HanoracStraie2.jpg",
      amt: 150,
      qnt:1,
      rating:"5/5",
    },
    {
      productId:"HANSTR3",
      productname:"Hanorac Straie Negru (XXL)",
      img:"assets/HanoracStraie3.jpg",
      amt: 150,
      qnt:1,
      rating:"5/5",
    },
    {
      productId:"HANSTR4",
      productname:"Hanorac Symbol Alb (XXL)",
      img:"assets/HanoracStraie6.jpg",
      amt: 135,
      qnt:1,
      rating:"4/5",
    },
    {
      productId:"HANSTR5",
      productname:"Hanorac Symbol Negru (XL)",
      img:"assets/HanoracStraie5.jpg",
      amt: 135,
      qnt:1,
      rating:"4/5",
    },
    {
      productId:"HANSTR6",
      productname:"Hanorac Straie Traditional Alb (M)",
      img:"assets/HanoracStraie1.jpg",
      amt: 150,
      qnt:1,
      rating:"5/5",
    },
    {
      productId:"HANSTR7",
      productname:"Hanorac Straie Traditional Negru (M)",
      img:"assets/HanoracStraie4.jpg",
      amt: 150,
      qnt:1,
      rating:"5/5",
    },

    {
      productId:"HANMTL1",
      productname:"Hanorac Matol Alb (XXL)",
      img:"assets/HanoracMatol1.jpg",
      amt:120,
      qnt:1,
      rating:"5/5",
    },
    {
      productId:"HANMTL2",
      productname:"Hanorac Matol Negru (XXL)",
      img:"assets/HanoracMatol2.jpg",
      amt: 125,
      qnt:1,
      rating:"4/5",
    },{
      productId:"HANMTL3",
      productname:"Hanorac Tămbălău Alb (XXL)",
      img:"assets/HanoracMatol3.jpg",
      amt: 120,
      qnt:1,
      rating:"4.5/5",
    },
    {
      productId:"HANMTL4",
      productname:"Hanorac Tămbălău Negru (XXL)",
      img:"assets/HanoracMatol4.jpg",
      amt: 130,
      qnt:1,
      rating:"3.5/5",
    },

  ];
}
