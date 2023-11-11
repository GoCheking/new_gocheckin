import { Component } from '@angular/core';

import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-movil-form-login',
  templateUrl: './movil-form-login.component.html',
  styleUrls: ['./movil-form-login.component.scss']
})
export class MovilFormLoginComponent {
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
