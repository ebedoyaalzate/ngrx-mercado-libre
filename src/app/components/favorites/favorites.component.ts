import { ItemsService } from './../../services/items.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { selectFavorites, selectHasFavorites } from 'src/app/store/selectors/favorites.selector';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  products$: Observable<any[]>;

  constructor(
    private itemsService: ItemsService, 
    private store: Store<AppState>,
  ) {
    // this.products$ = this.itemsService.getItems();
    this.products$ = this.store.select(selectFavorites);
  }

  ngOnInit(): void {}

  get hasProducts(): Observable<boolean> {
    // return this.itemsService.hasItems();
    return this.store.select(selectHasFavorites)
  }
}
