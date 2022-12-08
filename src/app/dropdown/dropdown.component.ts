import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  categories:any[]=[]
  constructor(private fakecategories:CategoryService) { }

  ngOnInit(): void {
    this.fakecategories.GetCategory().subscribe(s=>this.categories=s);
  }
  


}
