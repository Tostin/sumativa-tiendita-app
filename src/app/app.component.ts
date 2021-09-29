import { Component } from '@angular/core';
import { ProductosService } from './services/productos.service';
import { CategoriaService } from './services/categoria.service';
import { PinturaService } from './services/pintura.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sumativa-tiendita-app';
  //carga de todos los archivos json(o consumo de api) o toda la data que queremos cargar previa a la pagina
  constructor(public productosService: ProductosService,
            public categoriaService: CategoriaService, 
            public pinturaService: PinturaService) {
              
    console.log("AppComponent");
}
}
