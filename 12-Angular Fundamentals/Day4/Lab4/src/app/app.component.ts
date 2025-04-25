import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';

@Component({
  selector: 'app-root',
  imports: [HomeComponent,FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lab4';

  productFromForm:any;
  getData(evData:any){
    console.log(evData);
    this.productFromForm = evData;
  }
}
