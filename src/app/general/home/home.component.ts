import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Titulo  : string = "Tarjeta"; //preferiblemente en misnuscula
  Detalle : string = "Esta a punto de realizar cambion en los productos"
  Accion  : string = "Guardar Producto";
  constructor() { }



  ngOnInit(): void {
  }


  capturarVariable(mensaje: string|undefined): void{
    console.log(mensaje);

  }
}
