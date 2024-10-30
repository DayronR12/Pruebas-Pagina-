package com.example.Back.servicio;

import com.example.Back.modelo.Usuario;
import com.example.Back.repositorio.UsuarioRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Period;
import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario guardarUsuario(@Valid Usuario usuario) {
        validarUsuario(usuario);
        return usuarioRepository.save(usuario);
    }

    public List<Usuario> obtenerTodosLosUsuarios() {
        return usuarioRepository.findAll();  // Agregado para obtener todos los usuarios
    }

    public Optional<Usuario> obtenerUsuarioPorId(Long id) {
        return usuarioRepository.findById(id);
    }

    public void eliminarUsuario(Long id) {
        usuarioRepository.deleteById(id);
    }

    private void validarUsuario(Usuario usuario) {
        // Validar la fecha de nacimiento (mayor de 18 años)
        if (usuario.getFechaNacimiento() != null) {
            LocalDate fechaActual = LocalDate.now();
            if (Period.between(usuario.getFechaNacimiento(), fechaActual).getYears() < 18) {
                throw new IllegalArgumentException("El usuario debe tener al menos 18 años.");
            }
        }
    }
}
