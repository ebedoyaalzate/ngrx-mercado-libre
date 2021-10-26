/*global spyOn*/
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { mockProducts } from '../../mocks/mock-products';
import { ItemsService } from '../../services/items.service';
import { addFavorite, deleteFavorite } from '../../store/actions/favorites.actions';
import { ProductComponent } from './product.component';


class MockItemsService { }
const product = { ...mockProducts[0] };

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductComponent],
      imports: [
        NoopAnimationsModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        FlexLayoutModule
      ],
      providers: [
        provideMockStore(),
        { provide: ItemsService, useClass: MockItemsService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    jest.spyOn(store, 'dispatch');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('selectProduct()', () => {
    it('should dispatch addFavorite action', () => {
      // GIVEN
      const action = addFavorite({ product: { ...product, isSelected: true } });
      component.product = product;

      // WHEN
      component.selectProduct();

      // THEN
      expect(store.dispatch).toHaveBeenCalledWith(action);

    });

    it('should dispatch deleteFavorite action', () => {
      // GIVEN
      const action = deleteFavorite({ product: { ...product, isSelected: false } });
      component.product = { ...product, isSelected: true };

      // WHEN
      component.selectProduct();

      // THEN
      expect(store.dispatch).toHaveBeenCalledWith(action);
    });
  });
});
