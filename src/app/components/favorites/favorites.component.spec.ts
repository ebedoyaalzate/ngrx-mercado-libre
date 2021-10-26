import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';
import { ItemsService } from '../../services/items.service';
import { ProductComponent } from '../product/product.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { FavoritesComponent } from './favorites.component';
import { mockProducts } from '../../mocks/mock-products';
import { selectAllFavorites } from '../../store/selectors/favorites.selector';

class MockItemsService {
  getItems = jest.fn();
  hasItems = jest.fn();
}
const favoritesList = [...mockProducts];

describe('FavoritesComponent', () => {
  let component: FavoritesComponent;
  let fixture: ComponentFixture<FavoritesComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoritesComponent, MockComponents(ProductComponent)],
      providers: [
        provideMockStore(), { provide: ItemsService, useClass: MockItemsService }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('products', () => {
    it('should hasProducts be equal to the favorites list', done => {
      // GIVEN
      store.overrideSelector(selectAllFavorites, favoritesList);

      component.products$.subscribe(products => {
        expect(products).toEqual(favoritesList);
        done();
      })
    });

    it('should hasProducts$ emit true', done => {
      // GIVEN
      store.overrideSelector(selectAllFavorites, favoritesList);

      component.hasProducts$.subscribe(hasProducts => {
        expect(hasProducts).toBe(true);
        done();
      })
    });

    it('should hasProducts$ emit false', done => {
      // GIVEN
      store.overrideSelector(selectAllFavorites, []);

      component.hasProducts$.subscribe(hasProducts => {
        // THEN
        expect(hasProducts).toBe(false);
        done();
      })
    });
  });
});
