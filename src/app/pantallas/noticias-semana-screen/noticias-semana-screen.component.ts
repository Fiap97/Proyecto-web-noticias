import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/modelo/noticia.model';
import { NoticiaService } from 'src/app/servicios/noticia/noticia.service';

@Component({
  selector: 'app-noticias-semana-screen',
  templateUrl: './noticias-semana-screen.component.html',
  styleUrls: ['./noticias-semana-screen.component.css']
})
export class NoticiasSemanaScreenComponent implements OnInit {

  public noticias: Noticia[];

  constructor(private noticiasService: NoticiaService) { }

  ngOnInit(): void {
    this.noticias = this.noticiasService.getNoticias();
  }

}
