import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      nombre: ['', Validators.required],
      contrasena: ['', Validators.required],
      aceptoPoliticas: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Realizar la lógica de inicio de sesión aquí
    }
  }
}