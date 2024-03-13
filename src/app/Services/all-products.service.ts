import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AllProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any> {
    let url = 'https://fakestoreapi.com/products';
    return this.http.get(url);
  }

  getAllPhones(): Observable<any> {
    let url = 'https://dummyjson.com/products/category/smartphones';
    return this.http.get(url);
  }

  getAllProdGenZ(): Observable<any>
  {
let url='https://dummyjson.com/products';
return this.http.get<any>(url);
  }
}

