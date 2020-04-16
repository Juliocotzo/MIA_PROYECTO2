export interface Producto {
    id_producto?: number;
    codigo_producto?: string;
    imagen?: string;
    descripcion?: string;
    precio?: number;
    fecha_publicacion?: Date;
    cantidad_disponible?: number;
    usuario_id_usuario?: number;
    categoria_id_categoria?: number;
}