import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  emailForm:FormGroup;
  submitted = false;
  constructor(private fb : FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.emailForm = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
    });
  }

  get f() { return this.emailForm.controls; }

  emailSubmit(): void {
    this.submitted = true;

        // stop here if form is invalid
        if (this.emailForm.invalid) {
            return;
        }
    console.log('email:' , JSON.stringify(this.emailForm.value));
  }
}
