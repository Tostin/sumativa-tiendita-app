import { Component, Input, OnInit } from '@angular/core';
import { Lista_Pinturas, Pintura } from '../../interfaces/pintura.interface';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  @Input() Lista_Pintura: Pintura[]|undefined = [];
  @Input() carrito_Ids: number[]|undefined = [];
  @Input() total_Compra: number = 0;

  dictRecibo = { 
    Tarjeta: null,
    Nombre: null,
    Numero: null,
    Codigo: null,
    Mes: null,
    Ano: null

  };

  constructor() { }

  ngOnInit(): void {
  }


  eliminarDeCarrito(id: number, valor: number | undefined): void {


    if(valor != undefined) {
      this.total_Compra =  this.total_Compra - valor ;
    }

    if(this.carrito_Ids != undefined ) {
      let index = this.carrito_Ids.indexOf(id);
      this.carrito_Ids.splice(index, 1);
    }
  
  }

  capturadeTarjeta(valor: any): void {
    
    this.dictRecibo = valor;

    console.log(this.dictRecibo.Ano);
    
  }



}
