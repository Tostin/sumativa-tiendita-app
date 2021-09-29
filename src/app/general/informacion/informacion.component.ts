import { Component, OnInit } from '@angular/core';
import { PinturaService } from '../../services/pintura.service';
import { IntermediarioService } from '../../services/intermediario.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {

  valorID: number|any = 0;

  constructor(public pinturasService: PinturaService, public intermediarioService: IntermediarioService) { 
    
  }

  ngOnInit(): void {
    this.valorID = this.intermediarioService.getTheValueID();
    console.log("se hace update en info: ", this.valorID);

  }
  

  updatehola():void{
    this.valorID = 2;
  }

  updateValor(): void{
    
    this.valorID = this.intermediarioService.getTheValueID();
    console.log("se hace update en info: ", this.valorID);

  }



}
