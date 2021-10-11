import { Component, OnInit, Input } from '@angular/core';
import { ItemsService } from '../../services/items.service'
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: any;

  constructor(
    private itemsService: ItemsService,
  ) { }

  ngOnInit(): void {
  }

  selectItem() {
    if(!this.item.isSelected) {
      this.itemsService.addToCart(this.item)
    } else {
      this.itemsService.deleteItem(this.item)
    }
    this.item.isSelected = !this.item.isSelected;
  }
}
