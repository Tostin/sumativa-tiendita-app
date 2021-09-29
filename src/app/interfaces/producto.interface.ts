export interface Producto {

    //productos: Producto[];


    id?: number;
    nombre?: string;
    descripcion?: string;
    precio?: number | string;

}

export interface Lista_Producto {

    productos?: Producto[];

}