import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DireccionComponent } from './direccion/direccion.component';
import { PagoComponent } from './pago/pago.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BaseComponent } from './base/base.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    DireccionComponent,
    PagoComponent,
    BaseComponent,
  ],

  exports: [
    DireccionComponent,
    PagoComponent,
    BaseComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ]
})
export class FormModule { }
