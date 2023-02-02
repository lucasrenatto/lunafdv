import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { EventosModel, EventosResult } from 'src/app/shared/models/eventos/eventos';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  public url:string = "http://localhost:5001/Evento/BuscarTodos";
  public eventos:any;
  public errorMessage:any;
  public eventosModel:EventosResult;
  constructor(private http : HttpClient) { }
  
  
  public getEventos():any{
    return this.http.get(this.url);
  }
}

