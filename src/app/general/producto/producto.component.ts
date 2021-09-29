import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { CategoriaService } from '../../services/categoria.service';
import { PinturaService } from 'src/app/services/pintura.service';
import { InformacionComponent } from '../informacion/informacion.component';
import { IntermediarioService } from '../../services/intermediario.service';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  nombre_Buscar: String = "";
  buscado: String|null|number = null;
  cantidad: number|null = null;
  carrito_Compras: number[]|any[] = []; 
  total: number|null|any = 0;

  constructor(public categoriaService: CategoriaService,
    public productosService: ProductosService, 
    public pinturasService: PinturaService,
    public intermediarioService: IntermediarioService
    ) {

  }

  

  ngOnInit(): void {
  }


  buscar(){

  }

  updateInfo(id: number|any): void{

    this.intermediarioService.setTheValueID(id);
    console.log("envio de id: ", id);

  }

  agregarCarrito(id: number|any, valor: number|any):void{

    this.total = this.total + valor;
    this.carrito_Compras.push(id);

    

  }

  isIdThere(id: number|any):boolean {
    return this.carrito_Compras.includes(id);
  }

  eliminarDeCarrito(id: number|any, valor: number|any): void {
    this.total =  this.total - valor ;
    let index = this.carrito_Compras.indexOf(id);
    this.carrito_Compras.splice(index, 1);
  }



}
