import { ItemsService } from './../../services/items.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  products$: Observable<any[]>;

  constructor(
    private itemsService: ItemsService
  ) {
    this.products$ = this.itemsService.getItems();
  }

  ngOnInit(): void {}

  get hasProducts(): boolean {
    return this.itemsService.hasItems();
  }
}
