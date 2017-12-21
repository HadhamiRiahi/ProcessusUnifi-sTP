import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../services/product.service';
import { IProduct } from '../services/product';

@Component({
  selector: 'app-product-cat2',
  templateUrl: './product-cat2.component.html',
  styleUrls: ['./product-cat2.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductCat2Component implements OnInit {

  pageTitle: string = 'Product List Phone';
  errorMessage: string;
  imageWidth: number = 50;
  imageMargin: number = 2;
  products: IProduct[];
  constructor(private _productService: ProductService) {
    
        }
  
  ngOnInit(): void {
    this._productService.getProducts()
            .subscribe(products => this.products = products,
                       error => this.errorMessage = <any>error);
}

}
