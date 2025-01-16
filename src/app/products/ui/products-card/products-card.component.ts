import { Component, input, output } from '@angular/core';
import { Product } from '../../../shared/interfaces/product.interfce';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products-card',
  imports: [RouterLink],
  templateUrl: './products-card.component.html',
  styles: ``
})
export class ProductsCardComponent {

  product = input.required<Product>();

  addToCart = output<Product>();

  add(event: Event) {
    event.stopPropagation();
    event.preventDefault();
    this.addToCart.emit(this.product());

  }

}
