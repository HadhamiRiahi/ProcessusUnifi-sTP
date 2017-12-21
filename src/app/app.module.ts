import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RechercheComponent } from './recherche/recherche.component';
import { ProduitComponent } from './produit/produit.component';
import { ProductCat1Component } from './product-cat1/product-cat1.component';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { SearchService } from './services/search.service';
import { FormsModule }   from '@angular/forms';
import { BasketService } from './services/basket.service';
import { BasketComponent } from './basket/basket.component';
import { AchatService } from './services/achat.service';
import { ProductCat2Component } from './product-cat2/product-cat2.component';
import { ProductCat3Component } from './product-cat3/product-cat3.component';


@NgModule({
  declarations: [
    AppComponent,
    RechercheComponent,
    ProduitComponent,
    ProductCat1Component,
    WelcomeComponent,
    ListProduitComponent,
    BasketComponent,
    ProductCat2Component,
    ProductCat3Component    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
    { path: 'welcome', component: WelcomeComponent },
    { path: 'Product List Phone', component:ProductCat2Component },
     { path: 'Product List Camera', component:ProductCat3Component },
    { path: 'Basket', component: BasketComponent },
    { path: 'Search List', component:RechercheComponent},
    { path: 'Product Detail', component: ProduitComponent  },
    { path: 'Product Detail/:id', component: ProduitComponent  },
    { path: 'product List', component:  ListProduitComponent },
    { path: 'Product List Laptop', component:ProductCat1Component },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    
  ],
  providers: [ProductService,SearchService,BasketService,AchatService],
  bootstrap: [AppComponent]
})


export class AppModule { 
  
}
