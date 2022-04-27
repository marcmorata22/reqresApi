import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { UsersComponent } from './components/users/users.component';
import { NasaComponent } from './components/nasa/nasa.component';

const routes: Routes = [
  {path: "", component: UsersComponent},
  {path: "nasa", component: NasaComponent},
  {path: "**", component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
