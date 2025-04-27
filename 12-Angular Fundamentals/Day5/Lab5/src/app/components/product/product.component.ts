import { Component } from '@angular/core';
import { HomeComponent } from '../product_home/home.component';
import { FormComponent } from '../product_form/form.component';

@Component({
  selector: 'app-product',
  imports: [HomeComponent,FormComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  productFromForm:any;
  getData(evData:any){
    console.log(evData);
    this.productFromForm = evData;
  }
  
}
