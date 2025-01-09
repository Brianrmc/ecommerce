import { Injectable } from "@angular/core";
import { BaseHttpService } from "../../shared/data-access/base-http.service";

@Injectable()
export class ProductService extends BaseHttpService{

  getProducts(){
    return this.http.get(`${this.apiUrl}/products`)

  }
}
