import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';

import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { HeaderComponent } from '../../components/header/header.component';
import { ProfileComponent } from '../../components/profile/profile.component';
import { FavoritesComponent } from '../../components/favorites/favorites.component';
import { ProductsComponent } from '../../components/products/products.component';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { ProductComponent } from '../../components/product/product.component';

@NgModule({
  declarations: [
    AuthComponent,
    HeaderComponent,
    FavoritesComponent,
    ProfileComponent,
    ProductsComponent,
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    FlexLayoutModule,
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [AuthComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthModule { }
