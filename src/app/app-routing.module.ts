import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ay7agaComponent } from './ay7aga/ay7aga.component';
import { HomeComponent } from './home/home.component';
import { EditpostComponent } from './editpost/editpost.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:"ay7aga/:id",component:Ay7agaComponent},
  {path:"edit/:id",component:EditpostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
