export interface Pintura {

    id?: number;
    nombre?: string;
    descripcion?: string;
    contenido?: number;
    cantidad?: number;
    precio?: number;


}


export interface Lista_Pinturas {
    pinturas?: Pintura[];
}
