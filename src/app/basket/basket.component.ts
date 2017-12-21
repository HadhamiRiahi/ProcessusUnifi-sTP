import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BasketService } from '../services/basket.service';
import { IProduct } from '../services/product';
import { AchatService } from '../services/achat.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BasketComponent implements OnInit {
  shoppingBasket: Array<IProduct> = [];
  pageTitle: string = 'Basket';
  imageWidth: number = 50;
  imageMargin: number = 2;
  products: IProduct[];
  errorMessage: string;
  id:number;
 public constructor(private _basketService:BasketService,private _AchatService:AchatService,private _productService: ProductService) {



   }

  ngOnInit() {
  
  
  this.shoppingBasket=this._basketService.shoppingBasket ;
  
  }
BuyProduct(id:string,name:string,price:string){
this._AchatService.getAchat2(id,name,price).subscribe(data =>{
  if (data=='1') {
    alert("Thank you for your purchase !")
    

  }
});
  
}
}
