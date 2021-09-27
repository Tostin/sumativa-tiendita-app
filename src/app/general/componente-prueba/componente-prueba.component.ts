import { formatDate } from '@angular/common';
import { assertNotNull, isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-prueba',
  templateUrl: './componente-prueba.component.html',
  styleUrls: ['./componente-prueba.component.css']
})
export class ComponentePruebaComponent implements OnInit {


  Fecha: number = new Date().getTime(); //acostumbrarse al horario gringo
  Fecha1: string = new Date().toString();
  Fecha2: string = formatDate(new Date(), 'dd/MM/yyyy', 'en');
  Mes: number = new Date().getMonth() + 1;
  FechaU: number = new Date().getTime();
  //no se debería hacer esto, se deben usar metodos
  Mes2: number = new Date().getTime();
  Dia: number| null = null; // con "|" puede recivir multiples tipos
  //ejemplo
  Dia2: number|null = null;
  Agregado: string|null = null;


  Eliminado: null|string|undefined = null;
  Contador: number = 0;
  
  dias_semana:string[] = ['Domingo', 'Lunes', 'Martes','Miercoles', 'Jueves', 'Viernes', 'Sabado'];

  Curso: string = 'Curso Angula Básico';


constructor() {
  console.log("Constructor de Pruebas");
}

ngOnInit(): void {

  console.log("ngOnInit Pruebas");
}
//set and getters

get getMes(): number{ //getMes mejor que solo mes
  return this.Mes;
}

get getDia2(): number|null { //funciones tambien pueden tener distintos tipos de datos
  return this.Dia2;
}

get getContador(): number{
  return this.Contador;
}

get getEliminado(): undefined|null|string { 

  return this.Eliminado;
}


  //metodos (aplicamos la lógica de negocia)
//esto es el binding de data, que se actualice dinamicamente
// con el "(click)" para llamar a los metodos desde html
  obtenerMes(): void { //definicion de void

    //this.Dia2 = formatDate(new Date(), 'yyyy/MM/dd', 'en');
    
  }

  obtenerDia(): void { //definicion de void

    this.Dia2 = new Date().getDay();
    
  }

  sumar(): void {

    this.Contador++;
  }
  
  restar(): void {

    this.Contador--;
    
  }

  eliminarDia(): void{

    this.Eliminado=this.dias_semana.pop();
    console.log(this.Eliminado);
  }//.pop elimina el ultimo elemento del array

  agregar(nuevo: string): void {
  /*   var notnull = <unknown>document.getElementById("agregado")?.getAttributeNode;
    var notnull2 = <string>notnull;
    if(document.getElementById("agregado") != null)
    {
      this.dias_semana.push(notnull2);
    } */
    
    this.dias_semana.push(nuevo);

    
  }


}

