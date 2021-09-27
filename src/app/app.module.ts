import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { NavComponent } from './base/nav/nav.component';
import { AsideComponent } from './base/aside/aside.component';
import { FooterComponent } from './base/footer/footer.component';
import { ProductoComponent } from './general/producto/producto.component';
import { CategoriaComponent } from './general/categoria/categoria.component';
import { LoginComponent } from './general/login/login.component';
import { RegistrarseComponent } from './general/registrarse/registrarse.component';
import { HomeComponent } from './general/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { PaginaEnConstruccion404Component } from './general/pagina-en-construccion404/pagina-en-construccion404.component';
import { ComponentePruebaComponent } from './general/componente-prueba/componente-prueba.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AsideComponent,
    FooterComponent,
    ProductoComponent,
    CategoriaComponent,
    LoginComponent,
    RegistrarseComponent,
    HomeComponent,
    PaginaEnConstruccion404Component,
    ComponentePruebaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //siempre se debe importar para submits
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
