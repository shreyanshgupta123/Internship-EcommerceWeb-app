import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import { AuthService } from '../../Services/auth.service';
@Component({
  selector: 'app-shopfy-credit-user',
  templateUrl: './shopfy-credit-user.component.html',
  styleUrl: './shopfy-credit-user.component.scss'
})
export class ShopfyCreditUserComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
user:any;
  constructor(private _formBuilder: FormBuilder,private authService:AuthService,private cdr: ChangeDetectorRef) {}
  ngOnInit() {
    const token = localStorage.getItem('token');
    const userid=localStorage.getItem('userid');
    if (token) {
      this.authService.getUser(token).subscribe({
        next: (user) => {
          this.user = user;
          console.log('User:', user);

        },
        error: (error) => {
          console.error('Error:', error);
        },
      });
    } else {
      console.error('Token not found in local storage.');
    }
  }
}

