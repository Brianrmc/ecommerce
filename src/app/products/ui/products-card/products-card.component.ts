import { Component, input } from '@angular/core';
import { Product } from '../../../shared/interfaces/product.interfce';

@Component({
  selector: 'app-products-card',
  imports: [],
  templateUrl: './products-card.component.html',
  styles: ``
})
export class ProductsCardComponent {

  product = input.required<Product>();

}
