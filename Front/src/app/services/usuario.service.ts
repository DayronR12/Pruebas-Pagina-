import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:8080/api/usuarios'; // Cambia esto según la URL de tu API.

  constructor(private http: HttpClient) {}

  // Crear usuario
  registrarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>('http://localhost:8080/api/usuarios/registro', usuario);
}

  // Obtener todos los usuarios
  getAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('http://localhost:8080/api/usuarios'); // Aquí debe ser solo la URL base
  }

  // Actualizar usuario
// usuario.service.ts
updateUsuario(id: number, usuario: Usuario): Observable<Usuario> {
  return this.http.put<Usuario>(`http://localhost:8080/api/usuarios/${id}`, usuario);
}

  // Eliminar usuario
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
}

}