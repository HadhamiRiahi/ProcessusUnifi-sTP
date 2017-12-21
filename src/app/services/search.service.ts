import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { IProduct } from './product';

@Injectable()
export class SearchService {
  link='http://localhost:5000/api/search/'
  products: IProduct[];
  constructor(private _http: Http) {} 
  getProducts(name : string): Observable<IProduct[]> {
    
    return this._http.get(this.link+name )
        .map((response: Response) => <IProduct[]> response.json())
        .do(data => console.log('All: ' +  JSON.stringify(data)))
        .catch(this.handleError);
}

private handleError(error: Response) {
  console.error(error);
  return Observable.throw(error.json().error || 'Server error');
} 

}
