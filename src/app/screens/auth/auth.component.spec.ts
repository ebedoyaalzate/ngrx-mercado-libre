import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';

import { FavoritesComponent } from '../../components/favorites/favorites.component';
import { HeaderComponent } from '../../components/header/header.component';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { ProductComponent } from '../../components/product/product.component';
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
        ProductListComponent,
        ProductComponent,
      ],
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        MatMenuModule,
        FlexLayoutModule
      ],
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
