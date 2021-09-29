import { HttpClient } from '@angular/common/http'; //consumir data(json o api) o buscar cualquier otro servicio de la web
import { Injectable } from '@angular/core';
import { Categoria } from '../interfaces/categoria.interface';
import { Producto } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  //ng g s services/categoria
  //ng serve

  //declaracion de variables
  cate: Categoria = {};

  //constructor
  constructor(private http: HttpClient) { 
    console.log("Categoria service");
    this.cargarCategorias();
    this.cargarCategorias_old();
    //this.cargarCategoriasWeb();
  }

  //metodos
  private cargarCategorias(){
    console.log("Metodo Cargar Categorias");
/*  this.http.get('').subscribe( (respuesta) => {
    }); */ //base
    
    //lectura del json
    this.http.get('assets/data/categorias.json')
    .subscribe( (respuesta: Categoria) => {

      this.cate = respuesta;
      console.log("Respuesta: ", this.cate);
      /* console.log("Categorias: ", respuesta['frutas']); */
      //console.log("Pera: ", respuesta['productos'][0]); especifico
    });
  }

  private cargarCategorias_old(){
    console.log("Metodo Cargar Categorias");
/*  this.http.get('').subscribe( (respuesta) => {
    }); */ //base
    //lectura del json
    this.http.get('assets/data/categorias.json')
    .subscribe( (respuesta: any) => {

      console.log("Respuesta: ", respuesta);
      console.log("Frutas: ", respuesta['frutas'][1]);
    });
  }

  private cargarCategoriasWeb(){

    //desde la web directamente
    this.http.get('https://learsixela.github.io/productos_json/productos.json')
    .subscribe( (respuesta) => {

      console.log("Desde la Web:", respuesta);

    });

  }

}
