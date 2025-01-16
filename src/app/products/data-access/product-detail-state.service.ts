import { signalSlice } from 'ngxtension/signal-slice';
import { inject, Injectable } from "@angular/core";
import { Product } from '../../shared/interfaces/product.interfce';
import { ProductService } from './products.service';
import { map, Observable, switchMap } from 'rxjs';

interface State{
  product: Product | null;
  status: 'loading' | 'success' | 'error';
}


@Injectable()
export class ProductDetailsStateService {

  private ProductService = inject(ProductService);

  private initialState: State = {
    product: null,
    status: 'loading' as const,
  };


  state = signalSlice({
    initialState: this.initialState,
    actionSources: {
      getById: (_state, $:Observable<string>)=> $.pipe(
        switchMap((id)=>this.ProductService.getProduct(id)),
        map(data => ({ product: data, status: 'success' as const }))
      )
    }
  });

}
