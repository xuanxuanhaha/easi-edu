import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {WebQianDuanKeChengComponent} from './web-qian-duan-ke-cheng/web-qian-duan-ke-cheng.component';
import {JiuyepeixunAccountantComponent} from './jiuyepeixun-accountant/jiuyepeixun-accountant.component';
import {JiuyepeixunITComponent} from './jiuyepeixun-it/jiuyepeixun-it.component';
import {PteEduComponent} from './pte-edu/pte-edu.component';
import {WebQuanZhanJinJieKeChengComponent} from './web-quan-zhan-jin-jie-ke-cheng/web-quan-zhan-jin-jie-ke-cheng.component';
import {PythonKaiFaRuMenKeChengComponent} from './python-kai-fa-ru-men-ke-cheng/python-kai-fa-ru-men-ke-cheng.component';
import {DjangoJinJieKeChengComponent} from './django-jin-jie-ke-cheng/django-jin-jie-ke-cheng.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  // {path: 'kechengjiaoyu', component: JiuyepeixunComponent},
  {path: 'webqianduankecheng', component: WebQianDuanKeChengComponent},
  {path: 'webquanzhanjinjiekecheng', component: WebQuanZhanJinJieKeChengComponent},
  {path: 'djangojinjiekecheng', component: DjangoJinJieKeChengComponent},
  {path: 'pythonkaifarumenkecheng', component: PythonKaiFaRuMenKeChengComponent},
  {path: 'jiuye-accountant', component: JiuyepeixunAccountantComponent},
  {path: 'jiuye-IT', component: JiuyepeixunITComponent},
  {path: 'PTE-education', component: PteEduComponent},
  {path: 'Contact_us', component: ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})

export class AppRoutingModule {}
