import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './general/home/home.component';
import { LoginComponent } from './general/login/login.component';
import { PaginaEnConstruccion404Component } from './general/pagina-en-construccion404/pagina-en-construccion404.component';
import { ProductoComponent } from './general/producto/producto.component';
import { RegistrarseComponent } from './general/registrarse/registrarse.component';


// referencias a los componentes 
// path 'nombreruta', nombre componente
const app_routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'producto', component: ProductoComponent },
    { path: 'registrarse', component: RegistrarseComponent},
    { path: 'Login', component: LoginComponent},
    { path:'**', component: PaginaEnConstruccion404Component},

];

//decorador: no olvidar importarlo
@NgModule({
    imports: [RouterModule.forRoot(app_routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
