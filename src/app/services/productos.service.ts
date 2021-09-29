import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lista_Producto, Producto } from '../interfaces/producto.interface';


@Injectable({
    providedIn: 'root'
})

export class ProductosService {

    lista_productos: Lista_Producto = {};
    producto: Producto = {};
    prod: string = "ao";

    constructor(private http: HttpClient) {
        console.log("ola");
        this.cargaProductos();
    }


    public cargaProductos(){

        this.http.get('assets/data/productos.json')
        .subscribe( (respuesta: Producto|any) => {
            console.log("prueba 1 ", respuesta);
            this.lista_productos = respuesta;
            console.log("prueba 2 ", this.lista_productos);

        });
    }
}

