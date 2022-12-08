import { Injectable } from '@angular/core';
import {HttpClientModule,HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) 
  {

   }
   public GetCategory():Observable<any[]>{
    return this.http.get<any[]>("http://fakestoreapi.com/products/categories")
   }
}
