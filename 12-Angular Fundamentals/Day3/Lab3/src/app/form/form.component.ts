import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  Persons:any[]= [];

  name:string = '';
  age:string ='';

  @Output() passDataEvent = new EventEmitter();

  showNameError = false;
  showAgeError = false;

  passData() {
    this.showNameError = !this.validateName();
    this.showAgeError = !this.validateAge();
    
    if(this.validateName() && this.validateAge()){
      this.passDataEvent.emit(this.Persons);
      let personObj = {name:this.name,age:this.age};
      this.Persons.push(personObj);

      this.passDataEvent.emit(this.Persons);
      console.log(this.Persons);

      this.name = '';
      this.age = '';
    }

  }
  validateName(){
    return this.name.length >=3;
  }

  validateAge(){
    return +this.age > 0 && this.age !== '' && +this.age <30;
  }
}
