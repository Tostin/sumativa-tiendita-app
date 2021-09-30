import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProductoComponent } from './producto/producto.component';
import { PaginaEnConstruccion404Component } from './pagina-en-construccion404/pagina-en-construccion404.component';
import { InformacionComponent } from './informacion/informacion.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ModalComponent } from './modal/modal.component';
import { ProductohijoComponent } from './productohijo/productohijo.component';
import { FormModule } from '../forms/form.module';





@NgModule({
    declarations: [
        CategoriaComponent,
        ProductoComponent,
        PaginaEnConstruccion404Component,
        InformacionComponent,
        HomeComponent,
        ModalComponent,
        ProductohijoComponent

    ],
    exports: [
        CategoriaComponent,
        ProductoComponent,
        PaginaEnConstruccion404Component,
        InformacionComponent,
        HomeComponent,
        ModalComponent,
        ProductohijoComponent

    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        FormModule,

    ]
})
export class GeneralModule { }
