import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteComponent } from './delete/delete.component';
import { DivisiComponent } from './divisi/divisi.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:"dashboard", component:DashboardComponent},
  {path:"divisi", component:DivisiComponent},
  {path:"add", component:AddComponent},
  {path:"update", component:UpdateComponent},
  {path:"delete", component:DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
