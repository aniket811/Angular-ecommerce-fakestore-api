import { Injectable } from '@angular/core';
import{HttpClient, HttpClientModule} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FakestoreeeService {

  constructor(private http:HttpClient) { }
  public GetProducts():Observable <any[]>{
    return this.http.get<any[]>("https://fakestoreapi.com/products")
  }
  public GetProductsByCategory(name:string):Observable <any[]>{
    return this.http.get<any[]>(`https://fakestoreapi.com/products/category/${name}`)
  }
  public GetCategories():Observable <any[]>{
    return this.http.get<any[]>("https://fakestoreapi.com/products/categories");
  }
}
