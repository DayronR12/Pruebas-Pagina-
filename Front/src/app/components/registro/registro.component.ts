import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registroForm!: FormGroup;
  usuarios: Usuario[] = [];
  usuarioSeleccionado?: Usuario; // Variable para almacenar el usuario que se va a actualizar

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService, private router : Router) { }

  ngOnInit() {
    this.registroForm = this.formBuilder.group({
      nit: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      primerNombre: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-zA-Z]+$/)]],
      segundoNombre: ['', [Validators.maxLength(20), Validators.pattern(/^[a-zA-Z]+$/)]],
      primerApellido: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-zA-Z]+$/)]],
      segundoApellido: ['', [Validators.maxLength(20), Validators.pattern(/^[a-zA-Z]+$/)]],
      fechaNacimiento: ['', [Validators.required]],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      usuario: ['', [Validators.required]],
      clave: ['', [Validators.required, Validators.minLength(8)]],
    });

    this.getUsuarios();
  }
  cerrarSesion() {
    // Elimina cualquier dato de sesión o token que hayas guardado
    localStorage.removeItem('token'); // Si usas token, reemplaza con la clave correspondiente

    // Redirige al usuario a la página de login
    this.router.navigate(['/login']);
  }

  onSubmit() {
    if (this.registroForm.valid) {
      if (this.usuarioSeleccionado) {
        // Si hay un usuario seleccionado, actualiza
        this.usuarioService.updateUsuario(this.usuarioSeleccionado.id, this.registroForm.value).subscribe({
          next: (response) => {
            console.log('Usuario actualizado:', response);
            this.getUsuarios(); // Actualiza la lista después de registrar
            this.registroForm.reset(); // Reinicia el formulario
            this.usuarioSeleccionado = undefined; // Limpia la selección
          },
          error: (err) => {
            console.error('Error al actualizar el usuario:', err);
          },
        });
      } else {
        // Si no hay un usuario seleccionado, registra uno nuevo
        this.usuarioService.registrarUsuario(this.registroForm.value).subscribe({
          next: (response) => {
            console.log('Usuario registrado:', response);
            this.getUsuarios();
            this.registroForm.reset();
          },
          error: (err) => {
            console.error('Error al registrar el usuario:', err);
          },
        });
      }
    } else {
      console.log('Formulario no válido');
    }
  }

  getUsuarios(): void {
    this.usuarioService.getAll().subscribe({
      next: (usuarios) => {
        this.usuarios = usuarios;
        console.log('Usuarios obtenidos:', this.usuarios);
      },
      error: (err) => {
        console.error('Error al obtener usuarios:', err);
      }
    });
  }

  deleteUsuario(id?: number): void {
    if (id !== undefined) {
      this.usuarioService.delete(id).subscribe({
        next: () => {
          console.log(`Usuario con ID ${id} eliminado`);
          this.getUsuarios();
        },
        error: (err) => {
          console.error('Error al eliminar el usuario:', err);
        }
      });
    } else {
      console.error('ID de usuario no válido');
    }
  }

  editUsuario(usuario: Usuario): void {
    this.usuarioSeleccionado = usuario; // Almacena el usuario que se va a editar
    this.registroForm.patchValue(usuario); // Rellena el formulario con los datos del usuario
  }

}
