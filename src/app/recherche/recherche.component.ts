import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IProduct } from '../services/product';
import { Observable } from 'rxjs/Observable';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RechercheComponent  {
  pageTitle: string = 'Search List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  products: IProduct[];
  errorMessage: string;
  inputValue: string;
  constructor(private _searchService: SearchService) { }

performSearch(): void 
  {
this._searchService.getProducts(this.inputValue).subscribe(products => this.products = products,
    error => this.errorMessage = <any>error);
  }

   
 
}
