import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() titulo : any = null;
  @Input() detalle: any = null;
  @Input() accion :any = null;

  mensaje: string | undefined;

  @Output() accionModal1 = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  //metodos 

  enviarDatos(): void {
    console.log("holaaaaa");
    this.mensaje = "Enviando datos al padre";
    this.accionModal1.emit(this.mensaje);
  }

 
}
