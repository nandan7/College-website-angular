import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { user } from '../user';
import { userdetails } from '../userdetails';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  constructor() {}
  Form = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.pattern(/[a-zA-Z]/),
    ]),
    lastName: new FormControl(''),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  get firstName() {
    return this.Form.get('firstName');
  }
  get password() {
    return this.Form.get('password');
  }
  get email() {
    return this.Form.get('email');
  }
  onSubmit() {
    console.log(this.Form.value);
    console.log(this.Form.controls['firstName'].value);
    console.log(this.Form.get('firstName').value);
  }
  users: user[];
  newUser: any = {};

  ngOnInit() {
    this.users = userdetails;
  }
  addUser(newUser): any {
    console.log('Add contact has been called');
    this.users.push(newUser);
  }
}
