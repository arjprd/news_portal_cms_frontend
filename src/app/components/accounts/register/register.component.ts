import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { CountriesService } from 'src/app/service/countries.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  submitted = false;
  countries: {};
  states: {};
  cities: {};
  constructor(private fb : FormBuilder,private countryService:CountriesService) { }

  ngOnInit(): void {
    this.getCountries();
    this.registerForm = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', Validators.required],
      mobile: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required],
      pin: ['', Validators.required],
    });
  }

  get r() { return this.registerForm.controls; }

  registerSubmit(): void {
    this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
    console.log('data:' , JSON.stringify(this.registerForm.value));
   // this.router.navigate(['/dashboard/']);
  }

  getCountries(){
    this.countryService.getCountries().subscribe(
      data => this.countries = data
    );
  }

  onChangeCountry(countryId: number) {
    if (countryId) {
      this.countryService.getStates(countryId).subscribe(
        data => {
          this.states = data;
          this.cities = null;
        }
      );
    } else {
      this.states = null;
      this.cities = null;
    }
  }

  onChangeState(stateId: number) {
    if (stateId) {
      this.countryService.getCities(stateId).subscribe(
        data => this.cities = data
      );
    } else {
      this.cities = null;
    }
  }

  

}
