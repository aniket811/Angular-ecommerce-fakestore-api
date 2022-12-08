import { Component } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  CartItems:any[]=[];
  public FormSubmission(e:any){
  }
}
