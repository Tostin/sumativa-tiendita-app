import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideComponent } from './base/aside/aside.component';
import { FooterComponent } from './base/footer/footer.component';
import { NavComponent } from './base/nav/nav.component';
import { ComponentePruebaComponent } from './general/componente-prueba/componente-prueba.component';
import { GeneralModule } from './general/general.module';
import { RegistrarseComponent } from './general/registrarse/registrarse.component';
import { LoginModule } from './login/login.module';
import { FormModule } from './forms/form.module';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AsideComponent,
    FooterComponent,
    RegistrarseComponent,
    ComponentePruebaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //siempre se debe importar para submits por los ngModule
    HttpClientModule,
    LoginModule,
    GeneralModule,
    FormModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
