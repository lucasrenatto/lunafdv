import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventosService } from 'src/app/core/services/eventos/eventos.service';
import { EventosModel, EventosResult } from 'src/app/shared/models/eventos/eventos';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  constructor(private http : HttpClient,private _eventosService: EventosService) { }
  public eventosList:EventosResult[];

  public url:string = "http://localhost:5001/Evento/BuscarTodos";
  public eventos:any;
  public errorMessage:any;
  ngOnInit(): void {
    this.getEventos();
  }

  // public getEventos():void{
  //  console.log(this._eventosService.getEventos().subscribe((eventos) => (this.eventosList = eventos)),
  //  (error) => console.log(error))
  // }

  public getEventos(): void{
    this.http.get(this.url).pipe(map(response => response)).subscribe(result => {
      this.eventos = result 
    });;    
  }
 
}
