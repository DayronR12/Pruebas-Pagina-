import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component'; // Asegúrate de que la ruta al componente de login sea correcta

export const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Ruta para el componente de login
  { path: '', redirectTo: '/login', pathMatch: 'full' } // Redireccionar a login por defecto
];
