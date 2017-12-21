import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IProduct } from '../services/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListProduitComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 100;
  imageMargin: number = 20;
  products: IProduct[];
  errorMessage: string;
  constructor(private _productService: ProductService) {
    
        }
  
  ngOnInit(): void {
    this._productService.getProducts()
            .subscribe(products => this.products = products,
                       error => this.errorMessage = <any>error);
}


}
