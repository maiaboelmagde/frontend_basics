import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone:true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  myFormValidation = new FormGroup({
    productName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    productDisc: new FormControl('', [Validators.required]),
    productImgUrl: new FormControl('', [Validators.required, Validators.pattern(/^(http[s]?:\/\/.*\.(?:png|jpg|jpeg|gif|svg)(\?.*)?$|http[s]?:\/\/.*\?.*fm=(?:png|jpg|jpeg|gif|svg)|data:image\/(png|jpg|jpeg|gif|svg\+xml);base64,.*)$/i)    ]),
    productRate: new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)])
  });
  
  @Output() passDataEvent = new EventEmitter();

  submitForm(){
    if (this.myFormValidation.valid) {
      this.passDataEvent.emit(this.myFormValidation.value);
      this.myFormValidation.reset();
    } else {
      this.myFormValidation.markAllAsTouched();
    }
  }
}
