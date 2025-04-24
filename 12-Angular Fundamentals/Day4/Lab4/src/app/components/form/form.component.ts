import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  newProduct={
    productName:'',
    productDisc:'',
    productImgUrl:'',
    productRate: undefined
  };

  @Output() passDataEvent = new EventEmitter();

  submitForm(){
    this.passDataEvent.emit(this.newProduct);

    this.newProduct={
      productName:'',
      productDisc:'',
      productImgUrl:'',
      productRate: undefined
    };
  }
}
