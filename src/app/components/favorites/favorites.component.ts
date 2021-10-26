import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { ItemsService } from './../../services/items.service';
import { AppState } from '../../store/state/app.state';
import { selectAllFavorites, selectHasFavorites } from '../../store/selectors/favorites.selector';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
  products$: Observable<any[]> = this.store.select(selectAllFavorites);
  hasProducts$: Observable<boolean> = this.store.select(selectHasFavorites);

  constructor(
    private itemsService: ItemsService,
    private store: Store<AppState>,
  ) {
    // this.products$ = this.itemsService.getItems();
  }

  // get hasProducts(): Observable<boolean> {
  //   // return this.itemsService.hasItems();
  // }
}
