import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Input() DataFromParent = [{'name':'','age':''}];

  validateName(name:string){
    return name.length >=3;
  }

  validateAge(age:string){
    return +age > 0 && age !== '' && +age <30;
  }
}
