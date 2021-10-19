import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth.component';
import { FavoritesComponent } from '../../components/favorites/favorites.component';
import { ProfileComponent } from '../../components/profile/profile.component';
import { ProductsComponent } from '../../components/products/products.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'favorites',
        component: FavoritesComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
