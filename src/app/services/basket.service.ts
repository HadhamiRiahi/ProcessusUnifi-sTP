import { Injectable, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { IProduct } from './product';
import { Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BasketService  {
  
  private _productUrl = 'http://localhost:5000/api/values';
 
  products: IProduct[];
  errorMessage: string;
  shoppingBasket: Array<IProduct>=[];
  
  constructor(private _productService: ProductService,private _http: Http) { }
 
  public setId(id:number): void{
    this._productService.getProducts()
    .subscribe(products =>{ this.products = products;
      this.shoppingBasket.push(this.products[id]);
      
     
      
        
    });
 
 
              }



      private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
  
    
}
