/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, effect, inject, input } from '@angular/core';
import { ProductDetailsStateService } from '../../data-access/product-detail-state.service';
import { CurrencyPipe } from '@angular/common';
import { CartStateService } from '../../../shared/data-access/cart-state.service';
import { Product } from '../../../shared/interfaces/product.interfce';

@Component({
  selector: 'app-products-details',
  imports: [CurrencyPipe],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.scss',
  providers:[ProductDetailsStateService]
})
export default class ProductsDetailsComponent {

  cartState = inject(CartStateService).state;

  productDetailState = inject(ProductDetailsStateService).state;

  id = input.required<string>();

  constructor() {
    effect(() => {
      this.productDetailState.getById(this.id());
    });
  }

  addToCart() {
    this.cartState.add({
      product: this.productDetailState.product()!,
      quantity: 1,
    });
  }



}
