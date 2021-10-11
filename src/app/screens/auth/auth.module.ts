import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from '../../components/header/header.component';
import { FindItemsComponent } from '../../components/find-items/find-items.component';
import { FavoritesComponent } from 'src/app/components/favorites/favorites.component';
import { ProfileComponent } from 'src/app/components/profile/profile.component'
import { ItemComponent } from 'src/app/components/item/item.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AuthComponent,
    HeaderComponent,
    FindItemsComponent,
    FavoritesComponent,
    ProfileComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatSidenavModule,
    MatCardModule,
    FormsModule,
    MatIconModule
  ],
  exports: [AuthComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthModule { }
