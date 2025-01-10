import { Component, inject} from '@angular/core';
import { ProductStateService } from '../../data-access/product-state.service';
import { ProductsCardComponent } from '../../ui/products-card/products-card.component';

@Component({
  selector: 'app-products-list',
  imports: [ProductsCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
  providers: [ProductStateService]
})
export default class ProductsListComponent {

  productsState = inject(ProductStateService)

  changePage(){
    const page = this.productsState.state.page() + 1;
    this.productsState.changePage$.next(page);
  }


}
