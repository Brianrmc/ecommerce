/* eslint-disable @angular-eslint/no-output-on-prefix */
import { Component, input, output } from '@angular/core';
import { ProductItemCart } from '../../../shared/interfaces/product.interfce';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart-item',
  imports: [CurrencyPipe],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {

  productCartItem = input.required<ProductItemCart>();

  onRemove = output<number>();

  onIncrease = output<ProductItemCart>();

  onDecrease = output<ProductItemCart>();

}
