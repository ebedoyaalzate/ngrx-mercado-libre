import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MockComponents } from 'ng-mocks';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { ProductListComponent } from '../product-list/product-list.component';
import { ProductsComponent } from './products.component';
import { searchItems } from '../../store/actions/search.actions';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsComponent, MockComponents(ProductListComponent)],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
        MatIconModule,
        MatInputModule,
        FlexLayoutModule,
        HttpClientTestingModule
      ],
      providers: [provideMockStore()]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    jest.spyOn(store, 'dispatch');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('findProducts()', () => {
    const query = 'carro';
    it('should dispatch a searchItems action', () => {
      // GIVE
      component.searchText = query;
      const action = searchItems({ query });

      // WHEN
      component.findProducts();

      // THEN
      expect(store.dispatch).toHaveBeenCalledWith(action);
    });

  });
});
