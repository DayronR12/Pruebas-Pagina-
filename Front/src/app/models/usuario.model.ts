export interface Usuario {
    id: number;
    nit: string;
    primerNombre: string; // Asegúrate de que este nombre coincide con la propiedad de la API
    segundoNombre?: string;
    primerApellido: string; // Asegúrate de que este nombre coincide con la propiedad de la API
    segundoApellido?: string;
    fechaNacimiento: string;
    telefono: string;
    email: string;
    usuario: string;
    clave: string;
  }