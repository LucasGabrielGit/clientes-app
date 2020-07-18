import { Servico } from './servico-prestado/servico';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  constructor(private http: HttpClient) { }


  salvar(servicoPrestado: ServicoPrestadoService): Observable<Servico> {
    return this.http.post<Servico>('', servicoPrestado)
  }
}
