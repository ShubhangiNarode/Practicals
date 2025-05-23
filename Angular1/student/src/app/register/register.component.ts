import { Component } from '@angular/core';
import { getMatFormFieldDuplicatedHintError } from '@angular/material/form-field';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor() {

  }
  ngOnInit(): void {

  }
  //  creating empty data object
  user_records: any[] = [];
  data = {
    name: "",
    email: "",
    mobile: "",
    address: "",
    password: ""
  }

  //cod tp store data from form in local storage
  doRegistration(Values: any) {
    this.user_records = JSON.parse(localStorage.getItem('users')||'{}');
    if (this.user_records.some((v) => {
      return v.email == this.data.email
    })) {
      alert("Duplicate Data");
    }
    else {
      this.user_records.push(this.data)
        localStorage.setItem("users", JSON.stringify(this.user_records));
        alert("Hi" + this.data.name + "you are successfully registered...");
      
    }
  }
}
