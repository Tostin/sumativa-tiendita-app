import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {
  
  tipo_Tarjeta  : string|null = null;
  nombre_Tarjeta: string|null = null;
  num_Tarjeta   : string|null = null;
  cod_Tarjeta   : string|null = null;
  mes_Exp       : string|null = null;
  ano_Exp       : string|null = null;

  dict = {
    tipo_Tarjeta  : null,

  };


  @Output() accionPago = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  insertarDatosPago(): void {
    var dict1 = { 
      Tarjeta: this.tipo_Tarjeta,
      Nombre: this.nombre_Tarjeta,
      Numero: this.num_Tarjeta,
      Codigo: this.cod_Tarjeta,
      Mes: this.mes_Exp,
      Ano: this.ano_Exp

    };


    console.log("Se enviand datos");
    this.accionPago.emit(dict1);
  }

}
