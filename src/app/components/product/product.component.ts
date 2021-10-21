import { Component, Input, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: any;

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
  }

  selectProduct() {
    if(!this.product.isSelected) {
      this.itemsService.addToCart(this.product)
    } else {
      this.itemsService.deleteItem(this.product)
    }
    this.product.isSelected = !this.product.isSelected;
  }
}
