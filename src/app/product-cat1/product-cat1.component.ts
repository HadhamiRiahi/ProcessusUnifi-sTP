import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IProduct } from '../services/product';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-product-cat1',
  templateUrl: './product-cat1.component.html',
  styleUrls: ['./product-cat1.component.css'],
  
})
export class ProductCat1Component implements OnInit {
  pageTitle: string = 'Product List Laptop';
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
