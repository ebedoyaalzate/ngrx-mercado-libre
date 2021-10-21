import { Component, OnInit } from '@angular/core';
import { MercadolibreService } from '../../services/mercado-libre.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent{
  products: any;
  searchText = '';

  constructor(private mercadoLibreService: MercadolibreService) { }

  ngOnInit(): void {
  }

  findProducts(): void {
    this.mercadoLibreService.findProducts(this.searchText).subscribe(res => {
      this.products = res.results;
    })
  }
}
