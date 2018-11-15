import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CuentaComponent } from './components/cuenta/cuenta.component';
import { FooterComponent } from './components/footer/footer.component';
import { CallbackComponent } from './components/callback/callback.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PromocionesComponent } from './components/promociones/promociones.component';
import { MasvendidoComponent } from './components/masvendido/masvendido.component';
import { AgrmodtierraComponent } from './components/agrmodtierra/agrmodtierra.component';
import { AdministrarTierraComponent } from './components/administrar-tierra/administrar-tierra.component';
import { AgrmodrecursosComponent } from './components/agrmodrecursos/agrmodrecursos.component';
import { ContratosComponent } from './components/contratos/contratos.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CuentaComponent,
    FooterComponent,
    CallbackComponent,
    BusquedaComponent,
    PromocionesComponent,
    MasvendidoComponent,
    AgrmodtierraComponent,
    AdministrarTierraComponent,
    AgrmodrecursosComponent,
    ContratosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
