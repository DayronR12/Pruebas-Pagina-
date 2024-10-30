import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  // Credenciales predefinidas
  private predefinedUser = 'Usuario1';
  private predefinedPassword = 'clave1234';

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      usuario: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[A-Z][a-z]{6}[0-9]$/),
          Validators.maxLength(8)
        ]
      ],
      clave: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { usuario, clave } = this.loginForm.value;

      // Verifica las credenciales
      if (usuario === this.predefinedUser && clave === this.predefinedPassword) {
        // Redirige al usuario si las credenciales son correctas
        this.router.navigate(['/registro']);
      } else {
        alert('Usuario o contraseña incorrectos');
      }
    } else {
      console.log('Formulario no válido');
    }
  }
}
