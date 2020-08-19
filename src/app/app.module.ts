import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { JiuyepeixunComponent } from './jiuyepeixun/jiuyepeixun.component';
import { JinqihuodongAdvertisementComponent } from './jinqihuodong-advertisement/jinqihuodong-advertisement.component';
import { JiuyepeixunTopPartComponent } from './jiuyepeixun-top-part/jiuyepeixun-top-part.component';
import { WebQianDuanKeChengComponent } from './web-qian-duan-ke-cheng/web-qian-duan-ke-cheng.component';
import { JiuyepeixunAccountantComponent } from './jiuyepeixun-accountant/jiuyepeixun-accountant.component';
import { JiuyepeixunITComponent } from './jiuyepeixun-it/jiuyepeixun-it.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ContactComponent,
    FooterComponent,
    CarouselComponent,
    JiuyepeixunComponent,
    JinqihuodongAdvertisementComponent,
    JiuyepeixunTopPartComponent,
    WebQianDuanKeChengComponent,
    JiuyepeixunAccountantComponent,
    JiuyepeixunITComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
