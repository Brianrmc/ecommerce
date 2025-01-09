import { Component, inject } from '@angular/core';
import { ProductService } from '../../data-access/products.service';

@Component({
  selector: 'app-products-list',
  imports: [],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
  providers: [ProductService]
})
export default class ProductsListComponent {

  private productsService = inject(ProductService)

  constructor(){
    this.productsService.getProducts().subscribe((products) => {
      console.log(products)
    })
  }

}
