import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavComponent } from '../base/nav/nav.component';
import { Lista_Pinturas, Pintura } from '../interfaces/pintura.interface';


@Injectable({
  providedIn: 'root'
})

export class PinturaService {


  url: string = "assets/data/pinturas.json";
  listita_pinturitas: Lista_Pinturas = {};
  pinturita: Pintura = {};

  constructor(private http: HttpClient,) {
    console.log("Pintura Service");

    this.cargaPinturas();
  }

  public cargaPinturas(){
    console.log("metodo carga pinturas");

    this.http.get(this.url).subscribe( (respuesta: Pintura|any) => {

      this.listita_pinturitas = respuesta;
      console.log(this.listita_pinturitas);
    });


  }

  

}
