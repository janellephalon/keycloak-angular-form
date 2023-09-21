import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {
  entryForm!: FormGroup;

  formFields = [
    { name: 'tenantName', label: 'Tenant Name', type: 'text', placeholder: 'Enter your tenant name' },
    { name: 'adminEmail', label: 'Admin Email', type: 'email', placeholder: 'Enter your admin email' },
    { name: 'adminPhone', label: 'Admin Phone Number', type: 'text', placeholder: 'Enter your admin number' },
    { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password' },
    { name: 'confirmPassword', label: 'Confirm Password', type: 'password', placeholder: 'Confirm your password' },
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.entryForm = this.fb.group({
      tenantName: ['', Validators.required],
      tenantID: ['', Validators.required],
      adminEmail: ['', [Validators.required, Validators.email]],
      adminPhone: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.entryForm.valid) {
      console.log(this.entryForm.value);
      // Handle form submission logic here
    }
  }
}
