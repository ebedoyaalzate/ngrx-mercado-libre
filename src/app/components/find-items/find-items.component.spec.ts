import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatCardModule } from '@angular/material/card';

import { ItemComponent } from '../item/item.component';
import { FindItemsComponent } from './find-items.component';

describe('FindItemsComponent', () => {
  let component: FindItemsComponent;
  let fixture: ComponentFixture<FindItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FindItemsComponent, ItemComponent],
      imports: [MatCardModule, FormsModule, HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
