import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {JiuyepeixunComponent} from './jiuyepeixun/jiuyepeixun.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'kechengjiaoyu', component: JiuyepeixunComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
