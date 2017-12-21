import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IProduct } from './product';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AchatService {

  AchatURL='http://localhost:5000/api/achat/';
  constructor(private _http: Http,private http: HttpClient) {} 

getAchat2(id,name,price){
  let url=this.AchatURL+id+'/'+name+'/'+price;
 
  return this.http.get<string>(url);
}



}
