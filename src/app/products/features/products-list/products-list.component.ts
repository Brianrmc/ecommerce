import { Component, inject} from '@angular/core';
import { ProductStateService } from '../../data-access/product-state.service';
import { ProductsCardComponent } from '../../ui/products-card/products-card.component';
import { CartStateService } from '../../../shared/data-access/cart-state.service';
import { Product } from '../../../shared/interfaces/product.interfce';

@Component({
  selector: 'app-products-list',
  imports: [ProductsCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
  providers: [ProductStateService]
})
export default class ProductsListComponent {

  productsState = inject(ProductStateService)

  cartState = inject(CartStateService).state;

  changePage(){
    const page = this.productsState.state.page() + 1;
    this.productsState.changePage$.next(page);
  }

  addToCart(product: Product) {
    this.cartState.add({
        product,
        quantity: 1
    })
  }


}
