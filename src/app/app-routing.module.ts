import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ActorlistComponent } from './components/actorlist/actorlist.component';
import { PostdemoComponent } from './components/postdemo/postdemo.component';
import { Friendly404Component } from './components/friendly404/friendly404.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'actors', component: ActorlistComponent},
  {path: 'posts', component: PostdemoComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', component: Friendly404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
