import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.css']
})
export class DireccionComponent implements OnInit {

  pais     : string|null = null;
  calle    : string|null = null;
  ciudad   : string|null = null;
  region   : string|null = null;
  codigo   : string|null = null;

  constructor() { }

  ngOnInit(): void {
  }


  insertarDatosDir():void{

  }

}
