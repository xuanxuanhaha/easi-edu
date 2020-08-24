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
import { JinqihuodongAdvertisementComponent } from './jinqihuodong-advertisement/jinqihuodong-advertisement.component';
import { JiuyepeixunTopPartComponent } from './jiuyepeixun-top-part/jiuyepeixun-top-part.component';
import { WebQianDuanKeChengComponent } from './web-qian-duan-ke-cheng/web-qian-duan-ke-cheng.component';
import { JiuyepeixunAccountantComponent } from './jiuyepeixun-accountant/jiuyepeixun-accountant.component';
import { JiuyepeixunITComponent } from './jiuyepeixun-it/jiuyepeixun-it.component';
import { PteEduComponent } from './pte-edu/pte-edu.component';
import { PteTopPartComponent } from './pte-top-part/pte-top-part.component';
import { WebQuanZhanJinJieKeChengComponent } from './web-quan-zhan-jin-jie-ke-cheng/web-quan-zhan-jin-jie-ke-cheng.component';
import { PythonKaiFaRuMenKeChengComponent } from './python-kai-fa-ru-men-ke-cheng/python-kai-fa-ru-men-ke-cheng.component';
import { DjangoJinJieKeChengComponent } from './django-jin-jie-ke-cheng/django-jin-jie-ke-cheng.component';
import { PythonShuJuFenXiKeChengComponent } from './python-shu-ju-fen-xi-ke-cheng/python-shu-ju-fen-xi-ke-cheng.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ContactComponent,
    FooterComponent,
    CarouselComponent,
    JinqihuodongAdvertisementComponent,
    JiuyepeixunTopPartComponent,
    WebQianDuanKeChengComponent,
    JiuyepeixunAccountantComponent,
    JiuyepeixunITComponent,
    PteEduComponent,
    PteTopPartComponent,
    WebQuanZhanJinJieKeChengComponent,
    PythonKaiFaRuMenKeChengComponent,
    DjangoJinJieKeChengComponent,
    PythonShuJuFenXiKeChengComponent
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
