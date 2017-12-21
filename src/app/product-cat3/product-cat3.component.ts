import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IProduct } from '../services/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-cat3',
  templateUrl: './product-cat3.component.html',
  styleUrls: ['./product-cat3.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductCat3Component implements OnInit {
  
  pageTitle: string = 'Product List Camera';
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
