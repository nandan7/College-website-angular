import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-project';
  currentDate = Date.now();
  Form = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  get firstName() {
    return this.Form.get('firstName');
  }
  onSubmit() {
    console.log(this.Form.value);
    console.log(this.Form.controls['firstName'].value);
    console.log(this.Form.get('firstName').value);
  }
}
