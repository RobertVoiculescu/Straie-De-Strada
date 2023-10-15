import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationpageComponent } from './components/registrationpage/registrationpage.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomelogComponent } from './components/homelog/homelog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { ImagesliderComponent } from './components/imageslider/imageslider.component';
import {LoginsuccessfulComponent} from './components/loginsuccessful/loginsuccessful.component';
import { ShoesComponent } from './loginsucess/shoesMatol/shoes.component';
import { HeaderafterloginComponent } from './loginsucess/headerafterlogin/headerafterlogin.component';
import { ShirtsComponent } from './loginsucess/shirts/shirts.component';
import { PantsComponent } from './loginsucess/pantsMatol/pants.component';
import { WatchesComponent } from './loginsucess/watchesStraie/watches.component';
import { SendmessageComponent } from './contactform/sendmessage/sendmessage.component';
import { CartComponent } from './loginsucess/cart/cart.component';
import { HeaderbeforelogComponent } from './components/headerbeforelog/headerbeforelog.component';
import { AdminComponent } from './admin/admin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashboardheaderComponent } from './admindashboardheader/admindashboardheader.component';
import { AdminviewregComponent } from './adminviewreg/adminviewreg.component';
import { AdminviewregmesgComponent } from './adminviewregmesg/adminviewregmesg.component';
import { AdminaddproductsComponent } from './adminaddproducts/adminaddproducts.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationpageComponent,
    LoginpageComponent,
    HomelogComponent,
    HomeComponent,
    ImagesliderComponent,
    LoginsuccessfulComponent,
    ShoesComponent,
    HeaderafterloginComponent,
    ShirtsComponent,
    PantsComponent,
    WatchesComponent,
    SendmessageComponent,
    CartComponent,
    HeaderbeforelogComponent,
    AdminComponent,
    AdmindashboardComponent,
    AdminloginComponent,
    AdmindashboardheaderComponent,
    AdminviewregComponent,
    AdminviewregmesgComponent,
    AdminaddproductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
