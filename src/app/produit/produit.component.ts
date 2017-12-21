import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { IProduct } from '../services/product';
import { BasketService } from '../services/basket.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProduitComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  products: IProduct[];
  errorMessage: string; 
  id :number  ;
  imageWidth: number = 300;
  imageMargin: number = 20;  

  constructor(private _route: ActivatedRoute,
    private _router: Router,private _productService: ProductService, private _basketService:BasketService) {}

    ngOnInit(): void {
 this.id = +this._route.snapshot.params['id'];
this.pageTitle += `: ${this.id}`;

this._productService.getProducts()
.subscribe(products => 
  {this.products = products;},
error => this.errorMessage = <any>error);
 }

setId(id:number):void{
 this._basketService.setId(this.id-1);}

}
