import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products: any;

  constructor() { }

  ngOnInit(): void {
  }

  selectProduct(): void {
    // if(!this.item.isSelected) {
    //   this.itemsService.addToCart(this.item)
    // } else {
    //   this.itemsService.deleteItem(this.item)
    // }
    // this.item.isSelected = !this.item.isSelected;
  }

  get hasProducts(): boolean {
    return this.products?.length;
  }
}
