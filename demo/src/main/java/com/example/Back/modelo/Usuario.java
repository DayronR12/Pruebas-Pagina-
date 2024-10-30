package com.example.Back.modelo;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import java.time.LocalDate;

@Entity
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getClave() {
        return clave;
    }

    public void setClave(String clave) {
        this.clave = clave;
    }

    @Column(unique = true)
    private String usuario; // Cambia esto si la propiedad es diferente
    private String clave; // Asegúrate de que esta propiedad esté bien definida

    @Column(length = 10, nullable = false, unique = true)
    @Pattern(regexp = "^[0-9]{10}$", message = "El NIT debe tener 10 dígitos y solo contener números")
    private String nit;

    @Column(length = 20, nullable = false)
    @Pattern(regexp = "^[A-Za-z]+$", message = "El nombre solo debe contener letras")
    private String primerNombre;

    @Column(length = 20)
    @Pattern(regexp = "^[A-Za-z]*$", message = "El segundo nombre solo debe contener letras")
    private String segundoNombre;

    @Column(length = 20, nullable = false)
    @Pattern(regexp = "^[A-Za-z]+$", message = "El apellido solo debe contener letras")
    private String primerApellido;

    @Column(length = 20)
    @Pattern(regexp = "^[A-Za-z]*$", message = "El segundo apellido solo debe contener letras")
    private String segundoApellido;

    @Column(nullable = false)
    @Past(message = "La fecha de nacimiento debe ser anterior a la fecha actual")
    private LocalDate fechaNacimiento;

    @Column(length = 10, nullable = false)
    @Pattern(regexp = "^[0-9]{10}$", message = "El teléfono debe tener 10 dígitos")
    private String telefono;

    @Column(nullable = false, unique = true)
    @Email(message = "El correo debe tener un formato válido")
    private String email;


    // Getters y Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNit() {
        return nit;
    }

    public void setNit(String nit) {
        this.nit = nit;
    }

    public String getPrimerNombre() {
        return primerNombre;
    }

    public void setPrimerNombre(String primerNombre) {
        this.primerNombre = primerNombre;
    }

    public String getSegundoNombre() {
        return segundoNombre;
    }

    public void setSegundoNombre(String segundoNombre) {
        this.segundoNombre = segundoNombre;
    }

    public String getPrimerApellido() {
        return primerApellido;
    }

    public void setPrimerApellido(String primerApellido) {
        this.primerApellido = primerApellido;
    }

    public String getSegundoApellido() {
        return segundoApellido;
    }

    public void setSegundoApellido(String segundoApellido) {
        this.segundoApellido = segundoApellido;
    }

    public LocalDate getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(LocalDate fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }


}