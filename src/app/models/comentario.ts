export interface Comentario {
    id_comentario?: number;
    valoracion?: number;
    fecha?: Date;
    titulo?: string;
    descripcion?: string;
    usuario_id_usuario?: number;
    producto_id_producto?: number;
}