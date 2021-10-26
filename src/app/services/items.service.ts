import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private itemsBehaviorSubject = new BehaviorSubject<any[]>([]);
  items$ = this.itemsBehaviorSubject.asObservable();

  addToCart(product: any) {
    const items = this.itemsBehaviorSubject.value
    items.push(product);
    this.itemsBehaviorSubject.next(items);
  }

  getItems(): Observable<any[]> {
    return this.items$;
  }

  hasItems(): boolean {
    return !!this.itemsBehaviorSubject.value?.length;
  }

  clearCart() {
    this.itemsBehaviorSubject.next([]);
  }

  deleteItem(product: any) {
    this.itemsBehaviorSubject.next(this.itemsBehaviorSubject.value.filter(item => item?.id !== product?.id));
  }
}
