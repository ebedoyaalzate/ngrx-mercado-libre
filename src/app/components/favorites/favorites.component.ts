import { ItemsService } from './../../services/items.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  products: any[] = [];

  constructor(
    private itemsService: ItemsService
  ) { }

  ngOnInit(): void {
    this.products = this.itemsService.getItems()
  }

}
