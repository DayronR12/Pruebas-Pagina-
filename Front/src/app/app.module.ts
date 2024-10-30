import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Importa el módulo de rutas
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent
    // Otros componentes, si los tienes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule, // Incluye las rutas en el módulo raíz
    FormsModule,
    HttpClientModule, // Incluye HttpClientModule para hacer peticiones HTTP a la API
    ReactiveFormsModule // Incluye AppRoutingModule o RouterModule aquí
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Para usar Angular Material o Bootstrap en el componente raíz
  bootstrap: [AppComponent]
})
export class AppModule { }
