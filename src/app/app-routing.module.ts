import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './general/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { PaginaEnConstruccion404Component } from './general/pagina-en-construccion404/pagina-en-construccion404.component';
import { ProductoComponent } from './general/producto/producto.component';
import { RegistroComponent } from './login/registro/registro.component';
import { InformacionComponent } from './general/informacion/informacion.component';
import { BaseComponent } from './forms/base/base.component';


// referencias a los componentes 
// path 'nombreruta', nombre componente
const app_routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'producto', component: ProductoComponent },
    { path: 'registrarse', component: RegistroComponent},
    { path: 'Login', component: LoginComponent},
    { path: 'Info', component: InformacionComponent},
    { path: 'base', component: BaseComponent},
    { path:'**', component: PaginaEnConstruccion404Component},

];

//decorador: no olvidar importarlo
@NgModule({
    imports: [RouterModule.forRoot(app_routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
