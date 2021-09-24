import { Component, OnInit } from '@angular/core';

import { MercadolibreService } from '../../services/mercado-libre.service';


@Component({
  selector: 'app-find-items',
  templateUrl: './find-items.component.html',
  styleUrls: ['./find-items.component.scss']
})
export class FindItemsComponent implements OnInit {
  products: any;
  searchText = '';

  constructor(private mercadoLibreService: MercadolibreService) { }

  ngOnInit(): void {
  }

  findItems(): void {
    this.mercadoLibreService.findProducts(this.searchText).subscribe(res => {
      this.products = res.results;
    })
  }

}
