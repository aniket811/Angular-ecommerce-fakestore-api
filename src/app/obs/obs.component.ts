import { FakestoreeeService } from './../services/fakestoreee.service';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-obs',
  templateUrl: './obs.component.html',
  styleUrls: ['./obs.component.css']
})
export class OBSComponent implements OnInit {
  Products: any[] = [];
  AddtoCarts: any[] = [];
  Categories: string[] = [];
  Electronics: number = 0;
  Jewelery: number = 0;
  @Output() Carts = new EventEmitter<any[]>();
  ProductImageAltText: string = "Image not found !"
  //

  constructor(private fakestore: FakestoreeeService) { }

  ngOnInit(): void {
    this.GetCategory();
    this.fakestore.GetProducts().subscribe(s => {
      this.Products = s
      
    });
  }
  public AddtoCart(e: any) {
    this.AddtoCarts.push(e);
  //  let CartItems:number=this.AddtoCarts.length;
    
    this.Carts.emit(this.AddtoCarts);
  }
  
  public GetCategory() {
    this.fakestore.GetCategories().subscribe(s=>this.Categories=s);
  }
  public GetCategoryByDropdown(name:string){
    console.log(name);
    
    this.fakestore.GetProductsByCategory(name).subscribe(s=>this.Products=s);
  }

}
