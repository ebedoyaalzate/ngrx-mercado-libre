import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { addFavorite, deleteFavorite } from 'src/app/store/actions/favorites.actions';
import { selectFavorites } from 'src/app/store/selectors/favorites.selector';
import { AppState } from 'src/app/store/state/app.state';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: any;

  constructor(
    private itemsService: ItemsService, 
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.store.select(selectFavorites).pipe(take(1)).subscribe(res => {
      this.product = {
        ...this.product,
        isSelected: !!res.find(item => this.product.id === item.id),
      }
    })
  }

  selectProduct() {
    const product = {
      id: this.product.id, 
      thumbnail: this.product.thumbnail,
      title: this.product.title,
      price:this.product.price,
      isSelected: !this.product.isSelected,
    }
    if(!this.product.isSelected) {
      // this.itemsService.addToCart(this.product)
      this.store.dispatch(addFavorite({product}));
    } else {
      // this.itemsService.deleteItem(this.product)
      this.store.dispatch(deleteFavorite({product}));
    }
    this.product = {
      ...this.product,
      isSelected: !this.product.isSelected,
    }
  }
}
