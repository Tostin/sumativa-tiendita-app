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

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AsideComponent,
    FooterComponent,
    ProductoComponent,
    CategoriaComponent,
    LoginComponent,
    RegistrarseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
