import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-product',
  imports: [HomeComponent,FormComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

}
