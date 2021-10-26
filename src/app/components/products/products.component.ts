import { selectSearch } from './../../store/selectors/search.selector';
import { searchItems } from './../../store/actions/search.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { MercadolibreService } from '../../services/mercado-libre.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products: any;
  searchText = '';

  constructor(
    private mercadoLibreService: MercadolibreService,
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.store.select(selectSearch).subscribe(res => {
      if (res) {
        this.searchText = res.query
        this.products = res.items
      }
    })
  }

  findProducts(): void {
    /* this.mercadoLibreService.findProducts(this.searchText).subscribe(res => {
      this.products = res.results;
    }) */

    this.store.dispatch(searchItems({ query: this.searchText }))
  }
}
