import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {JiuyepeixunComponent} from './jiuyepeixun/jiuyepeixun.component';
import {WebQianDuanKeChengComponent} from './web-qian-duan-ke-cheng/web-qian-duan-ke-cheng.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'kechengjiaoyu', component: JiuyepeixunComponent},
  {path: 'webqianduankecheng', component: WebQianDuanKeChengComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
