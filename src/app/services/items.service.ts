import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  items: any[] = [];

  addToCart(product: any) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  deleteItem(product: any) {
    this.items = this.items.map(item => item !== product);
  }
}