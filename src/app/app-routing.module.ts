import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { LoginsuccessfulComponent } from './components/loginsuccessful/loginsuccessful.component';
import { RegistrationpageComponent } from './components/registrationpage/registrationpage.component';
import { ImagesliderComponent } from './components/imageslider/imageslider.component';
import { HomelogComponent } from './components/homelog/homelog.component';
import { HomeComponent } from './components/home/home.component';
import { ShoesComponent } from './loginsucess/shoesMatol/shoes.component';
import { ShirtsComponent } from './loginsucess/shirts/shirts.component';
import { PantsComponent } from './loginsucess/pantsMatol/pants.component';
import { WatchesComponent } from './loginsucess/watchesStraie/watches.component';
import { SendmessageComponent } from './contactform/sendmessage/sendmessage.component';
import { CartComponent } from './loginsucess/cart/cart.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminviewregComponent } from './adminviewreg/adminviewreg.component';
import { AdminviewregmesgComponent } from './adminviewregmesg/adminviewregmesg.component';
import { AdminComponent } from './admin/admin.component';
import { AdminaddproductsComponent } from './adminaddproducts/adminaddproducts.component';

const routes: Routes = [
  {path:'',component:ImagesliderComponent},
  {path:'loginpage',component:LoginpageComponent},
  {path:'loginsuccess',component:LoginsuccessfulComponent,
  children:[
    {path:'',component:HomelogComponent},
    {path:'home',component:HomeComponent},
    {path:'shoes',component:ShoesComponent},
    {path:'shirts',component:ShirtsComponent},
    {path:'pants',component:PantsComponent},
    {path:'watches',component:WatchesComponent},
    {path:'contactinfo',component:SendmessageComponent},
    {path:'cart',component:CartComponent},
  ]
  },
  {path:'registerform',component:RegistrationpageComponent},
  {path:'imageslider',component:ImagesliderComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'admindashboard',component:AdmindashboardComponent},
  {path:'adminregview',component:AdminviewregComponent},
  {path:'customerMesgView',component:AdminviewregmesgComponent},
  {path:'adminhomepage',component:AdminComponent},
  {path:'adminaddproduct',component:AdminaddproductsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
