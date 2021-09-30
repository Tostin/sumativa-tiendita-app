import { Component, Input, OnInit } from '@angular/core';
import { PinturaService } from '../../services/pintura.service';

@Component({
  selector: 'app-productohijo',
  templateUrl: './productohijo.component.html',
  styleUrls: ['./productohijo.component.css']
})
export class ProductohijoComponent implements OnInit {


  @Input() lista: any = null;
  @Input() ejemplo: any = null;

  constructor(public pinturasService: PinturaService) { }

  ngOnInit(): void {
  }

  

}


