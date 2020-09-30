import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleNoticiaScreenComponent } from './pantallas/detalle-noticia-screen/detalle-noticia-screen.component';
import { InicioScreenComponent } from './pantallas/inicio-screen/inicio-screen.component';
import { NoticiasSemanaScreenComponent } from './pantallas/noticias-semana-screen/noticias-semana-screen.component';



const routes: Routes = [
  {
    path: '', redirectTo: '/inicio', pathMatch: 'full',
  },
  {
    path: 'inicio', component: InicioScreenComponent,
  },
  {
    path: 'noticias-semana', component: NoticiasSemanaScreenComponent,
  },
  {
    path: 'detalle-noticia/:id', component: DetalleNoticiaScreenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
