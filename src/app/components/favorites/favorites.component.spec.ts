import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';
import { ItemsService } from '../../services/items.service';
import { ProductComponent } from '../product/product.component';

import { FavoritesComponent } from './favorites.component';

class MockItemsService {
  getItems = jest.fn();
  hasItems = jest.fn();
}

describe('FavoritesComponent', () => {
  let component: FavoritesComponent;
  let fixture: ComponentFixture<FavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritesComponent, MockComponents(ProductComponent) ],
      providers: [{ provide: ItemsService, useClass: MockItemsService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
