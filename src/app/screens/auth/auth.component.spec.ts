import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterTestingModule } from '@angular/router/testing';

import { FavoritesComponent } from '../../components/favorites/favorites.component';
import { HeaderComponent } from '../../components/header/header.component';
import { ItemComponent } from '../../components/item/item.component';
import { ProductsComponent } from '../../components/products/products.component';
import { ProfileComponent } from '../../components/profile/profile.component';
import { AuthComponent } from './auth.component';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AuthComponent,
        HeaderComponent,
        ProductsComponent,
        FavoritesComponent,
        ProfileComponent,
        ItemComponent,
      ],
      imports: [RouterTestingModule, MatSidenavModule, MatCardModule, FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
