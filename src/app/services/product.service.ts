import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
     
  private _productUrl = 'http://localhost:5000/api/values';
  shoppingBasket: Array<IProduct> = [];
  
      constructor(private _http: Http) {} 
        
  
      getProducts(): Observable<IProduct[]> {
          return this._http.get(this._productUrl)
              .map((response: Response) => <IProduct[]> response.json())
            
              .catch(this.handleError);
      }
  
      private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
  
}
