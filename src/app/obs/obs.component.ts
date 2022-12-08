import { FakestoreeeService } from './../services/fakestoreee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-obs',
  templateUrl: './obs.component.html',
  styleUrls: ['./obs.component.css']
})
export class OBSComponent implements OnInit {
  Products:any[]=[];
  AddtoCarts:any[]=[];
  constructor(private fakestore:FakestoreeeService) { }

  ngOnInit(): void {
    this.fakestore.GetProducts().subscribe(s=>this.Products=s);
  }
  public AddtoCart(e:any){
    this.AddtoCarts.push(e);
    console.log("Array Pushed !"  + e)
  }
}
