import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { UnauthGuard } from './guards/unauth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [ UnauthGuard ],
    loadChildren: () => import('./screens/unauth/unauth.module').then( m => m.UnauthModule )
  },
  {
    path: 'home',
    canActivate: [ AuthGuard ],
    loadChildren: () => import('./screens/auth/auth.module').then( m => m.AuthModule )
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
