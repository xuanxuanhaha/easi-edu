import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {WebQianDuanKeChengComponent} from './web-qian-duan-ke-cheng/web-qian-duan-ke-cheng.component';
import {JiuyepeixunAccountantComponent} from './jiuyepeixun-accountant/jiuyepeixun-accountant.component';
import {JiuyepeixunITComponent} from './jiuyepeixun-it/jiuyepeixun-it.component';
import {PteEduComponent} from './pte-edu/pte-edu.component';
import {WebQuanZhanJinJieKeChengComponent} from './web-quan-zhan-jin-jie-ke-cheng/web-quan-zhan-jin-jie-ke-cheng.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  // {path: 'kechengjiaoyu', component: JiuyepeixunComponent},
  {path: 'webqianduankecheng', component: WebQianDuanKeChengComponent},
  {path: 'webquanzhanjinjiekecheng', component: WebQuanZhanJinJieKeChengComponent},
  {path: 'kechengjiaoyu-accountant', component: JiuyepeixunAccountantComponent},
  {path: 'kechengjiaoyu-IT', component: JiuyepeixunITComponent},
  {path: 'PTE-education', component: PteEduComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
