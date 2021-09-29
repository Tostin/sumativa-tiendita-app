import { Component, OnInit } from '@angular/core';
import { PinturaService } from 'src/app/services/pintura.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  prueba: string = "asd";

  constructor(private pinturaService: PinturaService) { 
    

  }

  ngOnInit(): void {
  }

  getPrueba(): string { return this.prueba; }

  }

