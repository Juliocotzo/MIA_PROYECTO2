export interface Usuario {
    id_usuario?: number;
    nombre?: string;
    apellido?: string;
    password?: string;
    correo?: string;
    telefono?: string;
    fotografia?: string;
    fecha_de_nacimiento?: Date;
    fecha_de_registro?: Date;
    direccion?: string;
    credito_disponible?: number;
    ganancia_obtenida?: number;
    estado?: number;
    validacion?: number;
    genero_id_genero?: number;
    clase_cliente_id_clase_cliente?: number;
    tipo_usuario_id_tipo_usuario?: number;

}