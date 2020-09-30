import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { TarjetaDetalleComponent } from './componentes/tarjeta-detalle/tarjeta-detalle.component';
import { TarjetaNoticiaComponent } from './componentes/tarjeta-noticia/tarjeta-noticia.component';
import { TarjetaSemanalComponent } from './componentes/tarjeta-semanal/tarjeta-semanal.component';
import { DetalleNoticiaScreenComponent } from './pantallas/detalle-noticia-screen/detalle-noticia-screen.component';
import { InicioScreenComponent } from './pantallas/inicio-screen/inicio-screen.component';
import { NoticiasSemanaScreenComponent } from './pantallas/noticias-semana-screen/noticias-semana-screen.component';
@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    TarjetaDetalleComponent,
    TarjetaNoticiaComponent,
    TarjetaSemanalComponent,
    DetalleNoticiaScreenComponent,
    InicioScreenComponent,
    NoticiasSemanaScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
