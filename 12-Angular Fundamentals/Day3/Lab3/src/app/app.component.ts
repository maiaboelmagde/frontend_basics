import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  imports: [FormComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lab3';
  receivedPersons: any[] = [];

  getDataFromForm(data: any[]) {
    this.receivedPersons = data;
    console.log("Data received from form:", this.receivedPersons);
  }
}
