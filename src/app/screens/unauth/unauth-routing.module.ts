import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnauthComponent } from './unauth.component';

const routes: Routes = [
  {
    path: '',
    component: UnauthComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class UnauthRoutingModule { }
